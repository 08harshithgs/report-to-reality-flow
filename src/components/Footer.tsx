export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-muted/30 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Interprocess Communication
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              A comprehensive demonstration of IPC mechanisms in Operating Systems, 
              showcasing pipes, message queues, and shared memory for efficient process communication.
            </p>
            <p className="text-xs text-muted-foreground">
              Course: 21CSC202J - Operating Systems
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Project Team</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>HARSHITH G S [RA2411003020343]</p>
              <p>AASMAA AMEEN [RA2411003020346]</p>
              <p>MONISHA [RA2411003020384]</p>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              SRM Institute of Science and Technology<br />
              Ramapuram Campus, Chennai - 600089
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Operating Systems Mini Project. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};
