
import { useGame, GameProvider } from '@/contexts/GameContext';
import WelcomeScreen from '@/components/WelcomeScreen';
import TopicSelection from '@/components/TopicSelection';
import LearningModule from '@/components/LearningModule';
import CodeChallenge from '@/components/CodeChallenge';
import Leaderboard from '@/components/Leaderboard';
import Achievements from '@/components/Achievements';

const GameContent = () => {
  const { screen } = useGame();
  
  return (
    <div className="min-h-screen bg-game-light">
      {screen === 'welcome' && <WelcomeScreen />}
      {screen === 'topics' && <TopicSelection />}
      {screen === 'learning' && <LearningModule />}
      {screen === 'challenge' && <CodeChallenge />}
      {screen === 'leaderboard' && <Leaderboard />}
      {screen === 'achievements' && <Achievements />}
    </div>
  );
};

const Index = () => {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
};

export default Index;
