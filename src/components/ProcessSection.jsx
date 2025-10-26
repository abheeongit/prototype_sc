import React from 'react';
import ProcessStep from './ProcessStep.jsx';
import './ProcessSection.css';

const steps = [
  { id: 1, title: 'Design & Planning', description: 'We plan every barrel to perfection.' },
  { id: 2, title: 'Material Selection', description: 'High-quality steel for durability.' },
  { id: 3, title: 'Manufacturing', description: 'Precision engineering in every drum.' },
  { id: 4, title: 'Quality Check', description: 'Ensuring top-notch standards.' },
];

function ProcessSection() {
  return (
    <section className="process-section">
      <h2>Our Process</h2>
      <div className="process-steps">
        {steps.map(step => (
          <ProcessStep key={step.id} title={step.title} description={step.description} />
        ))}
      </div>
    </section>
  );
}

export default ProcessSection;
