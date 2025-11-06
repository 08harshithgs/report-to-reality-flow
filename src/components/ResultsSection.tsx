import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const ResultsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Results & Conclusion</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Successful demonstration of interprocess communication
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Expected Output */}
          <Card className="p-6 shadow-[var(--shadow-elevated)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Expected Output
            </h3>
            <div className="bg-slate-900 text-green-400 p-6 rounded-lg font-mono text-sm space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-slate-500">$</span>
                <span className="text-slate-400">./ipc_demo</span>
              </div>
              <div className="text-green-300">Child received: Hello Child, this is Parent!</div>
              <div className="text-blue-300">Parent received: Hello Parent, message received!</div>
              <div className="flex items-center gap-2 mt-4 text-slate-400">
                <CheckCircle2 className="h-4 w-4 text-green-500" />
                <span>Process completed successfully</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/30">
              <h4 className="font-semibold mb-2 text-primary">Output Explanation</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                The parent process sends a message to the child using the first pipe (fd1). 
                The child process reads that message, displays it, and then sends a reply through 
                the second pipe (fd2). The parent receives the child's reply and prints it. 
                Both processes synchronize their communication using the semaphore, ensuring no 
                overlap occurs.
              </p>
            </div>
          </Card>

          {/* Conclusion */}
          <Card className="p-6 shadow-[var(--shadow-elevated)]">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
              Project Conclusion
            </h3>
            
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                The Interprocess Communication (IPC) project successfully demonstrates how processes 
                in an operating system can communicate, share data, and synchronize their actions 
                efficiently.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Reliable Data Transfer</h5>
                    <p className="text-sm text-muted-foreground">
                      Successfully demonstrated data exchange between sender and receiver processes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Synchronization</h5>
                    <p className="text-sm text-muted-foreground">
                      Prevented race conditions and maintained data integrity throughout execution
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h5 className="font-semibold text-sm mb-1">Resource Management</h5>
                    <p className="text-sm text-muted-foreground">
                      Properly released all IPC resources after execution completion
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/30">
                <h4 className="font-semibold mb-2 text-accent">Real-World Applications</h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Client-server communication systems</li>
                  <li>• Chat and messaging applications</li>
                  <li>• Distributed computing environments</li>
                  <li>• Real-time operating systems</li>
                  <li>• Multitasking process coordination</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Learnings */}
        <Card className="mt-8 p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-xl font-semibold mb-6 text-center">Key Learning Outcomes</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Process Coordination</h4>
              <p className="text-sm text-muted-foreground">
                Understanding how operating systems manage multiple concurrent processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Communication Channels</h4>
              <p className="text-sm text-muted-foreground">
                Practical implementation of pipes, message queues, and shared memory
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Concurrency Control</h4>
              <p className="text-sm text-muted-foreground">
                Mastering synchronization techniques to prevent race conditions
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
