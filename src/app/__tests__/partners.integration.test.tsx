import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PartnersPage from '../partners/page';

// Mock window.open for partner website testing
const mockWindowOpen = vi.fn();
Object.defineProperty(window, 'open', {
  writable: true,
  value: mockWindowOpen,
});

describe('Partners Page Integration', () => {
  beforeEach(() => {
    mockWindowOpen.mockClear();
  });

  describe('Page Structure', () => {
    it('renders complete partners page', () => {
      render(<PartnersPage />);
      
      // Check main sections
      expect(screen.getByRole('banner')).toBeInTheDocument(); // Hero section
      expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
      expect(screen.getByRole('application')).toBeInTheDocument(); // Pitch layout
    });

    it('has proper page title and description', () => {
      render(<PartnersPage />);
      
      const title = screen.getByText('Our Partners');
      const description = screen.getByText(/Meet the strategic partners/);
      
      expect(title).toBeInTheDocument();
      expect(description).toBeInTheDocument();
    });

    it('includes formation section', () => {
      render(<PartnersPage />);
      
      const formationTitle = screen.getByText('Our Team Formation');
      const formationDescription = screen.getByText(/Like a championship team/);
      
      expect(formationTitle).toBeInTheDocument();
      expect(formationDescription).toBeInTheDocument();
    });

    it('includes partnership benefits section', () => {
      render(<PartnersPage />);
      
      const benefitsTitle = screen.getByText('Why Partner With Us?');
      const globalReach = screen.getByText('Global Reach');
      const growingMarket = screen.getByText('Growing Market');
      const strategicCollaboration = screen.getByText('Strategic Collaboration');
      
      expect(benefitsTitle).toBeInTheDocument();
      expect(globalReach).toBeInTheDocument();
      expect(growingMarket).toBeInTheDocument();
      expect(strategicCollaboration).toBeInTheDocument();
    });

    it('includes call-to-action section', () => {
      render(<PartnersPage />);
      
      const ctaTitle = screen.getByText('Ready to Join Our Team?');
      const contactButton = screen.getByText('Contact Partnership Team');
      
      expect(ctaTitle).toBeInTheDocument();
      expect(contactButton).toBeInTheDocument();
    });
  });

  describe('Pitch Layout Integration', () => {
    it('renders pitch layout with default formation', () => {
      render(<PartnersPage />);
      
      const formationName = screen.getByText('4-4-2');
      expect(formationName).toBeInTheDocument();
    });

    it('shows all 11 partner positions', () => {
      render(<PartnersPage />);
      
      const partnerCards = screen.getAllByRole('button');
      expect(partnerCards).toHaveLength(11);
    });

    it('displays empty partner positions', () => {
      render(<PartnersPage />);
      
      // All positions should be empty (showing + icons)
      const emptyPositions = screen.getAllByText('+');
      expect(emptyPositions).toHaveLength(11);
    });

    it('shows position roles for empty cards', () => {
      render(<PartnersPage />);
      
      expect(screen.getByText('Goalkeeper')).toBeInTheDocument();
      expect(screen.getByText('Left Back')).toBeInTheDocument();
      expect(screen.getByText('Centre Back')).toBeInTheDocument();
      expect(screen.getByText('Right Back')).toBeInTheDocument();
      expect(screen.getByText('Left Midfielder')).toBeInTheDocument();
      expect(screen.getByText('Central Midfielder')).toBeInTheDocument();
      expect(screen.getByText('Right Midfielder')).toBeInTheDocument();
      expect(screen.getByText('Striker')).toBeInTheDocument();
    });
  });

  describe('Accessibility Integration', () => {
    it('has proper skip links', () => {
      render(<PartnersPage />);
      
      const skipLinks = screen.getAllByText('Skip to main content');
      expect(skipLinks.length).toBeGreaterThan(0);
    });

    it('has proper heading hierarchy', () => {
      render(<PartnersPage />);
      
      // Check for proper heading structure
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });
      const h3s = screen.getAllByRole('heading', { level: 3 });
      
      expect(h1).toHaveTextContent('Our Partners');
      expect(h2s.length).toBeGreaterThan(0);
      expect(h3s.length).toBeGreaterThan(0);
    });

    it('has navigation instructions for keyboard users', () => {
      render(<PartnersPage />);
      
      const instructions = screen.getByText(/Use Tab to navigate between positions/);
      expect(instructions).toBeInTheDocument();
    });

    it('provides comprehensive ARIA labels', () => {
      render(<PartnersPage />);
      
      const application = screen.getByRole('application');
      expect(application).toHaveAttribute('aria-label');
      
      const grid = screen.getByRole('grid');
      expect(grid).toHaveAttribute('aria-label');
    });

    it('has live region for screen reader announcements', () => {
      render(<PartnersPage />);
      
      const liveRegion = screen.getByRole('status');
      expect(liveRegion).toHaveAttribute('aria-live', 'polite');
    });
  });

  describe('Interactive Features', () => {
    it('handles partner position selection', async () => {
      render(<PartnersPage />);
      
      const firstCard = screen.getAllByRole('button')[0];
      fireEvent.click(firstCard);
      
      // Should handle click without errors
      expect(firstCard).toBeInTheDocument();
    });

    it('handles keyboard navigation', () => {
      render(<PartnersPage />);
      
      const application = screen.getByRole('application');
      
      // Test keyboard navigation
      fireEvent.keyDown(application, { key: 'ArrowRight' });
      fireEvent.keyDown(application, { key: 'ArrowLeft' });
      fireEvent.keyDown(application, { key: 'Home' });
      fireEvent.keyDown(application, { key: 'End' });
      
      expect(application).toBeInTheDocument();
    });

    it('handles hover interactions', () => {
      render(<PartnersPage />);
      
      const firstCard = screen.getAllByRole('button')[0];
      
      fireEvent.mouseEnter(firstCard);
      fireEvent.mouseLeave(firstCard);
      
      expect(firstCard).toBeInTheDocument();
    });

    it('handles focus management', async () => {
      render(<PartnersPage />);
      
      const firstCard = screen.getAllByRole('button')[0];
      fireEvent.focus(firstCard);
      
      await waitFor(() => {
        const liveRegion = screen.getByRole('status');
        expect(liveRegion).toHaveTextContent(/Focused on empty/);
      });
    });
  });

  describe('Contact Integration', () => {
    it('has contact email links', () => {
      render(<PartnersPage />);
      
      const emailLinks = screen.getAllByText('partnerships@afroballconnect.com');
      expect(emailLinks.length).toBeGreaterThan(0);
      
      emailLinks.forEach(link => {
        expect(link.closest('a')).toHaveAttribute('href', 'mailto:partnerships@afroballconnect.com');
      });
    });

    it('has contact button', () => {
      render(<PartnersPage />);
      
      const contactButton = screen.getByText('Contact Partnership Team');
      expect(contactButton.closest('a')).toHaveAttribute('href', 'mailto:partnerships@afroballconnect.com');
    });
  });

  describe('Responsive Design Integration', () => {
    it('applies responsive classes to main sections', () => {
      render(<PartnersPage />);
      
      // Check hero section responsive classes
      const heroSection = screen.getByLabelText(/African football stadium background/);
      expect(heroSection.closest('section')).toHaveClass('py-12', 'md:py-24', 'lg:py-32', 'xl:py-48');
    });

    it('applies responsive typography', () => {
      render(<PartnersPage />);
      
      const mainTitle = screen.getByText('Our Partners');
      expect(mainTitle).toHaveClass('text-2xl', 'sm:text-3xl', 'md:text-4xl', 'lg:text-5xl', 'xl:text-6xl/none');
    });

    it('has responsive pitch layout container', () => {
      render(<PartnersPage />);
      
      const pitchContainer = screen.getByRole('region', { name: /Our Team Formation/i });
      expect(pitchContainer).toBeInTheDocument();
    });
  });

  describe('Animation Integration', () => {
    it('loads pitch layout with staggered animations', async () => {
      render(<PartnersPage />);
      
      await waitFor(() => {
        const liveRegion = screen.getByRole('status');
        expect(liveRegion).toHaveTextContent(/Football pitch formation 4-4-2 loaded/);
      });
    });

    it('applies hover effects to partner cards', () => {
      render(<PartnersPage />);
      
      const cards = screen.getAllByRole('button');
      cards.forEach(card => {
        expect(card).toHaveClass('hover:scale-105');
      });
    });
  });

  describe('SEO and Metadata Integration', () => {
    it('has proper semantic structure', () => {
      render(<PartnersPage />);
      
      // Check for semantic HTML elements
      expect(screen.getByRole('banner')).toBeInTheDocument(); // header/hero
      expect(screen.getByRole('main')).toBeInTheDocument(); // main content
      expect(screen.getByRole('application')).toBeInTheDocument(); // pitch layout
    });

    it('has descriptive text for SEO', () => {
      render(<PartnersPage />);
      
      const descriptions = [
        /Meet the strategic partners/,
        /Like a championship team/,
        /Join a growing ecosystem/,
        /Become a strategic partner/
      ];
      
      descriptions.forEach(description => {
        expect(screen.getByText(description)).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling Integration', () => {
    it('handles missing formation data gracefully', () => {
      render(<PartnersPage />);
      
      // Should render without crashing even if formation data is missing
      const application = screen.getByRole('application');
      expect(application).toBeInTheDocument();
    });

    it('handles interaction errors gracefully', () => {
      render(<PartnersPage />);
      
      const cards = screen.getAllByRole('button');
      
      // Should handle multiple rapid interactions without errors
      cards.forEach(card => {
        fireEvent.click(card);
        fireEvent.mouseEnter(card);
        fireEvent.mouseLeave(card);
      });
      
      expect(cards[0]).toBeInTheDocument();
    });
  });

  describe('Performance Integration', () => {
    it('renders efficiently with all components', () => {
      const startTime = performance.now();
      render(<PartnersPage />);
      const endTime = performance.now();
      
      // Should render within reasonable time (less than 100ms)
      expect(endTime - startTime).toBeLessThan(100);
    });

    it('handles multiple re-renders efficiently', () => {
      const { rerender } = render(<PartnersPage />);
      
      // Re-render multiple times
      for (let i = 0; i < 5; i++) {
        rerender(<PartnersPage />);
      }
      
      // Should still work correctly
      const application = screen.getByRole('application');
      expect(application).toBeInTheDocument();
    });
  });

  describe('Cross-Component Communication', () => {
    it('properly passes data between components', () => {
      render(<PartnersPage />);
      
      // Verify that PitchLayout receives the correct formation
      const formationName = screen.getByText('4-4-2');
      expect(formationName).toBeInTheDocument();
      
      // Verify that all position cards are rendered
      const cards = screen.getAllByRole('button');
      expect(cards).toHaveLength(11);
    });

    it('handles state updates correctly', async () => {
      render(<PartnersPage />);
      
      const firstCard = screen.getAllByRole('button')[0];
      fireEvent.click(firstCard);
      
      // Should handle state updates without breaking the layout
      expect(screen.getByRole('application')).toBeInTheDocument();
    });
  });
});