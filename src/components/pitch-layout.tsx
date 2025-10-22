'use client';

import React from 'react';
import { Formation, Partner, DEFAULT_FORMATION } from '@/types/formations';
import { PitchBackground } from './pitch-background';
import { PartnerCard } from './partner-card';

interface PitchLayoutProps {
  formation?: Formation;
  partners?: Partner[];
  className?: string;
  onPartnerHover?: (partner: Partner | null) => void;
  onPartnerSelect?: (partner: Partner | null, position: string) => void;
}

export const PitchLayout: React.FC<PitchLayoutProps> = ({
  formation = DEFAULT_FORMATION,
  partners = [],
  className = '',
  onPartnerHover,
  onPartnerSelect
}) => {
  // Ensure formation is never null
  const safeFormation = formation || DEFAULT_FORMATION;
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [focusedPosition, setFocusedPosition] = React.useState<string | null>(null);
  const [announcementText, setAnnouncementText] = React.useState<string>('');
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Create a map of partners by their position for quick lookup
  const partnersByPosition = React.useMemo(() => {
    const map = new Map<string, Partner>();
    if (partners) {
      partners.forEach(partner => {
        map.set(partner.position, partner);
      });
    }
    return map;
  }, [partners]);

  // Trigger the staggered animation on mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      setAnnouncementText(`Football pitch formation ${safeFormation?.name || 'Unknown'} loaded with ${safeFormation?.positions?.length || 0} positions. Use Tab to navigate between partner positions.`);
    }, 100);
    return () => clearTimeout(timer);
  }, [safeFormation?.name, safeFormation?.positions?.length]);

  // Handle keyboard navigation between positions
  const handleKeyDown = React.useCallback((event: React.KeyboardEvent) => {
    if (!safeFormation || !safeFormation.positions) return;
    
    const positions = safeFormation.positions;
    const currentIndex = focusedPosition
      ? positions.findIndex(p => p.id === focusedPosition)
      : -1;

    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        const nextIndex = currentIndex < positions.length - 1 ? currentIndex + 1 : 0;
        const nextPosition = positions[nextIndex];
        setFocusedPosition(nextPosition.id);
        // Focus the actual card element
        const nextCard = containerRef.current?.querySelector(`[data-testid="partner-card-${nextPosition.id}"]`) as HTMLElement;
        nextCard?.focus();
        break;

      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        const prevIndex = currentIndex > 0 ? currentIndex - 1 : positions.length - 1;
        const prevPosition = positions[prevIndex];
        setFocusedPosition(prevPosition.id);
        // Focus the actual card element
        const prevCard = containerRef.current?.querySelector(`[data-testid="partner-card-${prevPosition.id}"]`) as HTMLElement;
        prevCard?.focus();
        break;

      case 'Home':
        event.preventDefault();
        const firstPosition = positions[0];
        setFocusedPosition(firstPosition.id);
        const firstCard = containerRef.current?.querySelector(`[data-testid="partner-card-${firstPosition.id}"]`) as HTMLElement;
        firstCard?.focus();
        break;

      case 'End':
        event.preventDefault();
        const lastPosition = positions[positions.length - 1];
        setFocusedPosition(lastPosition.id);
        const lastCard = containerRef.current?.querySelector(`[data-testid="partner-card-${lastPosition.id}"]`) as HTMLElement;
        lastCard?.focus();
        break;
    }
  }, [safeFormation?.positions, focusedPosition]);

  const handlePartnerFocus = React.useCallback((partner: Partner | null, positionId: string) => {
    setFocusedPosition(positionId);
    onPartnerHover?.(partner);
    
    // Announce the focused partner for screen readers
    if (safeFormation && safeFormation.positions) {
      if (partner) {
        setAnnouncementText(`Focused on ${partner.name} in ${safeFormation.positions.find(p => p.id === positionId)?.role} position.`);
      } else {
        setAnnouncementText(`Focused on empty ${safeFormation.positions.find(p => p.id === positionId)?.role} position.`);
      }
    }
  }, [onPartnerHover, safeFormation?.positions]);

  const handlePartnerBlur = React.useCallback(() => {
    onPartnerHover?.(null);
  }, [onPartnerHover]);

  const handlePartnerClick = React.useCallback((partner: Partner | null, positionId: string) => {
    onPartnerSelect?.(partner, positionId);
    
    if (partner) {
      setAnnouncementText(`Selected ${partner.name}. ${partner.website ? 'Opening partner website.' : 'Partner information displayed.'}`);
    } else {
      setAnnouncementText(`Selected empty position. This position is available for a new partner.`);
    }
  }, [onPartnerSelect]);

  return (
    <div
      className={`relative w-full ${className}`}
      ref={containerRef}
      onKeyDown={handleKeyDown}
      role="application"
      aria-label={`Football pitch formation ${safeFormation?.name || 'Unknown'} with ${safeFormation?.positions?.length || 0} partner positions`}
      aria-describedby="pitch-instructions"
    >
      {/* Instructions for screen readers and keyboard users */}
      <div id="pitch-instructions" className="sr-only">
        Navigate between partner positions using Tab, Arrow keys, Home, or End. 
        Press Enter or Space to select a partner position. 
        Use Escape to return to main navigation.
      </div>

      {/* Live region for announcements */}
      <div 
        aria-live="polite" 
        aria-atomic="true" 
        className="sr-only"
        role="status"
      >
        {announcementText}
      </div>

      {/* Pitch background - serves as the base layer with proper aspect ratio */}
      <PitchBackground className="relative z-0" />
      
      {/* Partner cards positioned absolutely over the pitch */}
      <div 
        className="absolute inset-0 z-10"
        role="grid"
        aria-label="Partner positions on football pitch"
      >
        {safeFormation?.positions?.map((position, index) => {
          const partner = partnersByPosition.get(position.id);
          
          return (
            <div
              key={position.id}
              className={`
                absolute transform -translate-x-1/2 -translate-y-1/2
                transition-all duration-500 ease-out
                ${isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
                }
              `}
              style={{
                left: `${position.x}%`,
                top: `${position.y}%`,
                zIndex: focusedPosition === position.id ? 30 : 10,
                transitionDelay: `${index * 100}ms`
              }}
              role="gridcell"
              aria-label={`Position ${index + 1} of ${safeFormation?.positions?.length || 0}`}
            >
              <PartnerCard
                partner={partner}
                position={position}
                isEmpty={!partner}
                onHover={onPartnerHover}
                onFocus={(p) => handlePartnerFocus(p, position.id)}
                onBlur={handlePartnerBlur}
                onClick={(p) => handlePartnerClick(p, position.id)}
              />
            </div>
          );
        })}
      </div>
      
      {/* Formation name overlay with improved accessibility */}
      {safeFormation?.name && (
        <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
          <div
            className="bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 sm:px-3 sm:py-1"
            role="banner"
            aria-label="Formation information"
          >
            <span className="text-white text-xs sm:text-sm font-semibold">
              {safeFormation.name}
            </span>
          </div>
        </div>
      )}

      {/* Skip link for keyboard users */}
      <a 
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-[#F37021] focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:font-semibold"
      >
        Skip to main content
      </a>
    </div>
  );
};

export default PitchLayout;