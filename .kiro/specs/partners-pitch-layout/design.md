# Design Document

## Overview

The partners page will feature a visually striking football pitch layout that displays 11 partner positions arranged in a traditional football formation. The design will leverage the existing AfroBall Connect brand colors and design language while creating an immersive, interactive experience that resembles fantasy football or FIFA Ultimate Team interfaces.

## Architecture

### Layout Structure
- **Main Container**: Full-width responsive container following existing site patterns
- **Pitch Background**: SVG-based football field with realistic markings and proportions
- **Partner Cards**: Individual card components positioned absolutely over the pitch
- **Formation System**: Flexible positioning system supporting different formations (4-4-2, 4-3-3, etc.)

### Visual Hierarchy
1. **Primary**: Football pitch background with field markings
2. **Secondary**: Partner card positions with hover states
3. **Tertiary**: Navigation and page header elements

## Components and Interfaces

### PitchLayout Component
```typescript
interface PitchLayoutProps {
  formation?: Formation;
  partners?: Partner[];
  className?: string;
}

interface Formation {
  name: string; // e.g., "4-4-2", "4-3-3"
  positions: Position[];
}

interface Position {
  id: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  role: string; // e.g., "Goalkeeper", "Defender", "Midfielder", "Forward"
}

interface Partner {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  website?: string;
  position: string; // Maps to Position.id
}
```

### PartnerCard Component
```typescript
interface PartnerCardProps {
  partner?: Partner;
  position: Position;
  isEmpty?: boolean;
  onHover?: (partner: Partner | null) => void;
}
```

### PitchBackground Component
- SVG-based football field with proper proportions (16:9 aspect ratio)
- Includes center circle, penalty areas, goal areas, and corner arcs
- Responsive design that maintains aspect ratio across devices

## Data Models

### Formation Configurations
```typescript
const FORMATIONS = {
  "4-4-2": {
    name: "4-4-2",
    positions: [
      { id: "gk", x: 50, y: 90, role: "Goalkeeper" },
      { id: "lb", x: 20, y: 70, role: "Left Back" },
      { id: "cb1", x: 40, y: 75, role: "Centre Back" },
      { id: "cb2", x: 60, y: 75, role: "Centre Back" },
      { id: "rb", x: 80, y: 70, role: "Right Back" },
      { id: "lm", x: 20, y: 45, role: "Left Midfielder" },
      { id: "cm1", x: 40, y: 50, role: "Central Midfielder" },
      { id: "cm2", x: 60, y: 50, role: "Central Midfielder" },
      { id: "rm", x: 80, y: 45, role: "Right Midfielder" },
      { id: "st1", x: 40, y: 20, role: "Striker" },
      { id: "st2", x: 60, y: 20, role: "Striker" }
    ]
  }
};
```

### Color Scheme Integration
- **Primary Orange**: `#F37021` for active states and highlights
- **Dark Charcoal**: `#363636` for card backgrounds and text
- **Cream**: `#F2EDE4` for card text and backgrounds
- **Pitch Green**: `#2D5A27` for realistic field color
- **Field Lines**: `#FFFFFF` for pitch markings

## Visual Design Specifications

### Football Pitch
- **Dimensions**: Responsive container maintaining 16:9 aspect ratio
- **Background**: Gradient green field (`#2D5A27` to `#245A1F`)
- **Markings**: White lines with 2px stroke width
- **Elements**: Center circle, penalty boxes, goal areas, corner arcs

### Partner Cards
- **Size**: 80px × 100px on desktop, 60px × 75px on mobile
- **Design**: Card-style with rounded corners (8px border radius)
- **Empty State**: Dashed border with "+" icon in center
- **Filled State**: Partner logo/name with subtle shadow
- **Hover State**: Scale transform (1.05x) with orange border highlight

### Typography
- **Card Names**: Font size 12px, weight 600, color `#F2EDE4`
- **Position Labels**: Font size 10px, weight 400, color `#999999`
- **Formation Title**: Font size 24px, weight 700, color `#F37021`

### Responsive Breakpoints
- **Desktop (1024px+)**: Full pitch layout with large cards
- **Tablet (768px-1023px)**: Scaled pitch with medium cards
- **Mobile (320px-767px)**: Compact pitch with small cards

## Interactions and Animations

### Hover Effects
- **Card Hover**: 
  - Scale: `transform: scale(1.05)`
  - Border: Orange highlight (`#F37021`)
  - Shadow: Elevated shadow effect
  - Duration: 200ms ease-in-out

### Loading States
- **Skeleton Cards**: Animated placeholder cards during data loading
- **Fade In**: Cards appear with staggered fade-in animation (100ms delay between cards)

### Click Interactions
- **Future Enhancement**: Click to view partner details modal
- **Empty Cards**: Click to show "Coming Soon" message

## Error Handling

### Missing Partner Data
- Display placeholder card with "Coming Soon" text
- Maintain formation structure even with missing partners
- Graceful degradation for missing logos or descriptions

### Image Loading Failures
- Fallback to partner name text display
- Default placeholder icon for failed logo loads
- Retry mechanism for network failures

### Responsive Failures
- Minimum viable layout for very small screens
- Horizontal scroll fallback if needed
- Maintain readability at all breakpoints

## Testing Strategy

### Visual Regression Testing
- Screenshot comparisons across different formations
- Cross-browser compatibility testing
- Responsive design validation at key breakpoints

### Interaction Testing
- Hover state functionality across all cards
- Touch interaction testing on mobile devices
- Keyboard navigation support for accessibility

### Performance Testing
- SVG rendering performance on various devices
- Animation smoothness validation
- Image loading optimization testing

### Accessibility Testing
- Screen reader compatibility for card content
- Keyboard navigation through partner positions
- Color contrast validation for all text elements
- Alt text for partner logos and pitch elements

## Implementation Considerations

### SVG Optimization
- Inline SVG for pitch background to avoid additional HTTP requests
- Optimized path data for field markings
- Scalable vector graphics for crisp rendering at all sizes

### Performance Optimization
- Lazy loading for partner images
- CSS transforms for animations (GPU acceleration)
- Minimal DOM manipulation during interactions

### Future Extensibility
- Modular formation system for easy addition of new formations
- Partner data structure supports additional fields
- Component architecture allows for easy feature additions

### Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Graceful degradation for older browsers
- Progressive enhancement approach