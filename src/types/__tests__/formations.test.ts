import { describe, it, expect } from 'vitest';
import {
  Position,
  Formation,
  Partner,
  DEFAULT_FORMATION,
  FORMATIONS,
  validatePosition,
  validateFormation,
  validatePartner
} from '../formations';

describe('Formation Data Structures', () => {
  describe('Position Interface', () => {
    it('should validate a correct position', () => {
      const validPosition: Position = {
        id: 'gk',
        x: 50,
        y: 90,
        role: 'Goalkeeper'
      };

      expect(validatePosition(validPosition)).toBe(true);
    });

    it('should reject position with invalid coordinates', () => {
      const invalidPosition: Position = {
        id: 'gk',
        x: -10, // Invalid: below 0
        y: 90,
        role: 'Goalkeeper'
      };

      expect(validatePosition(invalidPosition)).toBe(false);
    });

    it('should reject position with coordinates above 100', () => {
      const invalidPosition: Position = {
        id: 'gk',
        x: 50,
        y: 110, // Invalid: above 100
        role: 'Goalkeeper'
      };

      expect(validatePosition(invalidPosition)).toBe(false);
    });

    it('should reject position with empty id', () => {
      const invalidPosition: Position = {
        id: '', // Invalid: empty string
        x: 50,
        y: 90,
        role: 'Goalkeeper'
      };

      expect(validatePosition(invalidPosition)).toBe(false);
    });

    it('should reject position with empty role', () => {
      const invalidPosition: Position = {
        id: 'gk',
        x: 50,
        y: 90,
        role: '' // Invalid: empty string
      };

      expect(validatePosition(invalidPosition)).toBe(false);
    });
  });

  describe('Formation Interface', () => {
    it('should validate the default 4-4-2 formation', () => {
      expect(validateFormation(DEFAULT_FORMATION)).toBe(true);
    });

    it('should have exactly 11 positions in default formation', () => {
      expect(DEFAULT_FORMATION.positions).toHaveLength(11);
    });

    it('should have unique position IDs in default formation', () => {
      const positionIds = DEFAULT_FORMATION.positions.map(p => p.id);
      const uniqueIds = new Set(positionIds);
      expect(uniqueIds.size).toBe(positionIds.length);
    });

    it('should reject formation with wrong number of positions', () => {
      const invalidFormation: Formation = {
        name: '4-4-2',
        positions: DEFAULT_FORMATION.positions.slice(0, 10) // Only 10 positions
      };

      expect(validateFormation(invalidFormation)).toBe(false);
    });

    it('should reject formation with duplicate position IDs', () => {
      const duplicatePositions = [...DEFAULT_FORMATION.positions];
      duplicatePositions[1] = { ...duplicatePositions[0] }; // Duplicate first position

      const invalidFormation: Formation = {
        name: '4-4-2',
        positions: duplicatePositions
      };

      expect(validateFormation(invalidFormation)).toBe(false);
    });

    it('should reject formation with empty name', () => {
      const invalidFormation: Formation = {
        name: '', // Invalid: empty string
        positions: DEFAULT_FORMATION.positions
      };

      expect(validateFormation(invalidFormation)).toBe(false);
    });
  });

  describe('Partner Interface', () => {
    it('should validate a complete partner object', () => {
      const validPartner: Partner = {
        id: 'partner-1',
        name: 'Test Partner',
        logo: 'https://example.com/logo.png',
        description: 'A test partner',
        website: 'https://example.com',
        position: 'gk'
      };

      expect(validatePartner(validPartner)).toBe(true);
    });

    it('should validate a minimal partner object', () => {
      const minimalPartner: Partner = {
        id: 'partner-1',
        name: 'Test Partner',
        position: 'gk'
      };

      expect(validatePartner(minimalPartner)).toBe(true);
    });

    it('should reject partner with empty id', () => {
      const invalidPartner: Partner = {
        id: '', // Invalid: empty string
        name: 'Test Partner',
        position: 'gk'
      };

      expect(validatePartner(invalidPartner)).toBe(false);
    });

    it('should reject partner with empty name', () => {
      const invalidPartner: Partner = {
        id: 'partner-1',
        name: '', // Invalid: empty string
        position: 'gk'
      };

      expect(validatePartner(invalidPartner)).toBe(false);
    });

    it('should reject partner with empty position', () => {
      const invalidPartner: Partner = {
        id: 'partner-1',
        name: 'Test Partner',
        position: '' // Invalid: empty string
      };

      expect(validatePartner(invalidPartner)).toBe(false);
    });
  });

  describe('Default Formation Structure', () => {
    it('should have correct formation name', () => {
      expect(DEFAULT_FORMATION.name).toBe('4-4-2');
    });

    it('should have goalkeeper at the back', () => {
      const goalkeeper = DEFAULT_FORMATION.positions.find(p => p.role === 'Goalkeeper');
      expect(goalkeeper).toBeDefined();
      expect(goalkeeper?.y).toBeGreaterThan(80); // Should be near the bottom
    });

    it('should have defenders positioned correctly', () => {
      const defenders = DEFAULT_FORMATION.positions.filter(p => 
        p.role.includes('Back') || p.role.includes('Centre Back')
      );
      expect(defenders).toHaveLength(4);
      
      // All defenders should be in the defensive third
      defenders.forEach(defender => {
        expect(defender.y).toBeGreaterThan(60);
        expect(defender.y).toBeLessThan(85);
      });
    });

    it('should have midfielders positioned correctly', () => {
      const midfielders = DEFAULT_FORMATION.positions.filter(p => 
        p.role.includes('Midfielder')
      );
      expect(midfielders).toHaveLength(4);
      
      // All midfielders should be in the middle third
      midfielders.forEach(midfielder => {
        expect(midfielder.y).toBeGreaterThan(30);
        expect(midfielder.y).toBeLessThan(70);
      });
    });

    it('should have forwards positioned correctly', () => {
      const forwards = DEFAULT_FORMATION.positions.filter(p => 
        p.role.includes('Striker')
      );
      expect(forwards).toHaveLength(2);
      
      // All forwards should be in the attacking third
      forwards.forEach(forward => {
        expect(forward.y).toBeLessThan(40);
      });
    });

    it('should have all positions within valid coordinate ranges', () => {
      DEFAULT_FORMATION.positions.forEach(position => {
        expect(position.x).toBeGreaterThanOrEqual(0);
        expect(position.x).toBeLessThanOrEqual(100);
        expect(position.y).toBeGreaterThanOrEqual(0);
        expect(position.y).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('FORMATIONS Configuration', () => {
    it('should contain the default 4-4-2 formation', () => {
      expect(FORMATIONS['4-4-2']).toBeDefined();
      expect(FORMATIONS['4-4-2']).toEqual(DEFAULT_FORMATION);
    });

    it('should have valid formations in the configuration', () => {
      Object.values(FORMATIONS).forEach(formation => {
        expect(validateFormation(formation)).toBe(true);
      });
    });
  });
});