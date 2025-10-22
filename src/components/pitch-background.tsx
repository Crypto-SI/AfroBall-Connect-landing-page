import React from 'react';

interface PitchBackgroundProps {
  className?: string;
}

export const PitchBackground: React.FC<PitchBackgroundProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-[110%] overflow-hidden ${className}`}>
      <img
        src="/partnerpitch.png"
        alt="Football pitch background with field markings including center circle, penalty areas, goal areas, and corner arcs"
        className="w-full h-auto object-cover"
        style={{
          position: 'absolute',
          bottom: 0,
          height: '200%',
          width: '100%'
        }}
        role="img"
        aria-describedby="pitch-description"
      />
      {/* Description for screen readers */}
      <div id="pitch-description" className="sr-only">
        A football pitch viewed from above with traditional field markings.
        The pitch includes a center circle, penalty areas on both ends,
        goal areas, corner arcs, and boundary lines.
        Partner positions will be displayed as cards overlaid on this pitch.
      </div>
    </div>
  );
};