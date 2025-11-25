import { ScrollProvider } from './context/ScrollProvider';
import { useFullPageScroll } from './hooks/useFullPageScroll';
import { Navigation } from './components/Navigation';
import { ScrollIndicator } from './components/ScrollIndicator';
import { SectionWrapper } from './components/ui/SectionWrapper';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Portfolio } from './components/sections/Portfolio';
import { Contact } from './components/sections/Contact';

function AppContent() {
  useFullPageScroll();

  return (
    <div 
      className="fixed inset-0 w-full h-full overflow-hidden bg-dark-900"
      style={{ touchAction: 'none' }}
    >
      {/* Navigation */}
      <Navigation />

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Sections Container */}
      <main className="relative w-full h-full">
        <SectionWrapper index={0}>
          <Hero />
        </SectionWrapper>

        <SectionWrapper index={1}>
          <About />
        </SectionWrapper>

        <SectionWrapper index={2}>
          <Services />
        </SectionWrapper>

        <SectionWrapper index={3}>
          <Portfolio />
        </SectionWrapper>

        <SectionWrapper index={4}>
          <Contact />
        </SectionWrapper>
      </main>

      {/* Global decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}

function App() {
  return (
    <ScrollProvider>
      <AppContent />
    </ScrollProvider>
  );
}

export default App;