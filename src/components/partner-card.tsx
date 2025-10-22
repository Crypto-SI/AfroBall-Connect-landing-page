'use client';

import React, { useState, useRef, useCallback } from 'react';
import { Partner, Position } from '@/types/formations';
import { PositionTooltip } from './position-tooltip';

interface PartnerCardProps {
  partner?: Partner;
  position: Position;
  isEmpty?: boolean;
  onHover?: (partner: Partner | null) => void;
  onFocus?: (partner: Partner | null) => void;
  onBlur?: () => void;
  onClick?: (partner: Partner | null) => void;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({
  partner,
  position,
  isEmpty = !partner,
  onHover,
  onFocus,
  onBlur,
  onClick
}) => {
  const [isClicked, setIsClicked] = React.useState(false);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipTimeout, setTooltipTimeout] = useState<NodeJS.Timeout | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = () => {
    onHover?.(partner || null);
    
    // Clear any existing timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    
    // Set tooltip to show after 300ms delay
    const timeout = setTimeout(() => {
      setShowTooltip(true);
    }, 300);
    
    setTooltipTimeout(timeout);
  };

  const handleMouseLeave = () => {
    onHover?.(null);
    
    // Clear tooltip timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
      setTooltipTimeout(null);
    }
    
    // Hide tooltip immediately
    setShowTooltip(false);
  };

  const handleTouchStart = () => {
    // Handle touch interactions for mobile devices
    onHover?.(partner || null);
  };

  const handleTouchEnd = () => {
    // Clear hover state on touch end for mobile
    setTimeout(() => onHover?.(null), 1000);
  };

  const handleFocus = () => {
    onFocus?.(partner || null);
    
    // Clear any existing timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    
    // Show tooltip immediately on focus for accessibility
    setShowTooltip(true);
  };

  const handleBlur = () => {
    onBlur?.();
    
    // Hide tooltip on blur
    setShowTooltip(false);
    
    // Clear tooltip timeout
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
      setTooltipTimeout(null);
    }
  };

  const handleClick = () => {
    // Set clicked state for animation
    setIsClicked(true);
    setIsAnimating(true);
    
    // Trigger lighting effect
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    
    // Reset clicked state after animation
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
    
    // Call the original onClick handler
    onClick?.(partner || null);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    // Handle Enter and Space key presses for accessibility
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  // Generate comprehensive ARIA label
  const getAriaLabel = (): string => {
    if (isEmpty) {
      return `Empty ${position.role} position at ${position.x}% from left, ${position.y}% from top. Press Enter to learn more about this position.`;
    }
    
    const partnerInfo = partner?.description 
      ? `${partner.name}, ${partner.description}` 
      : partner?.name || 'Unknown partner';
    
    return `${partnerInfo} in ${position.role} position. ${partner?.website ? 'Press Enter to visit partner website.' : 'Press Enter for more information.'}`;
  };

  // Generate descriptive text for screen readers
  const getScreenReaderDescription = (): string => {
    if (isEmpty) {
      return `This is an available ${position.role} position on the football pitch formation. Currently no partner is assigned to this position.`;
    }
    
    return `Partner card for ${partner?.name || 'Unknown partner'} positioned as ${position.role} in the formation.${partner?.description ? ` ${partner.description}` : ''}`;
  };

  // Handle tooltip hide
  const handleTooltipHide = useCallback(() => {
    setShowTooltip(false);
  }, []);

  return (
    <>
      <div
      className={`
        partner-card
        relative
        flex
        flex-col
        items-center
        justify-center
        rounded-lg
        cursor-pointer
        overflow-hidden
        
        /* Responsive sizing - Mobile (320px-767px), Tablet (768px-1023px), Desktop (1024px+) */
        w-[50px] h-[62px]
        sm:w-[60px] sm:h-[75px]
        md:w-[70px] md:h-[87px]
        lg:w-[80px] lg:h-[100px]
        
        /* Base styling with improved contrast */
        ${isEmpty 
          ? 'border-2 border-dashed border-gray-500 bg-gray-50/90 backdrop-blur-sm' 
          : 'border-2 border-solid border-gray-400 bg-white/95 backdrop-blur-sm shadow-md'
        }
        
        /* Smooth hover animations - 200ms ease-in-out */
        transition-all
        duration-200
        ease-in-out
        
        /* Hover effects - scale 1.05x and orange border */
        hover:scale-105
        hover:border-[#F37021]
        hover:shadow-lg
        hover:z-10
        
        /* Enhanced hover shadow for better visual feedback */
        hover:shadow-[0_8px_25px_rgba(243,112,33,0.3)]
        
        /* Touch-friendly interactions for mobile */
        active:scale-95
        active:border-[#F37021]
        
        /* Enhanced focus states for accessibility - improved contrast and visibility */
        focus:outline-none
        focus:ring-4
        focus:ring-[#F37021]
        focus:ring-opacity-75
        focus:border-[#F37021]
        focus:shadow-[0_0_0_2px_rgba(243,112,33,0.5)]
        focus:z-20
        
        /* Ensure smooth animations on all devices */
        transform-gpu
        will-change-transform
        
        /* Click animation and lighting effect */
        ${isClicked ? 'animate-pulse scale-110' : ''}
        ${isAnimating ? 'shadow-[0_0_30px_10px_rgba(243,112,33,0.8)]' : ''}
      `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-label={getAriaLabel()}
      aria-describedby={`${position.id}-description`}
      aria-pressed={false}
      data-testid={`partner-card-${position.id}`}
      ref={cardRef}
    >
      {/* Hidden description for screen readers */}
      <div 
        id={`${position.id}-description`} 
        className="sr-only"
        aria-live="polite"
      >
        {getScreenReaderDescription()}
      </div>
      {isEmpty ? (
        <>
          {/* Plus icon for empty state - responsive sizing with improved contrast */}
          <div 
            className="text-gray-600 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-light mb-1"
            aria-hidden="true"
          >
            +
          </div>
          {/* Position role text - responsive sizing with improved contrast */}
          <div className="text-[10px] sm:text-xs md:text-xs text-gray-700 text-center px-1 leading-tight font-medium">
            {position.role}
          </div>
          {/* Status indicator for screen readers */}
          <div className="sr-only">
            Available position
          </div>
        </>
      ) : (
        <>
          {/* Partner logo only - takes full card space */}
          <div className="w-full h-full flex items-center justify-center p-1">
            {partner?.logo ? (
              <img
                src={partner.logo}
                alt={`${partner.name} company logo`}
                className="max-w-full max-h-full object-contain rounded-full"
                loading="lazy"
              />
            ) : (
              <div
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-[#F37021] rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl"
                aria-label={`${partner?.name} initials`}
              >
                {partner?.name?.charAt(0) || '?'}
              </div>
            )}
          </div>
          
          {/* Additional context for screen readers */}
          <div className="sr-only">
            {partner?.name} in {position.role} position.
            {partner?.website && ' Website available.'}
            Partner position filled. Click for more details.
          </div>
        </>
      )}
      
      {/* FIFA Ultimate Team style gradient overlay */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent via-transparent to-black/10 pointer-events-none" />
      
      {/* Lighting effect overlay when clicked */}
      {isAnimating && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[#F37021]/30 via-transparent to-[#F37021]/20 pointer-events-none animate-ping" />
      )}
    </div>
    
      {/* Position Tooltip */}
      <PositionTooltip
        position={position}
        isVisible={showTooltip}
        targetRef={cardRef}
        onHide={handleTooltipHide}
      />
    </>
  );
};

export default PartnerCard;