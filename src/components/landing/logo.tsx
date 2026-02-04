import type { SVGProps } from 'react';

export default function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 450 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* House outline */}
      <path
        d="M35 95V53.5L78.5 15L122 53.5V95"
        stroke="currentColor"
        strokeWidth="10"
        strokeLinejoin="round"
      />
      {/* Yellow bar */}
      <path d="M135 70H225" stroke="hsl(var(--primary))" strokeWidth="12" />

      {/* ELC COMPANY */}
      <text
        x="35"
        y="145"
        fontFamily="Lexend, sans-serif"
        fontSize="48"
        fontWeight="800"
        fill="currentColor"
        letterSpacing="0.05em"
      >
        ELC COMPANY
      </text>

      {/* Separator Line */}
        <rect x="35" y="158" width="380" height="6" fill="currentColor" />

      {/* Subtext */}
      <text
        x="35"
        y="185"
        fontFamily="Lexend, sans-serif"
        fontSize="18"
        fontWeight="600"
        fill="hsl(var(--muted-foreground))"
        letterSpacing="0.02em"
      >
        CONSTRUCTION, DESIGN & EXECUTION
      </text>
    </svg>
  );
}
