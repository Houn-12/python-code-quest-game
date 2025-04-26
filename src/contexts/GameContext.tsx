
import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { achievements } from '@/data/modules';
import { pythonTopics } from '@/data/topics';

// Define topic-specific achievement IDs
const TOPIC_ACHIEVEMENTS: Record<string, string> = {};
pythonTopics.forEach(topic => {
  TOPIC_ACHIEVEMENTS[topic.id] = `master_${topic.id}`;
});

export interface User {
  name: string;
  progress: Record<string, number>;
  score: number;
  completedChallenges: string[];
  achievements: string[];
  xp: number;
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
  currentModule: number;
  setCurrentModule: (moduleIndex: number) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

// Default leaderboard data for initial state
const defaultLeaderboard: LeaderboardEntry[] = [
  { name: "PyMaster", score: 450, completedTopics: 9, xp: 450 },
  { name: "CodeNinja", score: 380, completedTopics: 7, xp: 380 },
  { name: "DataWhiz", score: 320, completedTopics: 6, xp: 320 },
  { name: "DevGuru", score: 280, completedTopics: 5, xp: 280 },
  { name: "AlgoAce", score: 230, completedTopics: 4, xp: 230 },
];

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<GameContextType["screen"]>("welcome");
  const [currentTopic, setCurrentTopic] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>(defaultLeaderboard);
  const [currentModule, setCurrentModule] = useState(0);
  const { toast } = useToast();

  // Check for achievements when user data changes
  useEffect(() => {
    if (currentUser) {
      // Check for topic completion achievements
      const completedTopicsCount = currentUser.completedChallenges.length;
      
      if (completedTopicsCount >= 1 && !currentUser.achievements.includes('first_topic')) {
        unlockAchievement('first_topic');
      }
      
      if (completedTopicsCount >= 3 && !currentUser.achievements.includes('topic_explorer')) {
        unlockAchievement('topic_explorer');
      }
      
      if (completedTopicsCount >= 5 && !currentUser.achievements.includes('python_apprentice')) {
        unlockAchievement('python_apprentice');
      }
      
      if (completedTopicsCount >= 8 && !currentUser.achievements.includes('python_master')) {
        unlockAchievement('python_master');
      }
      
      // Check XP achievements
      if (currentUser.xp >= 100 && !currentUser.achievements.includes('xp_100')) {
        unlockAchievement('xp_100');
      }
      
      if (currentUser.xp >= 300 && !currentUser.achievements.includes('xp_300')) {
        unlockAchievement('xp_300');
      }
      
      if (currentUser.xp >= 500 && !currentUser.achievements.includes('xp_500')) {
        unlockAchievement('xp_500');
      }
    }
  }, [currentUser?.completedChallenges.length, currentUser?.xp]);

  const awardXP = (amount: number) => {
    if (!currentUser) return;
    
    const newXP = (currentUser.xp || 0) + amount;
    const updatedUser = {
      ...currentUser,
      xp: newXP
    };

    setCurrentUser(updatedUser);
    
    // Make sure leaderboard is always in sync with user XP
    addToLeaderboard({
      name: updatedUser.name,
      score: updatedUser.score,
      completedTopics: updatedUser.completedChallenges.length,
      xp: updatedUser.xp
    });

    toast({
      title: "XP Gained!",
      description: `+${amount}XP`,
      className: "bg-green-500 text-white",
    });
  };

  const addToLeaderboard = (entry: LeaderboardEntry) => {
    // Create a new leaderboard with both existing entries and the new entry
    const newLeaderboard = [...leaderboard];
    
    // Update existing entry or add new one
    const existingIndex = newLeaderboard.findIndex(item => item.name === entry.name);
    if (existingIndex >= 0) {
      newLeaderboard[existingIndex] = entry;
    } else {
      newLeaderboard.push(entry);
    }
    
    // Sort by score and limit to top entries
    const sortedLeaderboard = newLeaderboard.sort((a, b) => b.xp - a.xp);
    setLeaderboard(sortedLeaderboard);
  };

  const completeChallenge = (topicId: string, score: number) => {
    if (!currentUser) return;
    
    const newProgress = { ...currentUser.progress };
    newProgress[topicId] = Math.max(newProgress[topicId] || 0, score);
    
    const completedChallenges = [...currentUser.completedChallenges];
    
    // Only award XP and unlock achievement if not already completed
    if (!completedChallenges.includes(topicId) && score > 0) {
      completedChallenges.push(topicId);
      
      // Unlock topic-specific achievement
      if (TOPIC_ACHIEVEMENTS[topicId]) {
        unlockAchievement(TOPIC_ACHIEVEMENTS[topicId]);
      }
      
      // Award XP for completing the topic
      awardXP(50);
      
      const totalScore = Object.values(newProgress).reduce((sum, score) => sum + score, 0);
      
      const updatedUser = {
        ...currentUser,
        progress: newProgress,
        completedChallenges,
        score: totalScore,
      };
      
      setCurrentUser(updatedUser);
    } else {
      // If topic was already completed, just update progress without awarding XP
      setCurrentUser({
        ...currentUser,
        progress: newProgress,
      });
    }
  };

  const unlockAchievement = (achievementId: string) => {
    if (!currentUser) return;
    
    if (!currentUser.achievements.includes(achievementId)) {
      // Find achievement data
      const achievementData = achievements.find(a => a.id === achievementId);
      
      const updatedUser = {
        ...currentUser,
        achievements: [...currentUser.achievements, achievementId]
      };
      
      setCurrentUser(updatedUser);
      
      toast({
        title: "Achievement Unlocked!",
        description: achievementData ? achievementData.title : "You've unlocked a new achievement!",
        className: "bg-primary text-white",
      });
      
      // Award XP for getting an achievement
      if (!achievementId.startsWith('xp_')) {  // Avoid infinite loop with XP achievements
        awardXP(20);  // Award 20 XP per achievement
      }
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
      unlockAchievement,
      currentModule,
      setCurrentModule
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
