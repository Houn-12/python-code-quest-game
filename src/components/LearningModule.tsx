
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { pythonTopics } from '@/data/topics';
import { Check, ArrowRight } from 'lucide-react';

const LearningModule: React.FC = () => {
  const { currentTopic, setScreen, currentUser } = useGame();
  const [activeTab, setActiveTab] = useState<'content' | 'examples'>('content');
  const [currentExample, setCurrentExample] = useState(0);
  
  // Find the topic based on currentTopic ID
  const topic = pythonTopics.find(t => t.id === currentTopic);
  
  // Safety check to prevent undefined access
  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Topic not found</h1>
        <Button onClick={() => setScreen('topics')} className="mt-4">
          Back to Topics
        </Button>
      </div>
    );
  }
  
  const handleNextTopic = () => {
    const currentIndex = pythonTopics.findIndex(t => t.id === topic.id);
    if (currentIndex < pythonTopics.length - 1) {
      const nextTopic = pythonTopics[currentIndex + 1];
      // Update to use setCurrentTopic instead of setCurrentModule
      if (nextTopic) {
        setCurrentTopic(nextTopic.id);
      }
    }
  };
  
  const handlePreviousTopic = () => {
    const currentIndex = pythonTopics.findIndex(t => t.id === topic.id);
    if (currentIndex > 0) {
      const prevTopic = pythonTopics[currentIndex - 1];
      // Update to use setCurrentTopic instead of setCurrentModule
      if (prevTopic) {
        setCurrentTopic(prevTopic.id);
      }
    }
  };
  
  const handleStartChallenge = () => {
    setScreen('challenge');
  };

  const formatPythonCode = (code: string) => {
    // Basic syntax highlighting
    return code
      .replace(/\b(def|class|if|else|elif|for|while|return|import|from|as|try|except|finally|with|in|and|or|not|True|False|None)\b/g, '<span class="code-keyword">$1</span>')
      .replace(/\b(print|len|range|str|int|float|bool|list|dict|set|tuple)\b/g, '<span class="code-function">$1</span>')
      .replace(/(["'])(.*?)\1/g, '<span class="code-string">$1$2$1</span>')
      .replace(/\b([0-9]+)\b/g, '<span class="code-number">$1</span>')
      .replace(/(#.*)$/mg, '<span class="code-comment">$1</span>')
      .replace(/(\+|\-|\*|\/|\%|\=|\=\=|\!\=|\&lt;|\&gt;|\&lt;\=|\&gt;\=)/g, '<span class="code-operator">$1</span>');
  };

  // Fake examples for display until we have real ones
  const examples = [
    {
      title: "Basic Variable Example",
      code: "# This is a simple variable example\nname = 'Python'\nage = 30\nprint(f'Hello, {name}! You are {age} years old.')",
      explanation: "This example shows how to create variables and use them in a formatted string."
    }
  ];

  const isTopicCompleted = currentUser?.completedChallenges?.includes(topic.id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-game-primary">
          Topic: {topic.title}
        </h1>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setScreen('welcome')}
            variant="outline"
          >
            Home
          </Button>
          <Button 
            onClick={() => setScreen('topics')}
            variant="outline"
          >
            Topics
          </Button>
          <Button 
            onClick={() => setScreen('leaderboard')}
            variant="outline"
          >
            Leaderboard
          </Button>
          <Button 
            onClick={() => setScreen('achievements')}
            variant="outline"
          >
            Achievements
          </Button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <p className="text-lg">{topic.description}</p>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <Button
          className={activeTab === 'content' ? 'bg-game-primary' : 'bg-gray-300'}
          onClick={() => setActiveTab('content')}
        >
          Content
        </Button>
        <Button
          className={activeTab === 'examples' ? 'bg-game-primary' : 'bg-gray-300'}
          onClick={() => setActiveTab('examples')}
        >
          Examples
        </Button>
      </div>

      {activeTab === 'content' ? (
        <Card className="mb-8">
          <CardContent className="p-6">
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ 
                __html: topic.content
                  .split('\n')
                  .map(line => {
                    if (line.startsWith('# ')) {
                      return `<h2 class="text-2xl font-bold mt-4 mb-2">${line.substring(2)}</h2>`;
                    } else if (line.startsWith('## ')) {
                      return `<h3 class="text-xl font-semibold mt-4 mb-2">${line.substring(3)}</h3>`;
                    } else if (line.trim() === '') {
                      return '<br />';
                    } else {
                      return `<p>${line}</p>`;
                    }
                  })
                  .join('\n')
              }}
            />
          </CardContent>
        </Card>
      ) : (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{examples[currentExample].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="code-editor rounded mb-4 w-full overflow-x-auto">
              <code dangerouslySetInnerHTML={{ 
                __html: formatPythonCode(examples[currentExample].code) 
              }} />
            </pre>
            <div className="bg-accent p-4 rounded-md">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p>{examples[currentExample].explanation}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button
          onClick={handlePreviousTopic}
          disabled={pythonTopics.findIndex(t => t.id === topic.id) === 0}
          variant="outline"
        >
          Previous Topic
        </Button>
        
        <Button
          onClick={handleStartChallenge}
          className="bg-game-primary hover:bg-game-secondary"
        >
          {isTopicCompleted ? (
            <>
              <Check className="mr-2 h-4 w-4" /> Revisit Challenge
            </>
          ) : (
            <>
              Take the Challenge <ArrowRight className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
        
        <Button
          onClick={handleNextTopic}
          disabled={pythonTopics.findIndex(t => t.id === topic.id) === pythonTopics.length - 1}
          variant="outline"
        >
          Next Topic
        </Button>
      </div>
    </div>
  );
};

export default LearningModule;
