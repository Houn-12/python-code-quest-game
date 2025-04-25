
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { pythonTopics } from '@/data/topics';
import { BookOpen, Trophy, ArrowRight } from 'lucide-react';

const TopicSelection: React.FC = () => {
  const { setScreen, currentUser, setCurrentTopic } = useGame();

  const handleTopicSelect = (topicId: string) => {
    setCurrentTopic(topicId);
    setScreen('learning');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-game-primary" />
          <h1 className="text-3xl font-bold text-game-primary">
            Choose Your Python Path
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-lg font-semibold">
            XP: {currentUser?.xp || 0}
          </span>
          <Button 
            onClick={() => setScreen('achievements')}
            variant="outline"
          >
            <Trophy className="h-4 w-4 mr-2" />
            Achievements
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pythonTopics.map((topic) => {
          const isCompleted = currentUser?.completedChallenges.includes(topic.id);
          const progress = currentUser?.progress[topic.id] || 0;
          
          return (
            <Card 
              key={topic.id}
              className={`transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                isCompleted ? 'border-green-500' : ''
              }`}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{topic.title}</span>
                  {isCompleted && (
                    <Trophy className="h-5 w-5 text-green-500" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{topic.description}</p>
                {progress > 0 && (
                  <p className="text-sm text-gray-500 mb-2">
                    Current Score: {progress}XP
                  </p>
                )}
                <Button 
                  onClick={() => handleTopicSelect(topic.id)}
                  className="w-full"
                >
                  {isCompleted ? 'Review Topic' : 'Start Learning'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TopicSelection;
