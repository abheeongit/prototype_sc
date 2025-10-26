import React, { useEffect, useState } from 'react';
import './CursorEffect.css';

function CursorEffect() {
  const [coords, setCoords] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = e => {
      setCoords({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="cursor-effect"
      style={{ left: coords.x, top: coords.y }}
    ></div>
  );
}

export default CursorEffect;
