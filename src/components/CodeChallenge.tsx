
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useToast } from "@/hooks/use-toast";
import { Check, AlertTriangle, ArrowLeft } from 'lucide-react';
import { useGame } from '@/contexts/GameContext';
import { pythonModules } from '@/data/modules';
import CodeEditor from './CodeEditor';

const CodeChallenge: React.FC = () => {
  const { currentModule, setScreen, completeChallenge, unlockAchievement, currentUser } = useGame();
  const [code, setCode] = useState(pythonModules[currentModule].challenge.initialCode);
  const [output, setOutput] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [usedHints, setUsedHints] = useState<boolean>(false);
  const { toast } = useToast();
  
  const module = pythonModules[currentModule];
  const challenge = module.challenge;
  
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
    // This is a very simplified simulation
    // In a real app, this would be handled by a backend service
    
    let outputLines: string[] = [];
    
    try {
      // Extract print statements and simulate their output
      const printRegex = /print\((.*?)\)/g;
      let match;
      
      // Simple simulation of variable assignment and print statements
      // This won't execute real Python, just simulate the specific challenges
      
      if (challenge.id === 'variables_challenge') {
        // Variables challenge
        const aValue = code.includes('a = a + b') && code.includes('b = a - b') && code.includes('a = a - b');
        const bValue = aValue; // If a is correct, b should also be correct in this algorithm
        
        outputLines.push(`a = ${aValue ? 10 : 5}`);
        outputLines.push(`b = ${bValue ? 5 : 10}`);
        
        setIsCorrect(aValue && bValue);
      } 
      else if (challenge.id === 'conditions_challenge') {
        // Leap year challenge
        const yearMatch = code.match(/year\s*=\s*(\d+)/);
        const year = yearMatch ? parseInt(yearMatch[1]) : 2024;
        
        const isLeapYear = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
        const correctOutput = `${year} is${isLeapYear ? '' : ' not'} a leap year`;
        
        // Check if code contains the correct condition
        const hasCorrectCondition = 
          code.includes('year % 400 == 0') && 
          code.includes('year % 4 == 0') && 
          code.includes('year % 100 != 0');
        
        // Check if code would print the correct output
        while ((match = printRegex.exec(code)) !== null) {
          let printOutput = match[1].trim();
          if (printOutput.includes('"') || printOutput.includes("'")) {
            // Extract string literal
            printOutput = printOutput.replace(/["'](.*?)["']/, correctOutput);
          } else if (printOutput.includes('f"') || printOutput.includes("f'")) {
            // Simple f-string handling
            printOutput = correctOutput;
          }
          outputLines.push(printOutput);
        }
        
        const userOutput = outputLines.join('\n').includes(correctOutput);
        setIsCorrect(hasCorrectCondition && userOutput);
      }
      else if (challenge.id === 'loops_challenge') {
        // FizzBuzz challenge
        const hasForLoop = code.includes('for ') && (code.includes('range(1, 21)') || code.includes('range(1, 20 + 1)'));
        const hasFizzCheck = code.includes('% 3 == 0');
        const hasBuzzCheck = code.includes('% 5 == 0');
        const hasFizzBuzzCheck = (code.includes('% 3 == 0 and % 5 == 0') || code.includes('% 15 == 0'));
        
        let correctOutput = '';
        for (let i = 1; i <= 20; i++) {
          if (i % 3 === 0 && i % 5 === 0) correctOutput += 'FizzBuzz\n';
          else if (i % 3 === 0) correctOutput += 'Fizz\n';
          else if (i % 5 === 0) correctOutput += 'Buzz\n';
          else correctOutput += `${i}\n`;
        }
        correctOutput = correctOutput.trim();
        
        // Simulate FizzBuzz output based on code structure
        if (hasForLoop && hasFizzCheck && hasBuzzCheck) {
          outputLines.push(correctOutput);
          setIsCorrect(hasForLoop && hasFizzCheck && hasBuzzCheck && hasFizzBuzzCheck);
        } else {
          outputLines.push('Incomplete implementation. Check your loop and conditions.');
          setIsCorrect(false);
        }
      }
      
      // If no output was generated, get generic output from print statements
      if (outputLines.length === 0) {
        while ((match = printRegex.exec(code)) !== null) {
          outputLines.push(match[1].replace(/["']/g, ''));
        }
      }
      
      setOutput(outputLines.join('\n'));
      
      // Check if output matches expected
      if (isCorrect && !currentUser?.completedChallenges.includes(`module-${module.id}`)) {
        completeChallenge(module.id, 100);
        toast({
          title: "Challenge Completed!",
          description: `You've successfully completed "${challenge.title}"`,
        });
        
        // Unlock achievements
        unlockAchievement('first_challenge');
        if (!usedHints) {
          unlockAchievement('hint_free');
        }
      }
      
    } catch (error) {
      setOutput(`Error in code simulation: ${error instanceof Error ? error.message : String(error)}`);
      setIsCorrect(false);
    }
  };
  
  const handleBackToLearning = () => {
    setScreen('learning');
  };
  
  const handleUseHint = () => {
    setUsedHints(true);
  };

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
          Challenge: {challenge.title}
        </h1>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Your Mission</CardTitle>
          <CardDescription>{challenge.description}</CardDescription>
        </CardHeader>
        <CardContent>
          <CodeEditor
            initialCode={challenge.initialCode}
            onCodeChange={handleCodeChange}
            onRunCode={handleRunCode}
            output={output}
            expectedOutput={challenge.expectedOutput}
            hints={challenge.hints}
          />
          
          {isCorrect !== null && (
            <div className="mt-4">
              {isCorrect ? (
                <Alert className="bg-green-50 border-green-200">
                  <Check className="h-4 w-4 text-green-500 mr-2" />
                  <AlertDescription className="text-green-700">
                    Great job! Your solution works correctly.
                  </AlertDescription>
                </Alert>
              ) : (
                <Alert className="bg-orange-50 border-orange-200">
                  <AlertTriangle className="h-4 w-4 text-orange-500 mr-2" />
                  <AlertDescription className="text-orange-700">
                    Not quite right. Keep trying!
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
            onClick={() => setScreen('leaderboard')} 
            className="bg-game-primary hover:bg-game-secondary"
          >
            View Leaderboard
          </Button>
        )}
      </div>
    </div>
  );
};

export default CodeChallenge;
