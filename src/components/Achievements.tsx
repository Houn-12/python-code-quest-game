
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { ArrowLeft, Check, Lock } from 'lucide-react';
import { achievements } from '@/data/modules';
import { Progress } from '@/components/ui/progress';

const Achievements: React.FC = () => {
  const { setScreen, currentUser } = useGame();
  
  const calculateProgress = () => {
    if (!currentUser) return 0;
    return (currentUser.achievements.length / achievements.length) * 100;
  };
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setScreen('learning')}
            className="mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Learning
          </Button>
          <h1 className="text-3xl font-bold text-game-primary">
            Achievements
          </h1>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setScreen('leaderboard')}
            variant="outline"
          >
            Leaderboard
          </Button>
          <Button 
            onClick={() => setScreen('learning')}
          >
            Continue Learning
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Achievement Progress</span>
          <span className="text-sm">
            {currentUser ? currentUser.achievements.length : 0} / {achievements.length} unlocked
          </span>
        </div>
        <Progress value={calculateProgress()} className="h-2" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => {
          const isUnlocked = currentUser?.achievements.includes(achievement.id);
          
          return (
            <Card 
              key={achievement.id}
              className={`overflow-hidden transition-all duration-300 ${
                isUnlocked 
                  ? "border-game-primary shadow-md" 
                  : "opacity-70"
              }`}
            >
              <CardContent className="p-0">
                <div className={`p-6 ${isUnlocked ? "bg-accent" : "bg-gray-100"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl">{achievement.icon}</span>
                    {isUnlocked ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-100 text-green-800 text-xs font-medium">
                        <Check className="w-3 h-3 mr-1" />
                        Unlocked
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">
                        <Lock className="w-3 h-3 mr-1" />
                        Locked
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
                <div className="px-6 py-3 border-t border-gray-200 bg-white">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-medium">How to earn: </span>
                    {achievement.condition}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Achievements;
