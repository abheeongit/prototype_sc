import React from 'react';
import './ProcessStep.css';

function ProcessStep({ title, description }) {
  return (
    <div className="process-step">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ProcessStep;
