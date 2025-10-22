'use client';

import React from 'react';
import { Partner, Position } from '@/types/formations';

interface PartnerInformationProps {
  position: Position | null;
  partner: Partner | null;
}

export const PartnerInformation: React.FC<PartnerInformationProps> = ({ position, partner }) => {
  if (!position) {
    return (
      <div className="bg-[#363636]/10 rounded-lg p-6 flex-grow">
        <div className="text-center text-[#4A4A4A]">
          <div className="text-4xl mb-4">⚽</div>
          <p className="text-lg font-semibold mb-2">Select a Position</p>
          <p className="text-sm">
            Click on any position in the formation to view details about the partner role or current partner.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#363636]/10 rounded-lg p-6 flex-grow">
      {/* Partner Information or Opportunity */}
      {partner ? (
        <div className="space-y-4">
          <div className="border-t border-[#363636]/20 pt-4">
            <h4 className="font-semibold text-[#363636] mb-3">Founder</h4>
            
            {/* Partner Logo */}
            {partner.logo && (
              <div className="mb-4">
                <img 
                  src={partner.logo} 
                  alt={`${partner.name} logo`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            )}
            
            {/* Partner Name */}
            <h5 className="text-lg font-bold text-[#F37021] mb-2">{partner.name}</h5>
            
            {/* Partner Description */}
            {partner.description && (
              <p className="text-sm text-[#4A4A4A] mb-4 leading-relaxed">
                {partner.description}
              </p>
            )}
            
            {/* Partner Website */}
            {partner.website && (
              <a 
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-[#F37021] hover:text-[#F37021]/80 text-sm font-medium"
              >
                Visit Partner Website
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="border-t border-[#363636]/20 pt-4">
            <h4 className="font-semibold text-[#363636] mb-3">Partnership Opportunity</h4>
            <p className="text-sm text-[#4A4A4A] mb-4 leading-relaxed">
              This position is currently available for a strategic partner who can help us deliver the best African football experience.
            </p>
            <a
              href="mailto:partnerships@afroballconnect.com?subject=Partnership Inquiry"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-[#F37021] text-[#F2EDE4] hover:bg-[#F37021]/90 h-9 px-4 py-2"
            >
              Become Our Partner
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartnerInformation;