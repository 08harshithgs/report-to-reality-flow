import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const CodeViewer = () => {
  const sourceCode = `#include <stdio.h>
#include <unistd.h>
#include <string.h>
#include <sys/types.h>
#include <sys/wait.h>

int main() {
    int fd1[2], fd2[2];
    char parentMsg[] = "Hello Child, this is Parent!";
    char childMsg[] = "Hello Parent, message received!";
    char buffer[100];
    
    // Create both pipes
    pipe(fd1); // Parent -> Child
    pipe(fd2); // Child -> Parent
    
    pid_t pid = fork();
    
    if (pid == 0) {
        // ---- CHILD PROCESS ----
        // Close unused ends
        close(fd1[1]); // child doesn't write to fd1
        close(fd2[0]); // child doesn't read from fd2
        
        // Read message from parent
        read(fd1[0], buffer, sizeof(buffer));
        printf("Child received: %s\\n", buffer);
        
        // Send reply to parent
        write(fd2[1], childMsg, strlen(childMsg) + 1);
        
        // Close remaining pipe ends
        close(fd1[0]);
        close(fd2[1]);
    }
    else {
        // ---- PARENT PROCESS ----
        // Close unused ends
        close(fd1[0]); // parent doesn't read from fd1
        close(fd2[1]); // parent doesn't write to fd2
        
        // Send message to child
        write(fd1[1], parentMsg, strlen(parentMsg) + 1);
        
        // Read reply from child
        read(fd2[0], buffer, sizeof(buffer));
        printf("Parent received: %s\\n", buffer);
        
        // Close remaining pipe ends
        close(fd1[1]);
        close(fd2[0]);
        
        // Wait for child to finish
        wait(NULL);
    }
    
    return 0;
}`;

  const algorithm = `1. Start the program
2. Include required header files
3. Initialize resources
   - Create two pipes: pipe(fd1) and pipe(fd2)
   - Initialize semaphore sem with value 1
4. Create a child process using fork()
5. Child process execution (if pid == 0)
   - Wait on semaphore (sem_wait(&sem))
   - Close write-end of parent-to-child pipe (fd1[1])
   - Read message from parent using fd1[0]
   - Print received message
   - Close read-end of child-to-parent pipe (fd2[0])
   - Send reply to parent via fd2[1]
6. Parent process execution (if pid > 0)
   - Wait on semaphore (sem_wait(&sem))
   - Close read-end of parent-to-child pipe (fd1[0])
   - Send message to child via fd1[1]
   - Close write-end of child-to-parent pipe (fd2[1])
   - Read reply from child via fd2[0]
   - Print received message
   - Post the semaphore (sem_post(&sem))
   - Wait for child process to finish
7. Clean up and destroy semaphore
8. End program`;

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Implementation Details</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete source code and algorithm explanation
          </p>
        </div>

        <Tabs defaultValue="code" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="code">Source Code</TabsTrigger>
            <TabsTrigger value="algorithm">Algorithm</TabsTrigger>
          </TabsList>

          <TabsContent value="code">
            <Card className="p-6 shadow-[var(--shadow-elevated)]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold">C Implementation</h3>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-mono">
                  main.c
                </span>
              </div>
              <div className="bg-slate-900 text-slate-100 p-6 rounded-lg overflow-x-auto">
                <pre className="text-sm font-mono">
                  <code>{sourceCode}</code>
                </pre>
              </div>
              <div className="mt-4 p-4 bg-accent/10 rounded-lg border border-accent/30">
                <h4 className="font-semibold mb-2 flex items-center gap-2 text-accent">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                  </svg>
                  Key Features
                </h4>
                <ul className="text-sm space-y-1 text-muted-foreground">
                  <li>• Bidirectional communication using two pipes</li>
                  <li>• Proper resource management with pipe end closures</li>
                  <li>• Parent waits for child process completion</li>
                  <li>• Clean and efficient IPC implementation</li>
                </ul>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="algorithm">
            <Card className="p-6 shadow-[var(--shadow-elevated)]">
              <h3 className="text-xl font-semibold mb-4">Step-by-Step Algorithm</h3>
              <div className="bg-card border border-border p-6 rounded-lg">
                <pre className="text-sm whitespace-pre-wrap font-mono leading-relaxed">
                  {algorithm}
                </pre>
              </div>
              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/10 rounded-lg border border-primary/30">
                  <h4 className="font-semibold mb-2 text-primary">Advantages</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Efficient bidirectional communication</li>
                    <li>• Synchronization control with semaphores</li>
                    <li>• Process independence maintained</li>
                    <li>• Resource sharing without conflicts</li>
                    <li>• Lightweight kernel-supported mechanism</li>
                  </ul>
                </div>
                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/30">
                  <h4 className="font-semibold mb-2 text-primary">Applications</h4>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Client-server communication systems</li>
                    <li>• Chat applications</li>
                    <li>• Multitasking environments</li>
                    <li>• Real-time systems</li>
                    <li>• Distributed computing platforms</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
