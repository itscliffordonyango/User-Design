export function ChapaLogo({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <div className={className}>
      <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Circle background */}
        <circle cx="60" cy="60" r="58" fill="#00A651" />
        
        {/* CP monogram */}
        <text
          x="60"
          y="75"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontSize="48"
          fontWeight="700"
          fill="white"
          textAnchor="middle"
        >
          CP
        </text>
        
        {/* Decorative accent */}
        <circle cx="60" cy="30" r="6" fill="#FFD700" />
      </svg>
    </div>
  );
}
