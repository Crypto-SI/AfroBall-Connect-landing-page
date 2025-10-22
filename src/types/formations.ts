/**
 * TypeScript interfaces for formation data structures
 */

export interface Position {
  id: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  role: string; // e.g., "Goalkeeper", "Defender", "Midfielder", "Forward"
  description?: string; // Position description for tooltip
}

export interface Formation {
  name: string; // e.g., "4-4-2", "4-3-3"
  positions: Position[];
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  position: string; // Maps to Position.id
}

/**
 * Default 4-4-2 formation configuration with percentage-based positioning
 * Coordinates are based on a vertical football pitch viewed from above
 * Y-axis: 0 = top of pitch (opponent's goal), 100 = bottom (own goal)
 * X-axis: 0 = left side, 100 = right side
 */
export const DEFAULT_FORMATION: Formation = {
  name: "4-4-2",
  positions: [
    // Goalkeeper (at bottom)
    {
      id: "gk",
      x: 50,
      y: 90,
      role: "Goalkeeper",
      description: "Security & Reliability Partner: Partners providing foundational security, reliability, and trust infrastructure for the platform. This includes payment processors, security providers, and compliance partners."
    },
    
    // Defenders (4) - in front of goalkeeper
    {
      id: "lb",
      x: 25,
      y: 75,
      role: "Left Back",
      description: "Content Distribution Partner: Ensures reliable delivery of African football content to global audiences through streaming infrastructure and content delivery networks."
    },
    {
      id: "cb1",
      x: 40,
      y: 75,
      role: "Centre Back",
      description: "Technology Infrastructure Partner: Provides robust cloud infrastructure, hosting services, and technical foundation for the streaming platform."
    },
    {
      id: "cb2",
      x: 60,
      y: 75,
      role: "Centre Back",
      description: "Data Analytics Partner: Delivers insights into viewer behavior, content performance, and audience engagement through advanced analytics solutions."
    },
    {
      id: "rb",
      x: 75,
      y: 75,
      role: "Right Back",
      description: "Customer Support Partner: Ensures excellent user experience through customer service, technical support, and user engagement solutions."
    },
    
    // Midfielders (4) - in the middle
    {
      id: "lm",
      x: 25,
      y: 50,
      role: "Left Midfielder",
      description: "Social Media Partner: Connects us with football fans through social platforms, community management, and digital engagement strategies."
    },
    {
      id: "cm1",
      x: 40,
      y: 50,
      role: "Central Midfielder",
      description: "Marketing Partner: Drives brand awareness, user acquisition, and promotional campaigns to reach African football fans worldwide."
    },
    {
      id: "cm2",
      x: 60,
      y: 50,
      role: "Central Midfielder",
      description: "Community Engagement Partner: Builds and nurtures the fan community through events, forums, and interactive experiences."
    },
    {
      id: "rm",
      x: 75,
      y: 50,
      role: "Right Midfielder",
      description: "Content Creation Partner: Produces exclusive content, documentaries, and programming about African football and culture."
    },
    
    // Forwards (2) - at the top
    {
      id: "st1",
      x: 40,
      y: 20,
      role: "Striker",
      description: "Growth & Expansion Partner: Drives market expansion, user growth, and business development into new territories and demographics."
    },
    {
      id: "st2",
      x: 60,
      y: 20,
      role: "Striker",
      description: "Innovation & Technology Partner: Brings cutting-edge technology, AI features, and innovative solutions to enhance the football viewing experience."
    }
  ]
};

/**
 * Formation configurations object for easy access to different formations
 */
export const FORMATIONS: Record<string, Formation> = {
  "4-4-2": DEFAULT_FORMATION
};

/**
 * Validation functions for formation data structures
 */
export const validatePosition = (position: Position): boolean => {
  return (
    typeof position.id === 'string' &&
    position.id.length > 0 &&
    typeof position.x === 'number' &&
    position.x >= 0 &&
    position.x <= 100 &&
    typeof position.y === 'number' &&
    position.y >= 0 &&
    position.y <= 100 &&
    typeof position.role === 'string' &&
    position.role.length > 0
  );
};

export const validateFormation = (formation: Formation): boolean => {
  return (
    typeof formation.name === 'string' &&
    formation.name.length > 0 &&
    Array.isArray(formation.positions) &&
    formation.positions.length === 11 &&
    formation.positions.every(validatePosition) &&
    // Check for unique position IDs
    new Set(formation.positions.map(p => p.id)).size === formation.positions.length
  );
};

export const validatePartner = (partner: Partner): boolean => {
  return (
    typeof partner.id === 'string' &&
    partner.id.length > 0 &&
    typeof partner.name === 'string' &&
    partner.name.length > 0 &&
    typeof partner.position === 'string' &&
    partner.position.length > 0 &&
    (partner.logo === undefined || typeof partner.logo === 'string') &&
    (partner.description === undefined || typeof partner.description === 'string') &&
    (partner.website === undefined || typeof partner.website === 'string')
  );
};