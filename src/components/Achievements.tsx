
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { ArrowLeft, Check, Lock, Trophy } from 'lucide-react';
import { achievements } from '@/data/modules';
import { Progress } from '@/components/ui/progress';
import { pythonTopics } from '@/data/topics';

// Define custom achievements for each topic
const topicAchievements = pythonTopics.map(topic => ({
  id: `master_${topic.id}`,
  title: `${topic.title} Master`,
  description: `Successfully completed all challenges in the ${topic.title} module`,
  icon: "🏆",
  condition: `Complete all questions in the ${topic.title} module`,
}));

// Define XP-based achievements
const xpAchievements = [
  {
    id: "xp_100",
    title: "XP Collector",
    description: "Earned 100 XP in your Python journey",
    icon: "⭐",
    condition: "Earn at least 100 XP",
  },
  {
    id: "xp_300",
    title: "XP Enthusiast",
    description: "Earned 300 XP in your Python journey",
    icon: "🌟",
    condition: "Earn at least 300 XP",
  },
  {
    id: "xp_500",
    title: "XP Master",
    description: "Earned 500 XP in your Python journey",
    icon: "✨",
    condition: "Earn at least 500 XP",
  }
];

// Define progression achievements
const progressionAchievements = [
  {
    id: "first_topic",
    title: "First Steps",
    description: "Completed your first Python topic",
    icon: "🔰",
    condition: "Complete any topic",
  },
  {
    id: "topic_explorer",
    title: "Topic Explorer",
    description: "Completed at least 3 different Python topics",
    icon: "🧭",
    condition: "Complete at least 3 topics",
  },
  {
    id: "python_apprentice",
    title: "Python Apprentice",
    description: "Completed at least 5 different Python topics",
    icon: "🐍",
    condition: "Complete at least 5 topics",
  },
  {
    id: "python_master",
    title: "Python Master",
    description: "Completed at least 8 different Python topics",
    icon: "🧙‍♂️",
    condition: "Complete at least 8 topics",
  }
];

// Combine all achievements
const allAchievements = [
  ...achievements,
  ...topicAchievements,
  ...xpAchievements,
  ...progressionAchievements
];

const Achievements: React.FC = () => {
  const { setScreen, currentUser } = useGame();
  
  const calculateProgress = () => {
    if (!currentUser) return 0;
    return (currentUser.achievements.length / allAchievements.length) * 100;
  };
  
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
          <h1 className="text-3xl font-bold text-foreground flex items-center">
            <Trophy className="h-7 w-7 mr-2 text-accent" /> Achievements
          </h1>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setScreen('leaderboard')}
            variant="outline"
          >
            Leaderboard
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Achievement Progress</span>
          <span className="text-muted-foreground">
            {currentUser ? currentUser.achievements.length : 0} / {allAchievements.length} unlocked
          </span>
        </div>
        <Progress value={calculateProgress()} className="h-2 bg-secondary/20" />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allAchievements.map((achievement) => {
          const isUnlocked = currentUser?.achievements.includes(achievement.id);
          
          return (
            <Card 
              key={achievement.id}
              className={`game-card overflow-hidden transition-all duration-300 ${
                isUnlocked 
                  ? "border-primary/50 shadow-md" 
                  : "opacity-70"
              }`}
            >
              <CardContent className="p-0">
                <div className={`p-6 ${isUnlocked ? "bg-primary/10" : "bg-card"}`}>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl">{achievement.icon}</span>
                    {isUnlocked ? (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-green-500/20 text-green-500 text-xs font-medium">
                        <Check className="w-3 h-3 mr-1" />
                        Unlocked
                      </span>
                    ) : (
                      <span className="inline-flex items-center px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                        <Lock className="w-3 h-3 mr-1" />
                        Locked
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
                <div className="px-6 py-3 border-t border-border">
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
