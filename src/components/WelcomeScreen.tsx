
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGame } from '@/contexts/GameContext';

const WelcomeScreen: React.FC = () => {
  const { setScreen, setCurrentUser } = useGame();
  const [name, setName] = useState('');
  const [isNameEntered, setIsNameEntered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      setCurrentUser({
        name: name.trim(),
        progress: [],
        score: 0,
        completedChallenges: [],
        achievements: []
      });
      setScreen('learning');
    }
  };

  const handleStartGame = () => {
    setIsNameEntered(true);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] p-4 animate-fade-in">
      {!isNameEntered ? (
        <div className="text-center space-y-8 max-w-2xl">
          <h1 className="text-5xl font-bold text-game-primary">
            Python Code Quest
          </h1>
          
          <div className="relative w-fit mx-auto my-8">
            <div className="code-editor w-full overflow-hidden">
              <div className="overflow-hidden whitespace-nowrap" style={{ animation: 'code-typing 3s steps(40, end)' }}>
                <span className="code-keyword">print</span>
                <span className="code-operator">(</span>
                <span className="code-string">"Hello, Python Adventurer!"</span>
                <span className="code-operator">)</span>
              </div>
            </div>
          </div>
          
          <p className="text-xl">
            Begin your journey to master Python programming through interactive challenges, 
            earn achievements, and compete on the leaderboard!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Learn</h3>
              <p>Master Python concepts through interactive tutorials</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Practice</h3>
              <p>Test your skills with coding challenges</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2">Achieve</h3>
              <p>Earn achievements and climb the leaderboard</p>
            </div>
          </div>
          
          <Button 
            onClick={handleStartGame}
            className="mt-8 bg-game-primary hover:bg-game-secondary text-white font-bold py-3 px-8 rounded-full text-xl transition-all duration-200"
          >
            Start Your Adventure
          </Button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
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
                className="w-full"
                autoFocus
              />
            </div>
            <Button 
              type="submit" 
              disabled={!name.trim()}
              className="w-full bg-game-primary hover:bg-game-secondary"
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
