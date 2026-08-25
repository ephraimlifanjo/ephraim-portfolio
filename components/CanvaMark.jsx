export default function CanvaMark({ className, ...props }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="canvaGradient" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00C4CC" />
          <stop offset="1" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>
      <circle cx="12" cy="12" r="10" fill="url(#canvaGradient)" />
      <path d="M15.9 8.25c-.82-.74-1.86-1.12-3.08-1.12-2.67 0-4.72 2.05-4.72 4.87 0 2.84 2 4.87 4.72 4.87 1.25 0 2.36-.42 3.17-1.2l-1.12-1.48c-.52.46-1.15.7-1.88.7-1.55 0-2.63-1.17-2.63-2.89 0-1.7 1.08-2.87 2.63-2.87.7 0 1.31.22 1.82.65l1.09-1.53Z" fill="white" />
    </svg>
  );
}
