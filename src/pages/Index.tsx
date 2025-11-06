import { Hero } from "@/components/Hero";
import { IPCMechanisms } from "@/components/IPCMechanisms";
import { InteractiveDemo } from "@/components/InteractiveDemo";
import { CodeViewer } from "@/components/CodeViewer";
import { ResultsSection } from "@/components/ResultsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <IPCMechanisms />
      <InteractiveDemo />
      <CodeViewer />
      <ResultsSection />
      <Footer />
    </div>
  );
};

export default Index;
