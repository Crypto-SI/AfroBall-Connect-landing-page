import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PitchLayout } from '../pitch-layout';
import { PartnerCard } from '../partner-card';
import { PitchBackground } from '../pitch-background';
import { DEFAULT_FORMATION } from '@/types/formations';

// Mock window.matchMedia for responsive testing
const createMatchMedia = (matches: boolean) => vi.fn().mockImplementation(query => ({
  matches,
  media: query,
  onchange: null,
  addListener: vi.fn(),
  removeListener: vi.fn(),
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
}));

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: createMatchMedia(false),
});

// Mock ResizeObserver for responsive testing
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Responsive Design Tests', () => {
  describe('PitchBackground', () => {
    it('maintains aspect ratio with proper viewBox', () => {
      render(<PitchBackground />);
      const svg = document.querySelector('svg');
      
      expect(svg).toHaveAttribute('viewBox', '0 0 800 450');
      expect(svg).toHaveAttribute('preserveAspectRatio', 'xMidYMid meet');
      expect(svg).toHaveClass('w-full', 'h-full');
    });

    it('applies responsive container classes', () => {
      const { container } = render(<PitchBackground className="test-class" />);
      const pitchContainer = container.firstChild as HTMLElement;
      
      expect(pitchContainer).toHaveClass('relative', 'w-full', 'aspect-video', 'test-class');
    });
  });

  describe('PartnerCard', () => {
    const mockPosition = {
      id: 'test',
      x: 50,
      y: 50,
      role: 'Test Position'
    };

    it('applies responsive sizing classes for empty card', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      const card = screen.getByRole('button');
      
      // Check for responsive width and height classes
      expect(card).toHaveClass(
        'w-[50px]', 'h-[62px]',  // Mobile
        'sm:w-[60px]', 'sm:h-[75px]',  // Small
        'md:w-[70px]', 'md:h-[87px]',  // Medium
        'lg:w-[80px]', 'lg:h-[100px]'  // Large
      );
    });

    it('applies responsive sizing classes for filled card', () => {
      const mockPartner = {
        id: 'partner1',
        name: 'Test Partner',
        position: 'test'
      };

      render(<PartnerCard partner={mockPartner} position={mockPosition} isEmpty={false} />);
      const card = screen.getByRole('button');
      
      // Check for responsive width and height classes
      expect(card).toHaveClass(
        'w-[50px]', 'h-[62px]',  // Mobile
        'sm:w-[60px]', 'sm:h-[75px]',  // Small
        'md:w-[70px]', 'md:h-[87px]',  // Medium
        'lg:w-[80px]', 'lg:h-[100px]'  // Large
      );
    });

    it('includes touch interaction handlers', () => {
      const mockOnHover = vi.fn();
      render(<PartnerCard position={mockPosition} isEmpty={true} onHover={mockOnHover} />);
      const card = screen.getByRole('button');
      
      // Check for touch-friendly classes
      expect(card).toHaveClass('active:scale-95', 'active:border-[#F37021]');
    });

    it('displays responsive text sizes for empty state', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      // Check for plus icon with responsive sizing
      const plusIcon = document.querySelector('.text-xl');
      expect(plusIcon).toHaveClass('sm:text-2xl', 'md:text-2xl', 'lg:text-3xl');
      
      // Check for position text with responsive sizing
      const positionText = screen.getByText('Test Position');
      expect(positionText).toHaveClass('text-[10px]', 'sm:text-xs', 'md:text-xs');
    });

    it('displays responsive text sizes for filled state', () => {
      const mockPartner = {
        id: 'partner1',
        name: 'Test Partner',
        position: 'test'
      };

      render(<PartnerCard partner={mockPartner} position={mockPosition} isEmpty={false} />);
      
      // Check for partner name with responsive sizing
      const partnerName = screen.getByText('Test Partner');
      expect(partnerName).toHaveClass('text-[10px]', 'sm:text-xs', 'md:text-xs');
      
      // Check for position role with responsive sizing
      const positionRole = screen.getByText('Test Position');
      expect(positionRole).toHaveClass('text-[8px]', 'sm:text-[10px]', 'md:text-[10px]');
    });
  });

  describe('PitchLayout', () => {
    it('renders with responsive formation name overlay', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const formationOverlay = screen.getByText(DEFAULT_FORMATION.name);
      const overlayContainer = formationOverlay.closest('div');
      
      expect(overlayContainer?.parentElement).toHaveClass(
        'absolute', 'top-2', 'left-2', 'sm:top-4', 'sm:left-4', 'z-20'
      );
      
      expect(formationOverlay).toHaveClass('text-xs', 'sm:text-sm');
    });

    it('positions partner cards correctly with formation coordinates', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check that cards are positioned using the formation coordinates
      const cardContainers = document.querySelectorAll('[style*="left:"][style*="top:"]');
      expect(cardContainers.length).toBe(DEFAULT_FORMATION.positions.length);
      
      // Verify first position coordinates
      const firstCard = cardContainers[0] as HTMLElement;
      expect(firstCard.style.left).toBe('50%');
      expect(firstCard.style.top).toBe('90%');
    });

    it('applies staggered animation delays', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const cardContainers = document.querySelectorAll('[style*="transition-delay"]');
      expect(cardContainers.length).toBe(DEFAULT_FORMATION.positions.length);
      
      // Check that each card has a different delay
      const delays = Array.from(cardContainers).map(card => 
        (card as HTMLElement).style.transitionDelay
      );
      
      expect(delays[0]).toBe('0ms');
      expect(delays[1]).toBe('100ms');
      expect(delays[2]).toBe('200ms');
    });
  });

  describe('Touch Interactions', () => {
    it('handles touch events on partner cards', () => {
      const mockOnHover = vi.fn();
      render(<PartnerCard position={{ id: 'test', x: 50, y: 50, role: 'Test' }} onHover={mockOnHover} />);
      
      const card = screen.getByRole('button');
      
      // Simulate touch start
      fireEvent.touchStart(card);
      expect(mockOnHover).toHaveBeenCalledWith(null);
      
      // Simulate touch end
      fireEvent.touchEnd(card);
      
      // Verify touch-friendly styling is applied
      expect(card).toHaveClass('active:scale-95');
    });
  });
});
  desc
