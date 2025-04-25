
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { pythonModules } from '@/data/modules';
import { Check, ArrowRight } from 'lucide-react';

const LearningModule: React.FC = () => {
  const { currentModule, setCurrentModule, setScreen, currentUser } = useGame();
  const [activeTab, setActiveTab] = useState<'content' | 'examples'>('content');
  const [currentExample, setCurrentExample] = useState(0);
  
  const module = pythonModules[currentModule];
  
  const handleNextModule = () => {
    if (currentModule < pythonModules.length - 1) {
      setCurrentModule(currentModule + 1);
    }
  };
  
  const handlePreviousModule = () => {
    if (currentModule > 0) {
      setCurrentModule(currentModule - 1);
    }
  };
  
  const handleStartChallenge = () => {
    setScreen('challenge');
  };
  
  const handleNextExample = () => {
    if (currentExample < module.examples.length - 1) {
      setCurrentExample(currentExample + 1);
    }
  };
  
  const handlePreviousExample = () => {
    if (currentExample > 0) {
      setCurrentExample(currentExample - 1);
    }
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

  const isModuleCompleted = currentUser?.completedChallenges?.includes(`module-${module.id}`);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-game-primary">
          Module {module.id + 1}: {module.title}
        </h1>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setScreen('welcome')}
            variant="outline"
          >
            Home
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
        <p className="text-lg">{module.description}</p>
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
                __html: module.content
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
            <CardTitle>{module.examples[currentExample].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <pre className="code-editor rounded mb-4 w-full overflow-x-auto">
              <code dangerouslySetInnerHTML={{ 
                __html: formatPythonCode(module.examples[currentExample].code) 
              }} />
            </pre>
            <div className="bg-accent p-4 rounded-md">
              <h4 className="font-semibold mb-2">Explanation:</h4>
              <p>{module.examples[currentExample].explanation}</p>
            </div>
            <div className="flex justify-between mt-4">
              <Button 
                onClick={handlePreviousExample}
                disabled={currentExample === 0}
                variant="outline"
              >
                Previous Example
              </Button>
              <Button 
                onClick={handleNextExample}
                disabled={currentExample === module.examples.length - 1}
              >
                Next Example
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex justify-between">
        <Button
          onClick={handlePreviousModule}
          disabled={currentModule === 0}
          variant="outline"
        >
          Previous Module
        </Button>
        
        <Button
          onClick={handleStartChallenge}
          className="bg-game-primary hover:bg-game-secondary"
        >
          {isModuleCompleted ? (
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
          onClick={handleNextModule}
          disabled={currentModule === pythonModules.length - 1}
          variant="outline"
        >
          Next Module
        </Button>
      </div>
    </div>
  );
};

export default LearningModule;
