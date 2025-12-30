import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import PlanPreview from './components/PlanPreview';
import InteractiveAssessment from './components/InteractiveAssessment';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Hero />
      <ProblemSolution />
      <section className="bg-slate-50 py-10" id="assessment">
        <InteractiveAssessment />
      </section>
      <PlanPreview />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}

export default App;