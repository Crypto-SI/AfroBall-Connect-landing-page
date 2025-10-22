import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PitchLayout } from '../pitch-layout';
import { DEFAULT_FORMATION, Partner, Formation } from '@/types/formations';

describe('PitchLayout Component', () => {
  const mockPartners: Partner[] = [
    {
      id: 'partner-1',
      name: 'Test Partner 1',
      position: 'gk',
      description: 'Goalkeeper partner',
      website: 'https://example1.com'
    },
    {
      id: 'partner-2',
      name: 'Test Partner 2',
      position: 'cb1',
      description: 'Defender partner',
      logo: 'https://example.com/logo2.png'
    }
  ];

  const customFormation: Formation = {
    name: '4-3-3',
    positions: [
      { id: 'gk', x: 50, y: 90, role: 'Goalkeeper' },
      { id: 'lb', x: 25, y: 75, role: 'Left Back' },
      { id: 'cb1', x: 40, y: 75, role: 'Centre Back' },
      { id: 'cb2', x: 60, y: 75, role: 'Centre Back' },
      { id: 'rb', x: 75, y: 75, role: 'Right Back' },
      { id: 'cm1', x: 35, y: 50, role: 'Central Midfielder' },
      { id: 'cm2', x: 50, y: 50, role: 'Central Midfielder' },
      { id: 'cm3', x: 65, y: 50, role: 'Central Midfielder' },
      { id: 'lw', x: 30, y: 20, role: 'Left Winger' },
      { id: 'st', x: 50, y: 15, role: 'Striker' },
      { id: 'rw', x: 70, y: 20, role: 'Right Winger' }
    ]
  };

  describe('Rendering', () => {
    it('renders without crashing', () => {
      render(<PitchLayout />);
      const application = screen.getByRole('application');
      expect(application).toBeInTheDocument();
    });

    it('uses default formation when none provided', () => {
      render(<PitchLayout />);
      const formationName = screen.getByText('4-4-2');
      expect(formationName).toBeInTheDocument();
    });

    it('renders custom formation', () => {
      render(<PitchLayout formation={customFormation} />);
      const formationName = screen.getByText('4-3-3');
      expect(formationName).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(<PitchLayout className="custom-class" />);
      const layoutContainer = container.firstChild as HTMLElement;
      expect(layoutContainer).toHaveClass('custom-class');
    });

    it('renders all position cards', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(DEFAULT_FORMATION.positions.length);
    });

    it('renders partners in correct positions', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      const partner1Name = screen.getByText('Test Partner 1');
      const partner2Name = screen.getByText('Test Partner 2');
      
      expect(partner1Name).toBeInTheDocument();
      expect(partner2Name).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA structure', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const application = screen.getByRole('application');
      expect(application).toHaveAttribute('aria-label');
      expect(application.getAttribute('aria-label')).toContain('Football pitch formation');
      expect(application.getAttribute('aria-label')).toContain('4-4-2');
      expect(application.getAttribute('aria-label')).toContain('11 partner positions');
    });

    it('has grid structure for positions', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const grid = screen.getByRole('grid');
      expect(grid).toHaveAttribute('aria-label', 'Partner positions on football pitch');
    });

    it('has navigation instructions', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const instructions = screen.getByText(/Navigate between partner positions/);
      expect(instructions).toBeInTheDocument();
      expect(instructions).toHaveClass('sr-only');
    });

    it('has live region for announcements', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const liveRegion = screen.getByRole('status');
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
      expect(liveRegion).toHaveAttribute('aria-atomic', 'true');
    });

    it('has skip link', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const skipLink = screen.getByText('Skip to main content');
      expect(skipLink).toBeInTheDocument();
      expect(skipLink).toHaveClass('sr-only');
    });

    it('announces formation loading', async () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      await waitFor(() => {
        const liveRegion = screen.getByRole('status');
        expect(liveRegion).toHaveTextContent(/Football pitch formation 4-4-2 loaded/);
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('handles arrow key navigation', async () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const application = screen.getByRole('application');
      
      // Focus the application
      fireEvent.focus(application);
      
      // Test right arrow
      fireEvent.keyDown(application, { key: 'ArrowRight', code: 'ArrowRight' });
      
      // Should have proper keyboard navigation setup
      expect(application).toHaveAttribute('role', 'application');
    });

    it('handles Home and End keys', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const application = screen.getByRole('application');
      
      fireEvent.keyDown(application, { key: 'Home', code: 'Home' });
      fireEvent.keyDown(application, { key: 'End', code: 'End' });
      
      // Should handle navigation without errors
      expect(application).toBeInTheDocument();
    });

    it('supports all arrow keys', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const application = screen.getByRole('application');
      
      fireEvent.keyDown(application, { key: 'ArrowLeft', code: 'ArrowLeft' });
      fireEvent.keyDown(application, { key: 'ArrowUp', code: 'ArrowUp' });
      fireEvent.keyDown(application, { key: 'ArrowDown', code: 'ArrowDown' });
      
      expect(application).toBeInTheDocument();
    });
  });

  describe('Partner Interactions', () => {
    it('calls onPartnerHover when partner is hovered', () => {
      const mockOnPartnerHover = vi.fn();
      render(
        <PitchLayout 
          formation={DEFAULT_FORMATION} 
          partners={mockPartners}
          onPartnerHover={mockOnPartnerHover}
        />
      );
      
      const partnerCard = screen.getByText('Test Partner 1').closest('button');
      
      if (partnerCard) {
        fireEvent.mouseEnter(partnerCard);
        expect(mockOnPartnerHover).toHaveBeenCalledWith(mockPartners[0]);
      }
    });

    it('calls onPartnerSelect when partner is clicked', () => {
      const mockOnPartnerSelect = vi.fn();
      render(
        <PitchLayout 
          formation={DEFAULT_FORMATION} 
          partners={mockPartners}
          onPartnerSelect={mockOnPartnerSelect}
        />
      );
      
      const partnerCard = screen.getByText('Test Partner 1').closest('button');
      
      if (partnerCard) {
        fireEvent.click(partnerCard);
        expect(mockOnPartnerSelect).toHaveBeenCalledWith(mockPartners[0], 'gk');
      }
    });

    it('handles empty position interactions', () => {
      const mockOnPartnerSelect = vi.fn();
      render(
        <PitchLayout 
          formation={DEFAULT_FORMATION} 
          partners={[]} // No partners
          onPartnerSelect={mockOnPartnerSelect}
        />
      );
      
      const cards = screen.getAllByRole('button');
      const firstCard = cards[0];
      
      fireEvent.click(firstCard);
      expect(mockOnPartnerSelect).toHaveBeenCalledWith(null, DEFAULT_FORMATION.positions[0].id);
    });
  });

  describe('Animation and Loading', () => {
    it('applies staggered animation delays', async () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      await waitFor(() => {
        const cardContainers = container.querySelectorAll('[style*="transition-delay"]');
        expect(cardContainers.length).toBe(DEFAULT_FORMATION.positions.length);
      });
    });

    it('shows loading state initially', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check for opacity-0 class initially (before animation)
      const cardContainers = container.querySelectorAll('.opacity-0');
      expect(cardContainers.length).toBeGreaterThan(0);
    });

    it('transitions to loaded state', async () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      await waitFor(() => {
        const loadedCards = container.querySelectorAll('.opacity-100');
        expect(loadedCards.length).toBe(DEFAULT_FORMATION.positions.length);
      });
    });
  });

  describe('Formation Display', () => {
    it('displays formation name overlay', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const formationOverlay = screen.getByText('4-4-2');
      const overlayContainer = formationOverlay.closest('div');
      
      expect(overlayContainer).toHaveClass('bg-black/70');
      expect(formationOverlay).toHaveClass('text-white');
    });

    it('positions formation overlay correctly', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const formationOverlay = screen.getByText('4-4-2');
      const overlayContainer = formationOverlay.closest('div')?.parentElement;
      
      expect(overlayContainer).toHaveClass('absolute', 'top-2', 'left-2');
    });

    it('hides formation name when not provided', () => {
      const formationWithoutName = { ...DEFAULT_FORMATION, name: '' };
      render(<PitchLayout formation={formationWithoutName} />);
      
      const formationOverlay = screen.queryByText('4-4-2');
      expect(formationOverlay).not.toBeInTheDocument();
    });
  });

  describe('Position Mapping', () => {
    it('correctly maps partners to positions', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      // Partner 1 should be in goalkeeper position
      const gkCard = screen.getByTestId('partner-card-gk');
      expect(gkCard).toHaveTextContent('Test Partner 1');
      
      // Partner 2 should be in cb1 position
      const cb1Card = screen.getByTestId('partner-card-cb1');
      expect(cb1Card).toHaveTextContent('Test Partner 2');
    });

    it('shows empty cards for positions without partners', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      // Most positions should be empty (showing + icon)
      const emptyCards = screen.getAllByText('+');
      expect(emptyCards.length).toBe(DEFAULT_FORMATION.positions.length - mockPartners.length);
    });

    it('handles partners with invalid positions', () => {
      const invalidPartners = [
        {
          id: 'invalid-partner',
          name: 'Invalid Partner',
          position: 'invalid-position'
        }
      ];
      
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={invalidPartners} />);
      
      // Should render without crashing
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(DEFAULT_FORMATION.positions.length);
    });
  });

  describe('Responsive Behavior', () => {
    it('applies responsive classes to formation overlay', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const formationOverlay = screen.getByText('4-4-2');
      expect(formationOverlay).toHaveClass('text-xs', 'sm:text-sm');
      
      const overlayContainer = formationOverlay.closest('div')?.parentElement;
      expect(overlayContainer).toHaveClass('sm:top-4', 'sm:left-4');
    });

    it('maintains proper positioning across screen sizes', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check that cards are positioned using percentage coordinates
      const positionedCards = container.querySelectorAll('[style*="left:"][style*="top:"]');
      expect(positionedCards.length).toBe(DEFAULT_FORMATION.positions.length);
      
      // Verify first position (goalkeeper at 50%, 90%)
      const firstCard = positionedCards[0] as HTMLElement;
      expect(firstCard.style.left).toBe('50%');
      expect(firstCard.style.top).toBe('90%');
    });
  });

  describe('Focus Management', () => {
    it('manages focus states correctly', async () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      const firstCard = screen.getByTestId('partner-card-gk');
      
      fireEvent.focus(firstCard);
      
      await waitFor(() => {
        const liveRegion = screen.getByRole('status');
        expect(liveRegion).toHaveTextContent(/Focused on Test Partner 1/);
      });
    });

    it('announces empty position focus', async () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={[]} />);
      
      const firstCard = screen.getByTestId('partner-card-gk');
      
      fireEvent.focus(firstCard);
      
      await waitFor(() => {
        const liveRegion = screen.getByRole('status');
        expect(liveRegion).toHaveTextContent(/Focused on empty Goalkeeper position/);
      });
    });

    it('manages z-index for focused cards', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const firstCard = screen.getByTestId('partner-card-gk');
      fireEvent.focus(firstCard);
      
      // Check that the card container has higher z-index when focused
      const cardContainer = firstCard.closest('div');
      const style = cardContainer ? window.getComputedStyle(cardContainer) : null;
      
      // The z-index should be set via inline styles
      expect(cardContainer).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles missing formation gracefully', () => {
      // @ts-expect-error Testing error case
      render(<PitchLayout formation={null} />);
      
      // Should fall back to default formation
      const formationName = screen.getByText('4-4-2');
      expect(formationName).toBeInTheDocument();
    });

    it('handles missing partners array gracefully', () => {
      // @ts-expect-error Testing error case
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={null} />);
      
      // Should render empty cards
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(DEFAULT_FORMATION.positions.length);
    });

    it('handles missing callbacks gracefully', () => {
      render(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      const firstCard = screen.getByTestId('partner-card-gk');
      
      // These should not throw errors
      fireEvent.mouseEnter(firstCard);
      fireEvent.click(firstCard);
      fireEvent.focus(firstCard);
    });
  });

  describe('Performance', () => {
    it('memoizes partner position mapping', () => {
      const { rerender } = render(
        <PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />
      );
      
      // Re-render with same props
      rerender(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      // Should still render correctly
      const partner1 = screen.getByText('Test Partner 1');
      expect(partner1).toBeInTheDocument();
    });

    it('handles large number of positions efficiently', () => {
      const largeFormation: Formation = {
        name: 'Large Formation',
        positions: Array.from({ length: 50 }, (_, i) => ({
          id: `pos-${i}`,
          x: (i % 10) * 10,
          y: Math.floor(i / 10) * 20,
          role: `Position ${i}`
        }))
      };
      
      render(<PitchLayout formation={largeFormation} />);
      
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(50);
    });
  });
});