import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PitchBackground } from '../pitch-background';

describe('PitchBackground Component', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<PitchBackground className="custom-class" />);
      const pitchContainer = container.firstChild as HTMLElement;
      expect(pitchContainer).toHaveClass('custom-class');
    });

    it('has proper container structure', () => {
      const { container } = render(<PitchBackground />);
      const pitchContainer = container.firstChild as HTMLElement;
      expect(pitchContainer).toHaveClass('relative', 'w-full', 'h-[110%]', 'overflow-hidden');
    });
  });

  describe('Image Structure', () => {
    it('has correct source path', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img') as HTMLImageElement;
      expect(image.src).toContain('/partnerpitch.png');
    });

    it('has proper responsive classes', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      
      expect(image).toHaveClass('w-full', 'h-auto', 'object-cover');
    });

    it('has correct alt text', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      
      expect(image).toHaveAttribute('alt', 'Football pitch background with field markings including center circle, penalty areas, goal areas, and corner arcs');
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      
      expect(image).toHaveAttribute('aria-describedby', 'pitch-description');
    });

    it('contains descriptive text', () => {
      render(<PitchBackground />);
      const description = screen.getByText(/A football pitch viewed from above/);
      expect(description).toBeInTheDocument();
    });

    it('has comprehensive alt text', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      const altText = image.getAttribute('alt');
      
      expect(altText).toContain('Football pitch background');
      expect(altText).toContain('field markings');
      expect(altText).toContain('center circle');
      expect(altText).toContain('penalty areas');
    });
  });

  describe('Visual Elements', () => {
    it('uses object-cover for proper scaling', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      
      expect(image).toHaveClass('object-cover');
    });

    it('maintains aspect ratio', () => {
      render(<PitchBackground />);
      const image = screen.getByRole('img');
      
      expect(image).toHaveClass('object-cover');
    });
  });
});