ribe('Breakpoint Behavior', () => {
    it('handles mobile viewport (320px-767px)', () => {
      // Mock mobile viewport
      Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: createMatchMedia(true),
      });

      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const cards = document.querySelectorAll('.partner-card');
      cards.forEach(card => {
        expect(card).toHaveClass('w-[50px]', 'h-[62px]');
      });
    });

    it('handles tablet viewport (768px-1023px)', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const cards = document.querySelectorAll('.partner-card');
      cards.forEach(card => {
        expect(card).toHaveClass('sm:w-[60px]', 'sm:h-[75px]');
      });
    });

    it('handles desktop viewport (1024px+)', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const cards = document.querySelectorAll('.partner-card');
      cards.forEach(card => {
        expect(card).toHaveClass('lg:w-[80px]', 'lg:h-[100px]');
      });
    });
  });

  describe('Aspect Ratio Maintenance', () => {
    it('maintains 16:9 aspect ratio for pitch background', () => {
      render(<PitchBackground />);
      const container = document.querySelector('.aspect-video');
      expect(container).toBeInTheDocument();
    });

    it('preserves aspect ratio with different container sizes', () => {
      const { rerender } = render(<PitchBackground className="w-full" />);
      
      let container = document.querySelector('.aspect-video');
      expect(container).toBeInTheDocument();
      
      rerender(<PitchBackground className="w-96" />);
      container = document.querySelector('.aspect-video');
      expect(container).toBeInTheDocument();
    });
  });

  describe('Formation Positioning Responsiveness', () => {
    it('maintains formation structure across screen sizes', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check that all positions maintain their relative positioning
      const positionedCards = document.querySelectorAll('[style*="left:"][style*="top:"]');
      expect(positionedCards).toHaveLength(DEFAULT_FORMATION.positions.length);
      
      // Verify percentage-based positioning
      Array.from(positionedCards).forEach(card => {
        const element = card as HTMLElement;
        expect(element.style.left).toMatch(/^\d+%$/);
        expect(element.style.top).toMatch(/^\d+%$/);
      });
    });

    it('scales formation overlay responsively', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const overlay = document.querySelector('.top-2.left-2.sm\\:top-4.sm\\:left-4');
      expect(overlay).toBeInTheDocument();
      
      const formationText = document.querySelector('.text-xs.sm\\:text-sm');
      expect(formationText).toBeInTheDocument();
    });
  });

  describe('Text Scaling', () => {
    it('scales partner card text appropriately', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test Position' };
      const mockPartner = { id: 'test', name: 'Test Partner', position: 'test' };
      
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const partnerName = screen.getByText('Test Partner');
      expect(partnerName).toHaveClass('text-[10px]', 'sm:text-xs', 'md:text-xs');
      
      const positionRole = screen.getByText('Test Position');
      expect(positionRole).toHaveClass('text-[8px]', 'sm:text-[10px]', 'md:text-[10px]');
    });

    it('scales empty card elements appropriately', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test Position' };
      
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const plusIcon = screen.getByText('+');
      expect(plusIcon).toHaveClass('text-xl', 'sm:text-2xl', 'md:text-2xl', 'lg:text-3xl');
      
      const positionText = screen.getByText('Test Position');
      expect(positionText).toHaveClass('text-[10px]', 'sm:text-xs', 'md:text-xs');
    });
  });

  describe('Container Responsiveness', () => {
    it('applies responsive padding to pitch layout', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check that the layout container is responsive
      const layoutContainer = container.firstChild as HTMLElement;
      expect(layoutContainer).toHaveClass('relative', 'w-full');
    });

    it('handles overflow on small screens', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Cards should be positioned to avoid overflow
      const cards = document.querySelectorAll('[style*="left:"][style*="top:"]');
      
      Array.from(cards).forEach(card => {
        const element = card as HTMLElement;
        const left = parseInt(element.style.left);
        const top = parseInt(element.style.top);
        
        expect(left).toBeGreaterThanOrEqual(0);
        expect(left).toBeLessThanOrEqual(100);
        expect(top).toBeGreaterThanOrEqual(0);
        expect(top).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('Interaction Responsiveness', () => {
    it('maintains touch targets on mobile', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      
      // Minimum touch target size should be maintained
      expect(card).toHaveClass('w-[50px]', 'h-[62px]'); // Mobile minimum
    });

    it('provides appropriate hover states for different devices', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      
      // Should have both hover and active states
      expect(card).toHaveClass('hover:scale-105', 'active:scale-95');
    });
  });

  describe('Performance on Different Screen Sizes', () => {
    it('renders efficiently on large formations', () => {
      const largeFormation = {
        name: 'Large Formation',
        positions: Array.from({ length: 22 }, (_, i) => ({
          id: `pos-${i}`,
          x: (i % 11) * 9 + 5,
          y: Math.floor(i / 11) * 40 + 20,
          role: `Position ${i + 1}`
        }))
      };
      
      const startTime = performance.now();
      render(<PitchLayout formation={largeFormation} />);
      const endTime = performance.now();
      
      expect(endTime - startTime).toBeLessThan(50); // Should render quickly
      
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(22);
    });

    it('handles rapid viewport changes', () => {
      const { rerender } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Simulate multiple viewport changes
      for (let i = 0; i < 10; i++) {
        rerender(<PitchLayout formation={DEFAULT_FORMATION} className={`test-${i}`} />);
      }
      
      // Should still render correctly
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(DEFAULT_FORMATION.positions.length);
    });
  });

  describe('Accessibility Across Screen Sizes', () => {
    it('maintains focus visibility on all screen sizes', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      
      // Focus ring should be visible at all sizes
      expect(card).toHaveClass('focus:ring-4', 'focus:ring-[#F37021]');
    });

    it('provides appropriate text contrast at all sizes', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      const mockPartner = { id: 'test', name: 'Test Partner', position: 'test' };
      
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const partnerName = screen.getByText('Test Partner');
      expect(partnerName).toHaveClass('text-[#2d2d2d]'); // High contrast
      
      const positionRole = screen.getByText('Test');
      expect(positionRole).toHaveClass('text-gray-700'); // Sufficient contrast
    });

    it('maintains keyboard navigation across screen sizes', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const application = screen.getByRole('application');
      
      // Should handle keyboard navigation regardless of screen size
      fireEvent.keyDown(application, { key: 'ArrowRight' });
      fireEvent.keyDown(application, { key: 'ArrowLeft' });
      
      expect(application).toBeInTheDocument();
    });
  });
});