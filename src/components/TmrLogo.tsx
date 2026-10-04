import React from 'react';

interface TmrLogoProps {
  className?: string;
  dotColor?: string;
  textColor?: string;
}

export const TmrLogo: React.FC<TmrLogoProps> = ({
  className = 'h-8',
  dotColor = '#D12C26',
  textColor = '#FFFFFF',
}) => {
  return (
    <svg
      viewBox="0 0 310 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* 
        EXACT 1-TO-1 VECTOR RECONSTRUCTION FROM USER'S LOGO IMAGE (Turn 7):
        - 't' with beveled ascender on the left rising above horizontal crossbar
        - Solid horizontal top crossbar stretching above 'm'
        - Clean horizontal negative space between crossbar and 'm'
        - Vertical negative space inside 't' connecting to base curve
        - 'm' with two arched cutouts and three vertical stems to baseline
        - 'r' curved arm on the right
        - Pure crimson red circle under the 'r' arm at the baseline
      */}

      {/* 1. 'T' STEM & TOP HORIZONTAL CROSSBAR */}
      <path
        d="M 24 64 
           L 46 42 
           L 76 42 
           L 76 66 
           L 264 66 
           L 264 96 
           L 76 96 
           L 76 156 
           C 76 166, 80 170, 92 170 
           L 96 170 
           L 96 196 
           L 86 196 
           C 52 196, 24 182, 24 148 
           Z"
        fill={textColor}
      />

      {/* 2. 'M' & 'R' LETTERFORM (Outer contour + inner cutouts) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 96 122 
           L 110 110 
           L 220 110 
           C 246 110, 264 122, 264 146 
           L 264 148 
           L 238 148 
           C 238 138, 230 134, 218 134 
           L 204 134 
           L 204 196 
           L 178 196 
           L 178 148 
           C 178 138, 172 134, 160 134 
           C 148 134, 142 138, 142 148 
           L 142 196 
           L 118 196 
           L 118 144 
           L 96 144 
           Z
           
           /* Inner Arch 1 */
           M 142 152 
           C 142 144, 147 138, 155 138 
           C 163 138, 168 144, 168 152 
           L 168 196 
           L 142 196 
           Z
           
           /* Inner Arch 2 */
           M 178 152 
           C 178 144, 183 138, 191 138 
           C 199 138, 204 144, 204 152 
           L 204 196 
           L 178 196 
           Z"
        fill={textColor}
      />

      {/* 3. SOLID RED CIRCLE (Nestled under 'r' arm at the baseline) */}
      <circle cx="258" cy="182" r="12" fill={dotColor} />
    </svg>
  );
};
