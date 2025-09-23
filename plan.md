# Club Website Development Page Implementation Plan

## Overview
Create a comprehensive "Club Website Development" page for AfroBall Connect that showcases their microsite service for clubs, following the same visual style as the existing landing page.

## Page Structure

### 1. Navigation Updates
- **File**: `src/components/mobile-header.tsx`
- **Changes**: Add "Club Websites" link to both desktop and mobile navigation menus
- **Location**: After "Features" and before "Prices" in navigation

### 2. New Route Creation
- **File**: `src/app/club-websites/page.tsx`
- **Purpose**: Main page for club website development service
- **Structure**: Complete page with hero, features, revenue model, and benefits sections

### 3. Page Components

#### Hero Section
- **Headline**: "Club Website Development"
- **Subheading**: "Transformative microsites for your club's digital presence"
- **Visual**: Mobile-optimized website mockup or hero image
- **CTA**: "Get Started" button

#### Features Grid Section
- **Layout**: Responsive grid (2-4 columns depending on screen size)
- **Features**:
  1. Match Previews & Highlights 🎥
  2. Merchandise & Ticketing 🛒
  3. Fan-Driven Content 📣
  4. Fixtures & Results 📅
  5. Player & Squad Profiles 👕
  6. Team Anthem Audio 🎶
  7. Sponsor Showcases 📈
  8. Social Media Integration 🔗

#### Revenue Model Section
- **Layout**: Two-column layout with visual elements
- **Content**:
  - 50% merchandise profits to clubs
  - 80% ticketing revenue after platform fees
  - 70% UGC content sponsorships shared
  - Visual representation of revenue sharing

#### Strategic Benefits Section
- **Layout**: Three-column grid with icons
- **Benefits**:
  1. Deepened Fan Loyalty
  2. New Revenue Streams
  3. Club Autonomy

#### Call-to-Action Section
- **Content**: Contact information and inquiry form
- **CTA**: "Contact Our Team" button

## Design Specifications

### Color Scheme
- Background: #363636 (Dark Charcoal)
- Text: #F2EDE4 (Cream/Off-White)
- Accent: #F37021 (Vibrant Orange)
- Borders: #4A4A4A (Dark Grey)

### Typography
- Headings: Montserrat font
- Body: Inter font
- Font sizes: Responsive scaling from mobile to desktop

### Layout Patterns
- Container-based layout with max-width constraints
- Consistent padding and spacing
- Alternating section backgrounds (dark/light)
- Responsive grid layouts
- Smooth hover effects and transitions

### Component Structure
- Use existing Tailwind CSS classes
- Maintain consistency with existing page components
- Responsive design for all screen sizes
- Accessible semantic HTML structure

## Implementation Steps

1. Update navigation header to include "Club Websites" link
2. Create new route file at `src/app/club-websites/page.tsx`
3. Implement hero section with compelling content
4. Create features grid with 8 key microsite features
5. Build revenue model section with clear breakdown
6. Develop strategic benefits section
7. Add call-to-action section
8. Ensure responsive design and accessibility
9. Test all functionality and navigation

## Files to Modify

### New Files
- `src/app/club-websites/page.tsx` - Main page component

### Modified Files
- `src/components/mobile-header.tsx` - Add navigation link
- `src/components/layout-header-wrapper.tsx` - May need updates for desktop nav

## Technical Considerations

- Use Next.js 13+ app router structure
- Maintain TypeScript typing
- Follow existing component patterns
- Ensure proper image optimization
- Implement smooth scrolling navigation
- Maintain SEO-friendly structure
- Use consistent styling approach with existing pages