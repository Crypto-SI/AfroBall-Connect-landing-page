import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PitchLayout } from '../pitch-layout';
import { PitchBackground } from '../pitch-background';
import { PartnerCard } from '../partner-card';
import { DEFAULT_FORMATION, Partner, Formation } from '@/types/formations';

describe('Visual Regression Tests', () => {
  const mockPartners: Partner[] = [
    {
      id: 'partner-1',
      name: 'Test Partner 1',
      position: 'gk',
      description: 'Goalkeeper partner',
      logo: 'https://example.com/logo1.png'
    },
    {
      id: 'partner-2',
      name: 'Test Partner 2',
      position: 'cb1',
      description: 'Defender partner'
    }
  ];

  const customFormation: Formation = {
    name: '4-3-3',
    positions: [
      { id: 'gk', x: 50, y: 90, role: 'Goalkeeper' },
      { id: 'lb', x: 20, y: 70, role: 'Left Back' },
      { id: 'cb1', x: 40, y: 75, role: 'Centre Back' },
      { id: 'cb2', x: 60, y: 75, role: 'Centre Back' },
      { id: 'rb', x: 80, y: 70, role: 'Right Back' },
      { id: 'cm1', x: 30, y: 50, role: 'Central Midfielder' },
      { id: 'cm2', x: 50, y: 50, role: 'Central Midfielder' },
      { id: 'cm3', x: 70, y: 50, role: 'Central Midfielder' },
      { id: 'lw', x: 25, y: 20, role: 'Left Winger' },
      { id: 'st', x: 50, y: 15, role: 'Striker' },
      { id: 'rw', x: 75, y: 20, role: 'Right Winger' }
    ]
  };

  describe('PitchBackground Visual Consistency', () => {
    it('renders consistent SVG structure', () => {
      const { container } = render(<PitchBackground />);
      
      // Check SVG dimensions and viewBox
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('viewBox', '0 0 800 450');
      expect(svg).toHaveAttribute('preserveAspectRatio', 'xMidYMid meet');
      
      // Check field elements are present
      expect(container.querySelector('rect[width="800"][height="450"]')).toBeInTheDocument(); // Main field
      expect(container.querySelector('circle[cx="400"][cy="225"][r="60"]')).toBeInTheDocument(); // Center circle
      expect(container.querySelector('line[x1="400"][y1="20"][x2="400"][y2="430"]')).toBeInTheDocument(); // Center line
    });

    it('maintains consistent field markings', () => {
      const { container } = render(<PitchBackground />);
      
      // Check penalty areas
      const leftPenaltyArea = container.querySelector('rect[x="20"][y="135"][width="110"][height="180"]');
      const rightPenaltyArea = container.querySelector('rect[x="670"][y="135"][width="110"][height="180"]');
      
      expect(leftPenaltyArea).toBeInTheDocument();
      expect(rightPenaltyArea).toBeInTheDocument();
      
      // Check goal areas
      const leftGoalArea = container.querySelector('rect[x="20"][y="180"][width="40"][height="90"]');
      const rightGoalArea = container.querySelector('rect[x="740"][y="180"][width="40"][height="90"]');
      
      expect(leftGoalArea).toBeInTheDocument();
      expect(rightGoalArea).toBeInTheDocument();
    });

    it('applies consistent styling', () => {
      const { container } = render(<PitchBackground />);
      
      // Check gradient definition
      const gradient = container.querySelector('#fieldGradient');
      expect(gradient).toBeInTheDocument();
      
      // Check stroke colors and widths
      const whiteStrokes = container.querySelectorAll('[stroke="#FFFFFF"]');
      expect(whiteStrokes.length).toBeGreaterThan(0);
      
      const strokeWidth2 = container.querySelectorAll('[stroke-width="2"]');
      expect(strokeWidth2.length).toBeGreaterThan(0);
    });
  });

  describe('PartnerCard Visual Consistency', () => {
    const mockPosition = {
      id: 'test-position',
      x: 50,
      y: 50,
      role: 'Test Role'
    };

    it('renders empty card with consistent styling', () => {
      const { container } = render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = container.querySelector('.partner-card');
      expect(card).toHaveClass('border-dashed', 'border-gray-500');
      
      // Check plus icon
      const plusIcon = container.querySelector('[aria-hidden="true"]');
      expect(plusIcon).toHaveTextContent('+');
    });

    it('renders filled card with consistent styling', () => {
      const { container } = render(
        <PartnerCard 
          position={mockPosition} 
          partner={mockPartners[0]} 
          isEmpty={false} 
        />
      );
      
      const card = container.querySelector('.partner-card');
      expect(card).toHaveClass('border-solid', 'border-gray-400');
      
      // Check gradient overlay
      const overlay = container.querySelector('.bg-gradient-to-b');
      expect(overlay).toBeInTheDocument();
    });

    it('maintains consistent responsive sizing', () => {
      const { container } = render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = container.querySelector('.partner-card');
      expect(card).toHaveClass(
        'w-[50px]', 'h-[62px]',
        'sm:w-[60px]', 'sm:h-[75px]',
        'md:w-[70px]', 'md:h-[87px]',
        'lg:w-[80px]', 'lg:h-[100px]'
      );
    });

    it('applies consistent hover and focus states', () => {
      const { container } = render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = container.querySelector('.partner-card');
      expect(card).toHaveClass(
        'hover:scale-105',
        'hover:border-[#F37021]',
        'focus:ring-4',
        'focus:ring-[#F37021]'
      );
    });
  });

  describe('PitchLayout Formation Consistency', () => {
    it('renders default 4-4-2 formation correctly', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check formation name display
      const formationName = container.querySelector('.text-white');
      expect(formationName).toHaveTextContent('4-4-2');
      
      // Check all 11 positions are rendered
      const cards = container.querySelectorAll('.partner-card');
      expect(cards).toHaveLength(11);
      
      // Check positioning
      const positionedCards = container.querySelectorAll('[style*="left:"][style*="top:"]');
      expect(positionedCards).toHaveLength(11);
    });

    it('renders custom formation correctly', () => {
      const { container } = render(<PitchLayout formation={customFormation} />);
      
      // Check formation name
      const formationName = container.querySelector('.text-white');
      expect(formationName).toHaveTextContent('4-3-3');
      
      // Check correct number of positions
      const cards = container.querySelectorAll('.partner-card');
      expect(cards).toHaveLength(11);
    });

    it('positions cards according to formation coordinates', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const positionedCards = container.querySelectorAll('[style*="left:"][style*="top:"]');
      
      // Check goalkeeper position (first in formation)
      const gkCard = positionedCards[0] as HTMLElement;
      expect(gkCard.style.left).toBe('50%');
      expect(gkCard.style.top).toBe('90%');
      
      // Check that all cards have percentage positioning
      Array.from(positionedCards).forEach(card => {
        const element = card as HTMLElement;
        expect(element.style.left).toMatch(/^\d+%$/);
        expect(element.style.top).toMatch(/^\d+%$/);
      });
    });

    it('applies consistent z-index layering', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check pitch background z-index
      const pitchBackground = container.querySelector('.z-0');
      expect(pitchBackground).toBeInTheDocument();
      
      // Check cards container z-index
      const cardsContainer = container.querySelector('.z-10');
      expect(cardsContainer).toBeInTheDocument();
      
      // Check formation overlay z-index
      const formationOverlay = container.querySelector('.z-20');
      expect(formationOverlay).toBeInTheDocument();
    });
  });

  describe('Partner Integration Visual Tests', () => {
    it('displays partners in correct positions', () => {
      const { container } = render(
        <PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />
      );
      
      // Check that partner 1 (gk position) is displayed
      const gkCard = container.querySelector('[data-testid="partner-card-gk"]');
      expect(gkCard).toHaveTextContent('Test Partner 1');
      
      // Check that partner 2 (cb1 position) is displayed
      const cb1Card = container.querySelector('[data-testid="partner-card-cb1"]');
      expect(cb1Card).toHaveTextContent('Test Partner 2');
    });

    it('shows empty positions consistently', () => {
      const { container } = render(
        <PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />
      );
      
      // Should have 9 empty positions (11 total - 2 filled)
      const emptyCards = container.querySelectorAll('.border-dashed');
      expect(emptyCards).toHaveLength(9);
      
      // Each empty card should have a plus icon
      const plusIcons = container.querySelectorAll('[aria-hidden="true"]');
      expect(plusIcons).toHaveLength(9);
    });

    it('handles partner logos consistently', () => {
      const { container } = render(
        <PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />
      );
      
      // Partner 1 has logo
      const logoImg = container.querySelector('img[alt="Test Partner 1 company logo"]');
      expect(logoImg).toBeInTheDocument();
      expect(logoImg).toHaveAttribute('src', 'https://example.com/logo1.png');
      
      // Partner 2 has no logo, should show initials
      const initials = container.querySelector('[aria-label="Test Partner 2 initials"]');
      expect(initials).toBeInTheDocument();
      expect(initials).toHaveTextContent('T');
    });
  });

  describe('Animation Visual Consistency', () => {
    it('applies consistent transition classes', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check for transition classes on card containers and cards themselves
      const cardContainers = container.querySelectorAll('.transition-all');
      expect(cardContainers.length).toBeGreaterThanOrEqual(11);
      
      // Check for duration classes
      const durationClasses = container.querySelectorAll('.duration-500');
      expect(durationClasses).toHaveLength(11);
    });

    it('applies staggered animation delays', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      const cardContainers = container.querySelectorAll('[style*="transition-delay"]');
      expect(cardContainers).toHaveLength(11);
      
      // Check that delays are properly staggered
      const delays = Array.from(cardContainers).map(card => 
        (card as HTMLElement).style.transitionDelay
      );
      
      expect(delays[0]).toBe('0ms');
      expect(delays[1]).toBe('100ms');
      expect(delays[2]).toBe('200ms');
    });
  });

  describe('Responsive Visual Consistency', () => {
    it('maintains aspect ratio across different containers', () => {
      const { container: container1 } = render(<PitchBackground />);
      const { container: container2 } = render(<PitchBackground className="w-96" />);
      
      // Both should have the same aspect ratio class
      const aspectVideo1 = container1.querySelector('.aspect-video');
      const aspectVideo2 = container2.querySelector('.aspect-video');
      
      expect(aspectVideo1).toBeInTheDocument();
      expect(aspectVideo2).toBeInTheDocument();
    });

    it('applies consistent responsive text sizing', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check formation name responsive sizing
      const formationName = container.querySelector('.text-xs.sm\\:text-sm');
      expect(formationName).toBeInTheDocument();
      
      // Check formation overlay responsive positioning
      const overlay = container.querySelector('.top-2.left-2.sm\\:top-4.sm\\:left-4');
      expect(overlay).toBeInTheDocument();
    });

    it('maintains consistent card sizing across breakpoints', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      const { container } = render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = container.querySelector('.partner-card');
      
      // Check all responsive size classes are present
      const sizeClasses = [
        'w-[50px]', 'h-[62px]',
        'sm:w-[60px]', 'sm:h-[75px]',
        'md:w-[70px]', 'md:h-[87px]',
        'lg:w-[80px]', 'lg:h-[100px]'
      ];
      
      sizeClasses.forEach(className => {
        expect(card).toHaveClass(className);
      });
    });
  });

  describe('Color Consistency', () => {
    it('uses consistent brand colors', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} partners={mockPartners} />);
      
      // Check orange brand color usage in hover states
      const hoverElements = container.querySelectorAll('.hover\\:border-\\[\\#F37021\\]');
      expect(hoverElements.length).toBeGreaterThan(0);
      
      // Check focus ring color
      const focusRings = container.querySelectorAll('.focus\\:ring-\\[\\#F37021\\]');
      expect(focusRings.length).toBeGreaterThan(0);
    });

    it('maintains consistent field colors', () => {
      const { container } = render(<PitchBackground />);
      
      // Check gradient colors
      const gradientStops = container.querySelectorAll('stop');
      expect(gradientStops[0]).toHaveAttribute('stop-color', '#2D5A27');
      expect(gradientStops[1]).toHaveAttribute('stop-color', '#245A1F');
      
      // Check white line colors
      const whiteStrokes = container.querySelectorAll('[stroke="#FFFFFF"]');
      expect(whiteStrokes.length).toBeGreaterThan(0);
    });

    it('applies consistent text colors', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      const { container } = render(
        <PartnerCard position={mockPosition} partner={mockPartners[0]} isEmpty={false} />
      );
      
      // Check partner name color
      const partnerName = container.querySelector('.text-\\[\\#2d2d2d\\]');
      expect(partnerName).toBeInTheDocument();
      
      // Check role text color
      const roleText = container.querySelector('.text-gray-700');
      expect(roleText).toBeInTheDocument();
    });
  });

  describe('Layout Consistency', () => {
    it('maintains consistent spacing and positioning', () => {
      const { container } = render(<PitchLayout formation={DEFAULT_FORMATION} />);
      
      // Check container positioning
      const relativeContainer = container.querySelector('.relative.w-full');
      expect(relativeContainer).toBeInTheDocument();
      
      // Check absolute positioning for cards
      const absoluteCards = container.querySelectorAll('.absolute.transform.-translate-x-1\\/2.-translate-y-1\\/2');
      expect(absoluteCards).toHaveLength(11);
    });

    it('maintains consistent card structure', () => {
      const mockPosition = { id: 'test', x: 50, y: 50, role: 'Test' };
      const { container } = render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      // Check flex layout
      const flexCard = container.querySelector('.flex.flex-col.items-center.justify-center');
      expect(flexCard).toBeInTheDocument();
      
      // Check rounded corners
      const roundedCard = container.querySelector('.rounded-lg');
      expect(roundedCard).toBeInTheDocument();
    });
  });
});