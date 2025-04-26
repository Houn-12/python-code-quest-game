
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { pythonTopics } from '@/data/topics';
import { BookOpen, Trophy, Medal, ArrowRight } from 'lucide-react';

const TopicSelection: React.FC = () => {
  const { setScreen, currentUser, setCurrentTopic } = useGame();

  const handleTopicSelect = (topicId: string) => {
    setCurrentTopic(topicId);
    setScreen('learning');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl animate-fade-in">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 gap-4">
        <div className="flex items-center gap-2">
          <BookOpen className="h-8 w-8 text-accent" />
          <h1 className="text-3xl font-bold text-foreground">
            Choose Your Python Path
          </h1>
        </div>
        
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-4 py-2 bg-card rounded-lg border border-border flex items-center gap-2">
            <svg className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <span className="text-lg font-semibold">
              XP: {currentUser?.xp || 0}
            </span>
          </div>
          
          <Button 
            onClick={() => setScreen('achievements')}
            variant="outline"
            className="flex items-center"
          >
            <Trophy className="h-4 w-4 mr-2" />
            Achievements
          </Button>
          
          <Button 
            onClick={() => setScreen('leaderboard')}
            variant="outline"
            className="flex items-center"
          >
            <Medal className="h-4 w-4 mr-2" />
            Leaderboard
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
              className={`game-card ${
                isCompleted ? 'border-green-500/50' : ''
              }`}
            >
              <CardHeader className="border-b border-border/50">
                <CardTitle className="flex items-center justify-between">
                  <span>{topic.title}</span>
                  {isCompleted && (
                    <Trophy className="h-5 w-5 text-green-500" />
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-muted-foreground mb-4">{topic.description}</p>
                {progress > 0 && (
                  <p className="text-sm text-muted-foreground mb-2">
                    Score: {progress}XP
                  </p>
                )}
                <Button 
                  onClick={() => handleTopicSelect(topic.id)}
                  className="w-full bg-primary hover:bg-primary/80"
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
