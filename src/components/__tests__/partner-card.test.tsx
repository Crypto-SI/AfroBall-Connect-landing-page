import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { PartnerCard } from '../partner-card';
import { Partner, Position } from '@/types/formations';

describe('PartnerCard Component', () => {
  const mockPosition: Position = {
    id: 'test-position',
    x: 50,
    y: 50,
    role: 'Test Role'
  };

  const mockPartner: Partner = {
    id: 'test-partner',
    name: 'Test Partner',
    position: 'test-position',
    description: 'A test partner for testing',
    website: 'https://example.com',
    logo: 'https://example.com/logo.png'
  };

  describe('Empty State Rendering', () => {
    it('renders empty card correctly', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('border-dashed');
    });

    it('displays plus icon for empty state', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const plusIcon = screen.getByText('+');
      expect(plusIcon).toBeInTheDocument();
      expect(plusIcon).toHaveAttribute('aria-hidden', 'true');
    });

    it('displays position role for empty state', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const roleText = screen.getByText('Test Role');
      expect(roleText).toBeInTheDocument();
    });

    it('shows available position status', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const statusText = screen.getByText('Available position');
      expect(statusText).toBeInTheDocument();
      expect(statusText).toHaveClass('sr-only');
    });
  });

  describe('Filled State Rendering', () => {
    it('renders filled card correctly', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const card = screen.getByRole('button');
      expect(card).toBeInTheDocument();
      expect(card).toHaveClass('border-solid');
    });

    it('displays partner name', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const partnerName = screen.getByText('Test Partner');
      expect(partnerName).toBeInTheDocument();
    });

    it('displays partner logo when provided', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const logo = screen.getByAltText('Test Partner company logo');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', 'https://example.com/logo.png');
    });

    it('displays initials when no logo provided', () => {
      const partnerWithoutLogo = { ...mockPartner, logo: undefined };
      render(<PartnerCard position={mockPosition} partner={partnerWithoutLogo} isEmpty={false} />);
      
      const initials = screen.getByLabelText('Test Partner initials');
      expect(initials).toBeInTheDocument();
      expect(initials).toHaveTextContent('T');
    });

    it('displays position role', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const roleText = screen.getByText('Test Role');
      expect(roleText).toBeInTheDocument();
    });
  });

  describe('Responsive Design', () => {
    it('applies responsive sizing classes', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      expect(card).toHaveClass(
        'w-[50px]', 'h-[62px]',
        'sm:w-[60px]', 'sm:h-[75px]',
        'md:w-[70px]', 'md:h-[87px]',
        'lg:w-[80px]', 'lg:h-[100px]'
      );
    });

    it('applies responsive text sizing for empty state', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const plusIcon = screen.getByText('+');
      expect(plusIcon).toHaveClass('text-xl', 'sm:text-2xl', 'md:text-2xl', 'lg:text-3xl');
      
      const roleText = screen.getByText('Test Role');
      expect(roleText).toHaveClass('text-[10px]', 'sm:text-xs', 'md:text-xs');
    });

    it('applies responsive text sizing for filled state', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const partnerName = screen.getByText('Test Partner');
      expect(partnerName).toHaveClass('text-[10px]', 'sm:text-xs', 'md:text-xs');
      
      const roleText = screen.getByText('Test Role');
      expect(roleText).toHaveClass('text-[8px]', 'sm:text-[10px]', 'md:text-[10px]');
    });
  });

  describe('Interactions', () => {
    it('handles mouse hover events', () => {
      const mockOnHover = vi.fn();
      render(<PartnerCard position={mockPosition} partner={mockPartner} onHover={mockOnHover} />);
      
      const card = screen.getByRole('button');
      
      fireEvent.mouseEnter(card);
      expect(mockOnHover).toHaveBeenCalledWith(mockPartner);
      
      fireEvent.mouseLeave(card);
      expect(mockOnHover).toHaveBeenCalledWith(null);
    });

    it('handles touch events', () => {
      const mockOnHover = vi.fn();
      render(<PartnerCard position={mockPosition} partner={mockPartner} onHover={mockOnHover} />);
      
      const card = screen.getByRole('button');
      
      fireEvent.touchStart(card);
      expect(mockOnHover).toHaveBeenCalledWith(mockPartner);
    });

    it('handles focus and blur events', () => {
      const mockOnFocus = vi.fn();
      const mockOnBlur = vi.fn();
      render(
        <PartnerCard 
          position={mockPosition} 
          partner={mockPartner} 
          onFocus={mockOnFocus}
          onBlur={mockOnBlur}
        />
      );
      
      const card = screen.getByRole('button');
      
      fireEvent.focus(card);
      expect(mockOnFocus).toHaveBeenCalledWith(mockPartner);
      
      fireEvent.blur(card);
      expect(mockOnBlur).toHaveBeenCalled();
    });

    it('handles click events', () => {
      const mockOnClick = vi.fn();
      render(<PartnerCard position={mockPosition} partner={mockPartner} onClick={mockOnClick} />);
      
      const card = screen.getByRole('button');
      fireEvent.click(card);
      
      expect(mockOnClick).toHaveBeenCalledWith(mockPartner);
    });

    it('handles keyboard events', () => {
      const mockOnClick = vi.fn();
      render(<PartnerCard position={mockPosition} partner={mockPartner} onClick={mockOnClick} />);
      
      const card = screen.getByRole('button');
      
      // Test Enter key
      fireEvent.keyDown(card, { key: 'Enter', code: 'Enter' });
      expect(mockOnClick).toHaveBeenCalledWith(mockPartner);
      
      // Test Space key
      mockOnClick.mockClear();
      fireEvent.keyDown(card, { key: ' ', code: 'Space' });
      expect(mockOnClick).toHaveBeenCalledWith(mockPartner);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes for empty card', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      expect(card).toHaveAttribute('aria-label');
      expect(card).toHaveAttribute('aria-describedby');
      expect(card).toHaveAttribute('tabindex', '0');
      expect(card).toHaveAttribute('data-testid', 'partner-card-test-position');
    });

    it('has proper ARIA attributes for filled card', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const card = screen.getByRole('button');
      expect(card).toHaveAttribute('aria-label');
      expect(card).toHaveAttribute('aria-describedby');
      expect(card).toHaveAttribute('tabindex', '0');
    });

    it('generates comprehensive ARIA label for empty card', () => {
      render(<PartnerCard position={mockPosition} isEmpty={true} />);
      
      const card = screen.getByRole('button');
      const ariaLabel = card.getAttribute('aria-label');
      
      expect(ariaLabel).toContain('Empty');
      expect(ariaLabel).toContain('Test Role');
      expect(ariaLabel).toContain('position');
      expect(ariaLabel).toContain('Press Enter');
    });

    it('generates comprehensive ARIA label for filled card', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const card = screen.getByRole('button');
      const ariaLabel = card.getAttribute('aria-label');
      
      expect(ariaLabel).toContain('Test Partner');
      expect(ariaLabel).toContain('Test Role');
      expect(ariaLabel).toContain('Press Enter');
    });

    it('provides screen reader description', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} isEmpty={false} />);
      
      const description = screen.getByText(/Partner card for Test Partner/);
      expect(description).toBeInTheDocument();
      expect(description).toHaveClass('sr-only');
    });

    it('has proper focus styles', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} />);
      
      const card = screen.getByRole('button');
      expect(card).toHaveClass('focus:ring-4', 'focus:ring-[#F37021]');
    });
  });

  describe('Visual Styling', () => {
    it('applies hover effects', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} />);
      
      const card = screen.getByRole('button');
      expect(card).toHaveClass(
        'hover:scale-105',
        'hover:border-[#F37021]',
        'hover:shadow-lg'
      );
    });

    it('applies active states for touch', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} />);
      
      const card = screen.getByRole('button');
      expect(card).toHaveClass('active:scale-95', 'active:border-[#F37021]');
    });

    it('has gradient overlay', () => {
      const { container } = render(<PartnerCard position={mockPosition} partner={mockPartner} />);
      
      const overlay = container.querySelector('.bg-gradient-to-b');
      expect(overlay).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles partner without logo gracefully', () => {
      const partnerWithoutLogo = { ...mockPartner, logo: undefined };
      render(<PartnerCard position={mockPosition} partner={partnerWithoutLogo} isEmpty={false} />);
      
      const initials = screen.getByLabelText('Test Partner initials');
      expect(initials).toBeInTheDocument();
    });

    it('handles partner without name gracefully', () => {
      const partnerWithoutName = { ...mockPartner, name: '' };
      render(<PartnerCard position={mockPosition} partner={partnerWithoutName} isEmpty={false} />);
      
      const initials = screen.getByLabelText(' initials');
      expect(initials).toHaveTextContent('?');
    });

    it('handles partner without website', () => {
      const partnerWithoutWebsite = { ...mockPartner, website: undefined };
      render(<PartnerCard position={mockPosition} partner={partnerWithoutWebsite} isEmpty={false} />);
      
      const card = screen.getByRole('button');
      const ariaLabel = card.getAttribute('aria-label');
      expect(ariaLabel).toContain('Press Enter for more information');
    });

    it('handles missing callbacks gracefully', () => {
      render(<PartnerCard position={mockPosition} partner={mockPartner} />);
      
      const card = screen.getByRole('button');
      
      // These should not throw errors
      fireEvent.mouseEnter(card);
      fireEvent.mouseLeave(card);
      fireEvent.focus(card);
      fireEvent.blur(card);
      fireEvent.click(card);
    });
  });
});