'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Position } from '@/types/formations';

interface PositionTooltipProps {
  position: Position;
  isVisible: boolean;
  targetRef: React.RefObject<HTMLDivElement | null>;
  onHide: () => void;
}

export const PositionTooltip: React.FC<PositionTooltipProps> = ({
  position,
  isVisible,
  targetRef,
  onHide
}) => {
  const [calculatedPosition, setCalculatedPosition] = useState({
    top: 0,
    left: 0,
    placement: 'top' as 'top' | 'bottom' | 'left' | 'right'
  });
  
  const tooltipRef = useRef<HTMLDivElement>(null);
  const isHoveringTooltip = useRef(false);

  // Calculate optimal tooltip position
  const calculatePosition = useCallback(() => {
    if (!targetRef.current || !tooltipRef.current) return;

    const targetRect = targetRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const margin = 10; // Margin from viewport edges
    const arrowSize = 8; // Size of the tooltip arrow
    
    let top = 0;
    let left = 0;
    let placement: 'top' | 'bottom' | 'left' | 'right' = 'top';
    
    // Try to position above first
    if (targetRect.top > tooltipRect.height + margin + arrowSize) {
      placement = 'top';
      top = targetRect.top - tooltipRect.height - arrowSize;
      left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
    }
    // Try to position below
    else if (viewportHeight - targetRect.bottom > tooltipRect.height + margin + arrowSize) {
      placement = 'bottom';
      top = targetRect.bottom + arrowSize;
      left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
    }
    // Try to position to the left
    else if (targetRect.left > tooltipRect.width + margin + arrowSize) {
      placement = 'left';
      top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
      left = targetRect.left - tooltipRect.width - arrowSize;
    }
    // Position to the right as fallback
    else {
      placement = 'right';
      top = targetRect.top + (targetRect.height / 2) - (tooltipRect.height / 2);
      left = targetRect.right + arrowSize;
    }
    
    // Adjust horizontal position if tooltip goes off screen
    if (left < margin) {
      left = margin;
    } else if (left + tooltipRect.width > viewportWidth - margin) {
      left = viewportWidth - tooltipRect.width - margin;
    }
    
    // Adjust vertical position if tooltip goes off screen
    if (top < margin) {
      top = margin;
    } else if (top + tooltipRect.height > viewportHeight - margin) {
      top = viewportHeight - tooltipRect.height - margin;
    }
    
    setCalculatedPosition({ top, left, placement });
  }, [targetRef]);

  // Handle mouse enter on tooltip
  const handleTooltipMouseEnter = useCallback(() => {
    isHoveringTooltip.current = true;
  }, []);

  // Handle mouse leave on tooltip
  const handleTooltipMouseLeave = useCallback(() => {
    isHoveringTooltip.current = false;
    // Small delay to allow moving mouse to target element
    setTimeout(() => {
      if (!isHoveringTooltip.current && !targetRef.current?.matches(':hover')) {
        onHide();
      }
    }, 100);
  }, [onHide, targetRef]);

  // Handle escape key
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      onHide();
    }
  }, [onHide]);

  // Set up event listeners
  useEffect(() => {
    if (!isVisible) return;

    // Calculate position when tooltip becomes visible
    calculatePosition();
    
    // Handle window resize
    const handleResize = () => calculatePosition();
    window.addEventListener('resize', handleResize);
    
    // Handle scroll
    const handleScroll = () => calculatePosition();
    window.addEventListener('scroll', handleScroll, true);
    
    // Handle keyboard events
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll, true);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, calculatePosition, handleKeyDown]);

  // Don't render if not visible or no description
  if (!isVisible || !position.description) {
    return null;
  }

  // Arrow positioning based on placement
  const getArrowStyles = () => {
    const arrowSize = 8; // Size of the tooltip arrow
    
    switch (calculatedPosition.placement) {
      case 'top':
        return {
          bottom: -arrowSize,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderTop: `${arrowSize}px solid #1a1a1a`
        };
      case 'bottom':
        return {
          top: -arrowSize,
          left: '50%',
          transform: 'translateX(-50%)',
          borderLeft: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid #1a1a1a`
        };
      case 'left':
        return {
          right: -arrowSize,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid transparent`,
          borderLeft: `${arrowSize}px solid #1a1a1a`
        };
      case 'right':
        return {
          left: -arrowSize,
          top: '50%',
          transform: 'translateY(-50%)',
          borderTop: `${arrowSize}px solid transparent`,
          borderBottom: `${arrowSize}px solid transparent`,
          borderRight: `${arrowSize}px solid #1a1a1a`
        };
      default:
        return {};
    }
  };

  return (
    <div
      ref={tooltipRef}
      className="fixed z-50 pointer-events-none"
      style={{
        top: calculatedPosition.top,
        left: calculatedPosition.left,
        pointerEvents: isVisible ? 'auto' : 'none'
      }}
      onMouseEnter={handleTooltipMouseEnter}
      onMouseLeave={handleTooltipMouseLeave}
      role="tooltip"
      aria-live="polite"
      aria-describedby={`position-${position.id}-description`}
    >
      {/* Tooltip content */}
      <div className="relative bg-[#1a1a1a] text-white rounded-lg shadow-2xl border border-[#F37021]/30 backdrop-blur-sm max-w-xs sm:max-w-sm">
        {/* Arrow */}
        <div
          className="absolute w-0 h-0"
          style={getArrowStyles()}
        />
        
        {/* Content */}
        <div className="p-3 sm:p-4">
          <h3 className="font-bold text-sm sm:text-base text-[#F37021] mb-2">
            {position.role}
          </h3>
          <p 
            id={`position-${position.id}-description`}
            className="text-xs sm:text-sm text-gray-200 leading-relaxed"
          >
            {position.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PositionTooltip;