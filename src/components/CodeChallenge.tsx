
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertTriangle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { pythonTopics } from '@/data/topics';
import CodeEditor from './CodeEditor';

const CodeChallenge: React.FC = () => {
  const { currentTopic, setScreen, completeChallenge, unlockAchievement, currentUser } = useGame();
  const [code, setCode] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [usedHints, setUsedHints] = useState<boolean>(false);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const { toast } = useToast();
  
  // Find the topic based on currentTopic ID
  const topic = pythonTopics.find(t => t.id === currentTopic);
  
  // Safety check
  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Topic not found</h1>
        <Button onClick={() => setScreen('learning')} className="mt-4">
          Back to Learning
        </Button>
      </div>
    );
  }
  
  // Initialize code with a simple template for the current question
  useEffect(() => {
    setCode(`# Write your answer for Question ${currentQuestion + 1} here
# ${topic.questions[currentQuestion].question.replace(/\n/g, '\n# ')}

# Your code:

`);
    // Reset state for new question
    setOutput('');
    setIsCorrect(null);
  }, [currentQuestion, topic]);
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Reset results when code changes
    if (isCorrect !== null) {
      setIsCorrect(null);
    }
  };
  
  const handleRunCode = async () => {
    try {
      // Basic simulation of Python execution
      // In a real app, you would send the code to a backend service
      simulateCodeExecution(code);
    } catch (error) {
      setOutput(`Error: ${error instanceof Error ? error.message : String(error)}`);
      setIsCorrect(false);
    }
  };
  
  const simulateCodeExecution = (code: string) => {
    // Simple simulation for multiple-choice questions
    setOutput("Checking your answer...");
    
    // Extract user's answer from code comments or patterns
    // This is a simple simulation that just gives the user feedback
    setOutput(`Your solution has been submitted for question ${currentQuestion + 1}!`);
    
    // Simulate a correct answer with 70% chance to make testing easier
    // In a real app, you would actually evaluate the code
    const isAnswerCorrect = Math.random() < 0.7;
    
    setIsCorrect(isAnswerCorrect);
    
    if (isAnswerCorrect) {
      // Award XP for correct answer
      if (currentUser && !currentUser.completedChallenges.includes(`${topic.id}-q${currentQuestion}`)) {
        // Award XP
        toast({
          title: "+10 XP!",
          description: "Great job on answering correctly!",
          className: "bg-green-500 text-white",
        });
      }
    }
  };
  
  const handleNextQuestion = () => {
    if (currentQuestion < topic.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // All questions completed for this topic
      completeChallenge(topic.id, 50); // Award 50 points for completing all questions
      
      toast({
        title: "Topic Completed!",
        description: `You've finished the ${topic.title} challenge!`,
        className: "bg-game-primary text-white",
      });
      
      // Unlock achievements
      unlockAchievement('topic_master');
      if (!usedHints) {
        unlockAchievement('hint_free');
      }
      
      // Go to leaderboard or back to topics
      setScreen('topics');
    }
  };
  
  const handleBackToLearning = () => {
    setScreen('learning');
  };
  
  const handleUseHint = () => {
    setUsedHints(true);
  };

  const question = topic.questions[currentQuestion];

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="flex items-center mb-6">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleBackToLearning}
          className="mr-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Back to Learning
        </Button>
        <h1 className="text-3xl font-bold text-game-primary">
          {topic.title}: Question {currentQuestion + 1}/{topic.questions.length}
        </h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Question {currentQuestion + 1}</CardTitle>
          <CardDescription>{question.question}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            {question.code && (
              <pre className="bg-gray-800 text-white p-4 rounded-md mb-4">
                <code>{question.code}</code>
              </pre>
            )}
            
            <div className="grid grid-cols-1 gap-2 mt-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  className={`justify-start text-left h-auto py-3 px-4`}
                  variant="outline"
                  onClick={() => {
                    // Simulate answering
                    setIsCorrect(index === question.correctAnswer);
                    
                    if (index === question.correctAnswer) {
                      // Award XP for correct answer
                      if (currentUser && !currentUser.completedChallenges.includes(`${topic.id}-q${currentQuestion}`)) {
                        toast({
                          title: "+10 XP!",
                          description: "Great job on answering correctly!",
                          className: "bg-green-500 text-white",
                        });
                      }
                    }
                  }}
                >
                  <span className="font-mono mr-2">{String.fromCharCode(65 + index)}.</span>
                  {option}
                </Button>
              ))}
            </div>
          </div>
          
          {isCorrect !== null && (
            <div className="mt-4">
              {isCorrect ? (
                <Alert className="bg-green-50 border-green-200">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <AlertDescription className="text-green-700">
                    Correct! {question.explanation}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="bg-orange-50 border-orange-200">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                  <AlertDescription className="text-orange-700">
                    Not quite right. Try again!
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
        </CardContent>
      </Card>
      
      <div className="flex justify-between">
        <Button 
          variant="outline" 
          onClick={handleBackToLearning}
        >
          Back to Learning
        </Button>
        
        {isCorrect && (
          <Button 
            onClick={handleNextQuestion}
            className="bg-game-primary hover:bg-game-secondary"
          >
            {currentQuestion < topic.questions.length - 1 ? (
              <>Next Question <ArrowRight className="ml-2 h-4 w-4" /></>
            ) : (
              <>Complete Topic <Check className="ml-2 h-4 w-4" /></>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CodeChallenge;
