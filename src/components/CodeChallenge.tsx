
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertTriangle, ArrowLeft, ArrowRight } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { pythonTopics } from '@/data/topics';

const CodeChallenge: React.FC = () => {
  const { currentTopic, setScreen, completeChallenge, currentUser } = useGame();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [attemptedAnswer, setAttemptedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [earnedXP, setEarnedXP] = useState<number>(0);
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

  // Check if topic is already completed
  const isTopicCompleted = currentUser?.completedChallenges.includes(topic.id);

  // Reset state when changing questions  
  useEffect(() => {
    setIsCorrect(null);
    setAttemptedAnswer(null);
  }, [currentQuestion]);
  
  const handleBackToLearning = () => {
    setScreen('learning');
  };

  const handleAnswerQuestion = (selectedIndex: number) => {
    // Prevent changing answer if already answered
    if (attemptedAnswer !== null) return;
    
    const isAnswerCorrect = selectedIndex === topic.questions[currentQuestion].correctAnswer;
    setIsCorrect(isAnswerCorrect);
    setAttemptedAnswer(selectedIndex);
    
    if (isAnswerCorrect && !isTopicCompleted) {
      // Award XP for correct answer only on first attempt of the topic
      if (!answeredQuestions.has(currentQuestion)) {
        const newAnsweredQuestions = new Set(answeredQuestions);
        newAnsweredQuestions.add(currentQuestion);
        setAnsweredQuestions(newAnsweredQuestions);
        
        // Track earned XP for the final score
        setEarnedXP(earnedXP + 10);
        
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
      // Only award score if topic wasn't previously completed
      if (!isTopicCompleted && earnedXP > 0) {
        completeChallenge(topic.id, earnedXP);
        
        toast({
          title: "Topic Completed!",
          description: `You've finished the ${topic.title} challenge!`,
          className: "bg-primary text-white",
        });
      } else if (isTopicCompleted) {
        toast({
          title: "Review Completed",
          description: `You've reviewed the ${topic.title} topic.`,
          className: "bg-primary text-white", 
        });
      }
      
      // Go back to topics
      setScreen('topics');
    }
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
        <h1 className="text-3xl font-bold text-foreground">
          {topic.title}: Question {currentQuestion + 1}/{topic.questions.length}
        </h1>
      </div>

      <Card className="mb-8 game-card">
        <CardHeader className="border-b border-border">
          <CardTitle>Question {currentQuestion + 1}</CardTitle>
          <CardDescription className="text-muted-foreground">{question.question}</CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-6">
            {question.code && (
              <pre className="code-editor mb-4 w-full overflow-x-auto">
                <code>{question.code}</code>
              </pre>
            )}
            
            <div className="grid grid-cols-1 gap-2 mt-4">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  className={`justify-start text-left h-auto py-3 px-4 ${
                    attemptedAnswer === index 
                      ? (index === question.correctAnswer 
                        ? "bg-green-500 hover:bg-green-500 text-white" 
                        : "bg-red-500 hover:bg-red-500 text-white")
                      : attemptedAnswer !== null && index === question.correctAnswer
                      ? "bg-green-500 hover:bg-green-500 text-white"
                      : ""
                  }`}
                  variant="outline"
                  disabled={attemptedAnswer !== null}
                  onClick={() => handleAnswerQuestion(index)}
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
                <Alert className="bg-green-500/20 border-green-500/30">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <AlertDescription className="text-green-500">
                    Correct! {question.explanation}
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="bg-red-500/20 border-red-500/30">
                  <AlertTriangle className="h-4 w-4 text-red-500 mr-2" />
                  <AlertDescription className="text-red-500">
                    Incorrect. The correct answer is option {String.fromCharCode(65 + question.correctAnswer)}.
                    {question.explanation}
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
        
        {attemptedAnswer !== null && (
          <Button 
            onClick={handleNextQuestion}
            className="bg-primary hover:bg-primary/80"
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
