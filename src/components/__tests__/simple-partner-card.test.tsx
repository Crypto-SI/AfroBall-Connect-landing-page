import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PartnerCard } from '../partner-card';

describe('PartnerCard Simple Tests', () => {
  const mockPosition = {
    id: 'test-position',
    x: 50,
    y: 50,
    role: 'Test Role'
  };

  it('renders empty card', () => {
    render(<PartnerCard position={mockPosition} isEmpty={true} />);
    
    const card = screen.getByRole('button');
    expect(card).toBeInTheDocument();
  });

  it('displays plus icon', () => {
    render(<PartnerCard position={mockPosition} isEmpty={true} />);
    
    const plusIcon = screen.getByText('+');
    expect(plusIcon).toBeInTheDocument();
  });

  it('shows position role', () => {
    render(<PartnerCard position={mockPosition} isEmpty={true} />);
    
    const roleText = screen.getByText('Test Role');
    expect(roleText).toBeInTheDocument();
  });
});