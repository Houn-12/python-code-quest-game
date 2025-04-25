
import React, { createContext, useState, useContext, ReactNode } from "react";
import { useToast } from "@/hooks/use-toast";

export interface User {
  name: string;
  progress: Record<string, number>;  // Changed to track per-topic progress
  score: number;
  completedChallenges: string[];
  achievements: string[];
  xp: number;  // Added XP tracking
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  completedTopics: number;
  xp: number;
}

interface GameContextType {
  screen: "welcome" | "topics" | "learning" | "challenge" | "leaderboard" | "achievements";
  setScreen: (screen: "welcome" | "topics" | "learning" | "challenge" | "leaderboard" | "achievements") => void;
  currentTopic: string;
  setCurrentTopic: (topic: string) => void;
  currentQuestion: number;
  setCurrentQuestion: (question: number) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  leaderboard: LeaderboardEntry[];
  addToLeaderboard: (entry: LeaderboardEntry) => void;
  completeChallenge: (topicId: string, score: number) => void;
  awardXP: (amount: number) => void;
  unlockAchievement: (achievementId: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<GameContextType["screen"]>("welcome");
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const { toast } = useToast();

  const awardXP = (amount: number) => {
    if (!currentUser) return;
    
    const newXP = (currentUser.xp || 0) + amount;
    setCurrentUser({
      ...currentUser,
      xp: newXP
    });

    toast({
      title: "XP Gained!",
      description: `+${amount}XP`,
      className: "bg-green-500 text-white",
    });
  };

  const addToLeaderboard = (entry: LeaderboardEntry) => {
    const newLeaderboard = [...leaderboard, entry]
      .sort((a, b) => b.xp - a.xp)
      .slice(0, 10); // Keep top 10
    setLeaderboard(newLeaderboard);
  };

  const completeChallenge = (topicId: string, score: number) => {
    if (!currentUser) return;
    
    const newProgress = { ...currentUser.progress };
    newProgress[topicId] = Math.max(newProgress[topicId] || 0, score);
    
    const completedChallenges = [...currentUser.completedChallenges];
    if (!completedChallenges.includes(topicId) && score === 50) { // Perfect score = 5 correct answers * 10XP
      completedChallenges.push(topicId);
      unlockAchievement(`master_${topicId}`);
    }
    
    const totalScore = Object.values(newProgress).reduce((sum, score) => sum + score, 0);
    
    setCurrentUser({
      ...currentUser,
      progress: newProgress,
      completedChallenges,
      score: totalScore,
    });
    
    addToLeaderboard({
      name: currentUser.name,
      score: totalScore,
      completedTopics: completedChallenges.length,
      xp: currentUser.xp || 0
    });
  };

  const unlockAchievement = (achievementId: string) => {
    if (!currentUser) return;
    
    if (!currentUser.achievements.includes(achievementId)) {
      setCurrentUser({
        ...currentUser,
        achievements: [...currentUser.achievements, achievementId]
      });
      
      toast({
        title: "Achievement Unlocked!",
        description: "You've mastered this topic!",
        className: "bg-game-primary text-white",
      });
    }
  };

  return (
    <GameContext.Provider value={{
      screen,
      setScreen,
      currentTopic,
      setCurrentTopic,
      currentQuestion,
      setCurrentQuestion,
      currentUser,
      setCurrentUser,
      leaderboard,
      addToLeaderboard,
      completeChallenge,
      awardXP,
      unlockAchievement
    }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = (): GameContextType => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};
