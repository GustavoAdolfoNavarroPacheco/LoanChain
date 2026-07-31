export default function Logo({ className = "size-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="42" height="42" rx="12" fill="url(#lc-bg)" />
      <rect x="3.5" y="3.5" width="41" height="41" rx="11.5" stroke="rgb(255 255 255 / 0.18)" />
      <path
        d="M9 24a9 9 0 0 1 9-9h6a1.5 1.5 0 0 1 0 3h-6a6 6 0 0 0 0 12h6a1.5 1.5 0 0 1 0 3h-6a9 9 0 0 1-9-9Z"
        fill="#d1fae5"
      />
      <path
        d="M39 24a9 9 0 0 1-9 9h-6a1.5 1.5 0 0 1 0-3h6a6 6 0 0 0 0-12h-6a1.5 1.5 0 0 1 0-3h6a9 9 0 0 1 9 9Z"
        fill="#fcd34d"
      />
      <defs>
        <linearGradient id="lc-bg" x1="3" y1="3" x2="45" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#10b981" />
          <stop offset="1" stopColor="#047857" />
        </linearGradient>
      </defs>
    </svg>
  );
}
