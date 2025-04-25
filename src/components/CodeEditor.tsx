
import React, { useRef, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

interface CodeEditorProps {
  initialCode: string;
  onCodeChange: (code: string) => void;
  onRunCode: () => void;
  output?: string;
  expectedOutput?: string;
  hints?: string[];
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  initialCode,
  onCodeChange,
  onRunCode,
  output,
  expectedOutput,
  hints
}) => {
  const [code, setCode] = useState(initialCode);
  const [activeHint, setActiveHint] = useState<number | null>(null);
  const [usedHints, setUsedHints] = useState<number[]>([]);
  const editorRef = useRef<HTMLTextAreaElement>(null);
  
  useEffect(() => {
    if (editorRef.current) {
      // Set textarea height to fit content
      editorRef.current.style.height = 'auto';
      editorRef.current.style.height = `${editorRef.current.scrollHeight}px`;
    }
  }, [code]);

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
    onCodeChange(e.target.value);
  };

  const handleRunCode = () => {
    onRunCode();
  };

  const revealHint = (index: number) => {
    setActiveHint(activeHint === index ? null : index);
    if (!usedHints.includes(index)) {
      setUsedHints([...usedHints, index]);
    }
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      onCodeChange(newCode);
      
      // Move cursor to the right position after inserting the tab
      setTimeout(() => {
        if (editorRef.current) {
          editorRef.current.selectionStart = editorRef.current.selectionEnd = start + 4;
        }
      }, 0);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <Tabs defaultValue="editor">
        <TabsList className="mb-4">
          <TabsTrigger value="editor">Code Editor</TabsTrigger>
          <TabsTrigger value="output">Output</TabsTrigger>
          {hints && <TabsTrigger value="hints">Hints</TabsTrigger>}
        </TabsList>
        
        <TabsContent value="editor" className="space-y-4">
          <div className="relative">
            <textarea
              ref={editorRef}
              value={code}
              onChange={handleCodeChange}
              onKeyDown={handleKeyDown}
              className="code-editor w-full h-64 font-mono text-white resize-none focus:ring-2 focus:ring-game-primary focus:outline-none"
              spellCheck="false"
            />
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              onClick={() => {
                setCode(initialCode);
                onCodeChange(initialCode);
              }}
              className="text-gray-600"
            >
              Reset Code
            </Button>
            <Button 
              onClick={handleRunCode}
              className="bg-game-primary hover:bg-game-secondary"
            >
              Run Code
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="output" className="space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">Your Output:</h3>
            <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto min-h-16">
              {output || "No output yet. Run your code to see results."}
            </pre>
          </div>
          
          {expectedOutput && (
            <>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Expected Output:</h3>
                <pre className="bg-gray-100 p-4 rounded-md overflow-x-auto min-h-16">
                  {expectedOutput}
                </pre>
              </div>
            </>
          )}
        </TabsContent>
        
        {hints && (
          <TabsContent value="hints" className="space-y-4">
            <div className="space-y-4">
              {hints.map((hint, index) => (
                <div key={index} className="border rounded-md">
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-4 text-left font-normal"
                    onClick={() => revealHint(index)}
                  >
                    <span>Hint {index + 1}</span>
                    <span>{usedHints.includes(index) ? "👁️" : "🔒"}</span>
                  </Button>
                  {activeHint === index && (
                    <div className="p-4 bg-accent border-t">
                      {hint}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default CodeEditor;
