
import React, { createContext, useState, useContext, ReactNode } from "react";

export interface User {
  name: string;
  progress: number[];
  score: number;
  completedChallenges: string[];
  achievements: string[];
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  completedModules: number;
}

interface GameContextType {
  screen: "welcome" | "learning" | "challenge" | "leaderboard" | "achievements";
  setScreen: (screen: "welcome" | "learning" | "challenge" | "leaderboard" | "achievements") => void;
  currentModule: number;
  setCurrentModule: (index: number) => void;
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
  leaderboard: LeaderboardEntry[];
  addToLeaderboard: (entry: LeaderboardEntry) => void;
  completeChallenge: (moduleId: number, score: number) => void;
  unlockAchievement: (achievementId: string) => void;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export const GameProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [screen, setScreen] = useState<"welcome" | "learning" | "challenge" | "leaderboard" | "achievements">("welcome");
  const [currentModule, setCurrentModule] = useState(0);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([
    { name: "Python Master", score: 980, completedModules: 8 },
    { name: "Code Wizard", score: 840, completedModules: 7 },
    { name: "Syntax Guru", score: 720, completedModules: 6 },
    { name: "Debug Hero", score: 650, completedModules: 5 },
    { name: "Algorithm Pro", score: 520, completedModules: 4 },
  ]);

  const addToLeaderboard = (entry: LeaderboardEntry) => {
    const newLeaderboard = [...leaderboard, entry].sort((a, b) => b.score - a.score);
    setLeaderboard(newLeaderboard.slice(0, 10)); // Keep top 10
  };

  const completeChallenge = (moduleId: number, score: number) => {
    if (!currentUser) return;
    
    const progress = [...currentUser.progress];
    progress[moduleId] = Math.max(progress[moduleId] || 0, score);
    
    const completedChallenges = [...currentUser.completedChallenges];
    if (!completedChallenges.includes(`module-${moduleId}`)) {
      completedChallenges.push(`module-${moduleId}`);
    }
    
    const totalScore = progress.reduce((sum, score) => sum + score, 0);
    
    setCurrentUser({
      ...currentUser,
      progress,
      completedChallenges,
      score: totalScore
    });
    
    // Update leaderboard if needed
    if (totalScore > 0) {
      addToLeaderboard({
        name: currentUser.name,
        score: totalScore,
        completedModules: completedChallenges.length
      });
    }
  };

  const unlockAchievement = (achievementId: string) => {
    if (!currentUser) return;
    
    if (!currentUser.achievements.includes(achievementId)) {
      setCurrentUser({
        ...currentUser,
        achievements: [...currentUser.achievements, achievementId]
      });
    }
  };

  return (
    <GameContext.Provider value={{
      screen,
      setScreen,
      currentModule,
      setCurrentModule,
      currentUser,
      setCurrentUser,
      leaderboard,
      addToLeaderboard,
      completeChallenge,
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
