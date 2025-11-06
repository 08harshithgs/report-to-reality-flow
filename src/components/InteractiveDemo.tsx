import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Clock } from "lucide-react";
import { toast } from "sonner";

export const InteractiveDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<Array<{ from: string; text: string; time: number }>>([]);

  const steps = [
    { desc: "Initialize pipes and semaphore", duration: 800 },
    { desc: "Fork child process", duration: 600 },
    { desc: "Parent sends: 'Hello Child, this is Parent!'", duration: 1000 },
    { desc: "Child receives message", duration: 800 },
    { desc: "Child sends: 'Hello Parent, message received!'", duration: 1000 },
    { desc: "Parent receives message", duration: 800 },
    { desc: "Clean up resources", duration: 600 },
  ];

  const runDemo = async () => {
    setIsRunning(true);
    setMessages([]);
    setStep(0);

    for (let i = 0; i < steps.length; i++) {
      setStep(i + 1);
      await new Promise(resolve => setTimeout(resolve, steps[i].duration));

      if (i === 2) {
        setMessages(prev => [...prev, { 
          from: "Parent", 
          text: "Hello Child, this is Parent!", 
          time: Date.now() 
        }]);
      } else if (i === 4) {
        setMessages(prev => [...prev, { 
          from: "Child", 
          text: "Hello Parent, message received!", 
          time: Date.now() 
        }]);
      }
    }

    toast.success("IPC Demo completed successfully!");
    setIsRunning(false);
  };

  const reset = () => {
    setStep(0);
    setMessages([]);
    setIsRunning(false);
  };

  return (
    <section id="demo" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Interactive IPC Demonstration</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch the parent and child processes communicate in real-time using pipes and semaphores
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Visual Representation */}
          <Card className="p-6 shadow-[var(--shadow-elevated)]">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Process Communication
            </h3>
            
            <div className="space-y-8">
              {/* Parent Process */}
              <div className="relative">
                <div className={`p-4 rounded-lg border-2 transition-all ${
                  step === 3 || step === 6 ? 'border-purple-500 bg-purple-500/10 shadow-lg' : 'border-border bg-card'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Parent Process</h4>
                      <p className="text-sm text-muted-foreground">PID: {Math.floor(Math.random() * 10000)}</p>
                    </div>
                  </div>
                </div>

                {/* Pipe Visualization */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-20 w-1 flex flex-col items-center justify-center">
                  <div className={`w-1 h-full transition-all ${
                    step >= 3 && step <= 4 ? 'bg-primary animate-pulse' : 'bg-border'
                  }`}></div>
                  {step >= 3 && step <= 4 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2 animate-bounce">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                      </svg>
                    </div>
                  )}
                  <div className="absolute right-full mr-2 text-xs text-muted-foreground whitespace-nowrap">
                    Pipe fd1
                  </div>
                </div>
              </div>

              {/* Child Process */}
              <div className="relative pt-8">
                <div className={`p-4 rounded-lg border-2 transition-all ${
                  step === 4 || step === 5 ? 'border-green-500 bg-green-500/10 shadow-lg' : 'border-border bg-card'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Child Process</h4>
                      <p className="text-sm text-muted-foreground">PID: {Math.floor(Math.random() * 10000)}</p>
                    </div>
                  </div>
                </div>

                {/* Return Pipe */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full h-8 w-1 flex flex-col items-center justify-center">
                  <div className={`w-1 h-full transition-all ${
                    step >= 5 && step <= 6 ? 'bg-primary animate-pulse' : 'bg-border'
                  }`}></div>
                  {step >= 5 && step <= 6 && (
                    <div className="absolute top-1/2 transform -translate-y-1/2 rotate-180 animate-bounce">
                      <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                      </svg>
                    </div>
                  )}
                  <div className="absolute left-full ml-2 text-xs text-muted-foreground whitespace-nowrap">
                    Pipe fd2
                  </div>
                </div>
              </div>

              {/* Semaphore Indicator */}
              {step > 0 && step < 7 && (
                <div className="mt-6 p-3 bg-primary/10 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span className="text-sm font-medium">Semaphore: Synchronized</span>
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Execution Steps */}
          <Card className="p-6 shadow-[var(--shadow-elevated)]">
            <h3 className="text-xl font-semibold mb-6">Execution Steps</h3>
            <div className="space-y-3 mb-6">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg border transition-all ${
                    step === i + 1
                      ? 'border-primary bg-primary/10 shadow-md'
                      : step > i + 1
                      ? 'border-green-500/30 bg-green-500/5'
                      : 'border-border bg-card/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step === i + 1
                        ? 'bg-primary text-primary-foreground'
                        : step > i + 1
                        ? 'bg-green-500 text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {step > i + 1 ? '✓' : i + 1}
                    </div>
                    <span className={step === i + 1 ? 'font-semibold' : ''}>{s.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={runDemo}
                disabled={isRunning}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                <Play className="mr-2 h-4 w-4" />
                {isRunning ? 'Running...' : 'Start Demo'}
              </Button>
              <Button
                onClick={reset}
                variant="outline"
                disabled={isRunning}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </div>

        {/* Message Log */}
        {messages.length > 0 && (
          <Card className="p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-xl font-semibold mb-4">Communication Log</h3>
            <div className="space-y-2 font-mono text-sm">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg ${
                    msg.from === 'Parent'
                      ? 'bg-purple-500/10 border border-purple-500/30'
                      : 'bg-green-500/10 border border-green-500/30'
                  }`}
                >
                  <span className="font-semibold">{msg.from} received:</span> {msg.text}
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </section>
  );
};
