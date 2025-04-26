
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { pythonTopics } from '@/data/topics';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';

const LearningModule: React.FC = () => {
  const { currentTopic, setScreen, currentUser } = useGame();
  const [activeTab, setActiveTab] = useState<'content' | 'examples'>('content');
  
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

  // Fetch examples from the topic or use fallbacks
  const examples = [
    {
      title: `${topic.title} Example`,
      code: topic.content.match(/```python([\s\S]*?)```/)?.[1] || 
        "# No example code available for this topic",
      explanation: `This example demonstrates key concepts from the ${topic.title} topic.`
    }
  ];

  const isTopicCompleted = currentUser?.completedChallenges?.includes(topic.id);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setScreen('topics')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Topics
          </Button>
          <h1 className="text-3xl font-bold text-foreground">
            {topic.title}
          </h1>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setScreen('achievements')}
            variant="outline"
          >
            Achievements
          </Button>
          <Button 
            onClick={() => setScreen('leaderboard')}
            variant="outline"
          >
            Leaderboard
          </Button>
        </div>
      </div>

      <div className="bg-card rounded-lg shadow-md p-6 mb-6 border border-border">
        <p className="text-lg">{topic.description}</p>
      </div>
      
      <div className="flex space-x-2 mb-4">
        <Button
          className={activeTab === 'content' ? 'bg-primary' : 'bg-muted hover:bg-muted/80'}
          onClick={() => setActiveTab('content')}
        >
          Content
        </Button>
        <Button
          className={activeTab === 'examples' ? 'bg-primary' : 'bg-muted hover:bg-muted/80'}
          onClick={() => setActiveTab('examples')}
        >
          Examples
        </Button>
      </div>

      {activeTab === 'content' ? (
        <Card className="mb-8 game-card">
          <CardContent className="p-6">
            <div 
              className="prose max-w-none prose-invert prose-headings:text-foreground prose-p:text-muted-foreground"
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
        <Card className="mb-8 game-card">
          <CardHeader className="border-b border-border">
            <CardTitle>{examples[0].title}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <pre className="code-editor mb-4 w-full overflow-x-auto">
              <code dangerouslySetInnerHTML={{ 
                __html: formatPythonCode(examples[0].code) 
              }} />
            </pre>
            <div className="bg-accent/10 p-4 rounded-md border border-accent/20">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p className="text-muted-foreground">{examples[0].explanation}</p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-end">
        <Button
          onClick={handleStartChallenge}
          className="bg-primary hover:bg-primary/80"
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
      </div>
    </div>
  );
};

export default LearningModule;
