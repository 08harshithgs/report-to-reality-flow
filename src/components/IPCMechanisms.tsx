import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const IPCMechanisms = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">IPC Mechanisms</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three fundamental approaches to interprocess communication
          </p>
        </div>

        <Tabs defaultValue="pipes" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="pipes">Pipes</TabsTrigger>
            <TabsTrigger value="message-queue">Message Queues</TabsTrigger>
            <TabsTrigger value="shared-memory">Shared Memory</TabsTrigger>
          </TabsList>

          <TabsContent value="pipes">
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  Pipes
                </CardTitle>
                <CardDescription>Unidirectional data channels for process communication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Pipes provide a simple one-way communication mechanism between parent and child processes. 
                  Data written to one end can be read from the other end in a FIFO (First In, First Out) manner.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">Advantages</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Simple and easy to implement</li>
                      <li>• Fast data transfer</li>
                      <li>• Automatic synchronization</li>
                      <li>• Low overhead</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">Use Cases</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Parent-child communication</li>
                      <li>• Shell command pipelines</li>
                      <li>• Stream processing</li>
                      <li>• Data filtering</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="message-queue">
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                  </div>
                  Message Queues
                </CardTitle>
                <CardDescription>Structured message-based communication system</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Message queues allow processes to send and receive messages in a structured format. 
                  Unlike pipes, message queues support multiple senders and receivers, with messages 
                  organized by type or priority.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">Advantages</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Structured message format</li>
                      <li>• Multiple senders/receivers</li>
                      <li>• Message prioritization</li>
                      <li>• Persistent storage</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">Use Cases</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Client-server systems</li>
                      <li>• Event-driven architectures</li>
                      <li>• Task queuing</li>
                      <li>• Distributed systems</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shared-memory">
            <Card className="shadow-[var(--shadow-card)]">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </div>
                  Shared Memory
                </CardTitle>
                <CardDescription>Direct memory access for high-speed communication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Shared memory enables multiple processes to access a common memory region directly. 
                  This is the fastest IPC method as it eliminates the need for data copying between processes, 
                  but requires careful synchronization.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <h4 className="font-semibold mb-2 text-primary">Advantages</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Fastest IPC method</li>
                      <li>• No data copying overhead</li>
                      <li>• Large data transfers</li>
                      <li>• Direct memory access</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <h4 className="font-semibold mb-2 text-accent">Use Cases</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• High-performance computing</li>
                      <li>• Graphics processing</li>
                      <li>• Database systems</li>
                      <li>• Real-time applications</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
