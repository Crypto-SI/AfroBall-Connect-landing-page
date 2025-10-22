# 4-4-2 Formation Tooltip Implementation Plan

## Overview
Implement hover tooltips for each position in the 4-4-2 formation on the partners page. The tooltips will display position descriptions when users hover over position cards, while maintaining the existing click functionality to open partner websites.

## Architecture

### Components to Create/Modify

1. **PositionTooltip Component** (New)
   - Reusable tooltip component for position descriptions
   - Handles positioning, animations, and responsive behavior
   - Includes accessibility features

2. **Position Type** (Update)
   - Add `description` field to include position-specific information
   - Maintain backward compatibility

3. **DEFAULT_FORMATION** (Enhance)
   - Add detailed descriptions for each position
   - Include responsibilities and partnership benefits

4. **PartnerCard Component** (Modify)
   - Integrate tooltip on hover
   - Maintain existing click functionality
   - Add debouncing to prevent flickering

5. **PitchLayout Component** (Minor Update)
   - Pass tooltip-related props to PartnerCard
   - Ensure proper z-index layering

## Technical Implementation Details

### 1. Position Type Enhancement

```typescript
export interface Position {
  id: string;
  x: number; // Percentage from left (0-100)
  y: number; // Percentage from top (0-100)
  role: string; // e.g., "Goalkeeper", "Defender", "Midfielder", "Forward"
  description?: string; // Position description for tooltip
}
```

### 2. PositionTooltip Component Design

- **Positioning**: Smart positioning to avoid screen edges
- **Responsive**: Adapts to different screen sizes
- **Animation**: Smooth fade-in/fade-out transitions
- **Accessibility**: Screen reader support and keyboard navigation
- **Z-index**: Proper layering above other elements

### 3. DEFAULT_FORMATION Enhancements

Each position will include a detailed description:
- **Goalkeeper**: Security and reliability focus
- **Defenders**: Foundation and stability partnerships
- **Midfielders**: Connection and engagement partnerships
- **Forwards**: Growth and expansion partnerships

### 4. Hover Behavior Implementation

- **Debouncing**: 300ms delay before showing tooltip
- **Persistence**: Tooltip stays visible when hovering over tooltip content
- **Smooth Transitions**: CSS transitions for show/hide
- **Touch Support**: Consider touch devices for hover behavior

### 5. Accessibility Features

- **Screen Reader Support**: Tooltip content available to screen readers
- **Keyboard Navigation**: Tooltip can be triggered with keyboard focus
- **ARIA Attributes**: Proper ARIA labels and descriptions
- **Focus Management**: Proper focus handling when tooltip is shown

## Implementation Steps

1. Update the `Position` type to include description field
2. Enhance `DEFAULT_FORMATION` with position descriptions
3. Create the `PositionTooltip` component with responsive design
4. Update `PartnerCard` to integrate tooltip on hover
5. Add debouncing and smooth transitions
6. Implement accessibility features
7. Test functionality across devices and screen sizes
8. Add keyboard navigation support
9. Ensure proper z-index layering
10. Performance optimization and final testing

## Design Considerations

### Visual Design
- Consistent with existing design system
- Orange accent color (#F37021) for tooltip elements
- Semi-transparent background with backdrop blur
- Rounded corners matching existing components

### Responsive Behavior
- Tooltip adjusts position based on available screen space
- Font sizes scale appropriately on different devices
- Touch-friendly interaction on mobile devices

### Performance
- Minimal impact on page load time
- Efficient hover state management
- Smooth animations without jank

## Testing Strategy

1. **Unit Tests**: Test tooltip component behavior
2. **Integration Tests**: Test tooltip integration with PartnerCard
3. **Accessibility Tests**: Verify screen reader compatibility
4. **Responsive Tests**: Test on various screen sizes
5. **Performance Tests**: Ensure smooth animations
6. **User Interaction Tests**: Verify hover and click behaviors

## Potential Challenges & Solutions

1. **Tooltip Positioning Near Screen Edges**
   - Solution: Implement smart positioning logic to flip tooltip direction

2. **Hover State Management on Touch Devices**
   - Solution: Add touch-specific behavior or disable tooltips on touch

3. **Z-index Conflicts with Other Elements**
   - Solution: Use high z-index values and proper stacking context

4. **Performance with Multiple Tooltips**
   - Solution: Efficient event handling and debouncing

## Success Criteria

- [ ] Tooltips appear smoothly on hover over position cards
- [ ] Position descriptions are informative and relevant
- [ ] Click functionality for partner websites remains intact
- [ ] Tooltips are responsive and work on all screen sizes
- [ ] Accessibility features work correctly with screen readers
- [ ] No performance impact on page load or interactions
- [ ] Keyboard navigation works properly
- [ ] Tooltips position correctly even near screen edges