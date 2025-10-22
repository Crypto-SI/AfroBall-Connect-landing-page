import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { PitchLayout } from '../pitch-layout';
import { DEFAULT_FORMATION } from '@/types/formations';

describe('Partner Card Animations', () => {
  it('should apply staggered fade-in animation to partner cards', async () => {
    render(<PitchLayout formation={DEFAULT_FORMATION} />);
    
    // Check that cards are initially positioned with animation classes
    const cardContainers = screen.getAllByRole('button');
    expect(cardContainers).toHaveLength(11); // 11 positions in default formation
    
    // Verify that each card has the proper animation classes
    cardContainers.forEach((card) => {
      expect(card).toHaveClass('transition-all');
      expect(card).toHaveClass('duration-200');
      expect(card).toHaveClass('ease-in-out');
    });
  });

  it('should have proper hover animation classes on partner cards', () => {
    render(<PitchLayout formation={DEFAULT_FORMATION} />);
    
    const cards = screen.getAllByRole('button');
    
    cards.forEach((card) => {
      // Check for hover animation classes
      expect(card).toHaveClass('hover:scale-105');
      expect(card).toHaveClass('hover:border-[#F37021]');
      expect(card).toHaveClass('hover:shadow-lg');
      expect(card).toHaveClass('transform-gpu');
      expect(card).toHaveClass('will-change-transform');
    });
  });

  it('should have staggered animation delays for card containers', () => {
    render(<PitchLayout formation={DEFAULT_FORMATION} />);
    
    // Get all card containers (the divs that wrap the PartnerCard components)
    const cardContainers = document.querySelectorAll('[style*="transition-delay"]');
    
    // Should have 11 containers with staggered delays
    expect(cardContainers).toHaveLength(11);
    
    // Check that each container has a different delay
    cardContainers.forEach((container, index) => {
      const style = (container as HTMLElement).style;
      expect(style.transitionDelay).toBe(`${index * 100}ms`);
    });
  });

  it('should have proper animation performance optimizations', () => {
    render(<PitchLayout formation={DEFAULT_FORMATION} />);
    
    const cards = screen.getAllByRole('button');
    
    cards.forEach((card) => {
      // Check for performance optimization classes
      expect(card).toHaveClass('transform-gpu');
      expect(card).toHaveClass('will-change-transform');
    });
  });
});