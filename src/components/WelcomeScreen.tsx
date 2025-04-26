
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGame } from '@/contexts/GameContext';
import { Code, BookOpen, Trophy } from 'lucide-react';

const WelcomeScreen: React.FC = () => {
  const { setScreen, setCurrentUser } = useGame();
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setCurrentUser({
        name: name.trim(),
        progress: {},
        score: 0,
        completedChallenges: [],
        achievements: [],
        xp: 0
      });
      setScreen('topics');
    }
  };

  const handleStartGame = () => {
    setIsNameEntered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fade-in">
      {!isNameEntered ? (
        <div className="text-center space-y-8 max-w-2xl">
          <div className="flex items-center justify-center space-x-4 mb-2">
            <Code className="h-12 w-12 text-secondary animate-float" />
            <h1 className="text-5xl font-bold">
              <span className="text-primary">Python</span> <span className="text-secondary">Code</span> <span className="text-accent">Quest</span>
            </h1>
            <Code className="h-12 w-12 text-secondary animate-float" />
          </div>
          
          <div className="relative w-fit mx-auto my-8 p-4 bg-card rounded-lg border border-border">
            <div className="code-editor w-full overflow-hidden">
              <div className="overflow-hidden whitespace-nowrap" style={{ animation: 'code-typing 3s steps(40, end)' }}>
                <span className="code-keyword">print</span>
                <span className="code-operator">(</span>
                <span className="code-string">"Hello, Python Adventurer!"</span>
                <span className="code-operator">)</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground">
            Begin your journey to master Python programming through interactive challenges, 
            earn achievements, and compete on the leaderboard!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <BookOpen className="h-8 w-8 mx-auto mb-2 text-primary" />
              <h3 className="text-lg font-semibold mb-2">Learn</h3>
              <p className="text-muted-foreground">Master Python concepts through interactive tutorials</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <Code className="h-8 w-8 mx-auto mb-2 text-secondary" />
              <h3 className="text-lg font-semibold mb-2">Practice</h3>
              <p className="text-muted-foreground">Test your skills with coding challenges</p>
            </div>
            <div className="bg-card rounded-lg p-6 shadow-md border border-border">
              <Trophy className="h-8 w-8 mx-auto mb-2 text-accent" />
              <h3 className="text-lg font-semibold mb-2">Achieve</h3>
              <p className="text-muted-foreground">Earn achievements and climb the leaderboard</p>
            </div>
          </div>
          
          <Button 
            onClick={handleStartGame}
            className="mt-8 bg-primary hover:bg-primary/80 text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-200"
          >
            Start Your Adventure
          </Button>
        </div>
      ) : (
        <div className="bg-card p-8 rounded-xl shadow-lg max-w-md w-full border border-border">
          <h2 className="text-2xl font-bold text-center mb-6">Enter Your Name</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Your Coding Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-background border-border"
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              disabled={!name.trim()}
              className="w-full bg-primary hover:bg-primary/80"
            >
              Begin Your Quest
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default WelcomeScreen;
