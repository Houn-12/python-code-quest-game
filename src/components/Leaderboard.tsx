
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useGame } from '@/contexts/GameContext';
import { Trophy, ArrowLeft, Medal } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Leaderboard: React.FC = () => {
  const { leaderboard, setScreen, currentUser } = useGame();
  
  const sortedLeaderboard = [...leaderboard].sort((a, b) => b.xp - a.xp);
  
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
            <Medal className="h-7 w-7 mr-2 text-secondary" /> Leaderboard
          </h1>
        </div>
        <div className="flex space-x-2">
          <Button 
            onClick={() => setScreen('achievements')}
            variant="outline"
          >
            <Trophy className="h-4 w-4 mr-2" /> Achievements
          </Button>
        </div>
      </div>

      <Card className="game-card">
        <CardHeader className="bg-primary/20 border-b border-border">
          <CardTitle className="flex items-center">
            <Trophy className="mr-2 text-secondary" /> Top Python Coders
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-16">Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Modules Completed</TableHead>
                <TableHead className="text-right">XP</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedLeaderboard.map((entry, i) => {
                const isCurrentUser = currentUser?.name === entry.name;
                
                return (
                  <TableRow 
                    key={i}
                    className={isCurrentUser ? "bg-primary/10" : ""}
                  >
                    <TableCell className="font-medium">
                      {i === 0 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-yellow-400 text-background rounded-full">
                          1
                        </span>
                      ) : i === 1 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 text-background rounded-full">
                          2
                        </span>
                      ) : i === 2 ? (
                        <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-600 text-background rounded-full">
                          3
                        </span>
                      ) : (
                        `${i + 1}`
                      )}
                    </TableCell>
                    <TableCell>
                      {entry.name}
                      {isCurrentUser && <span className="ml-2 text-primary font-bold">(You)</span>}
                    </TableCell>
                    <TableCell>{entry.completedTopics}</TableCell>
                    <TableCell className="text-right font-bold">{entry.xp}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Leaderboard;
