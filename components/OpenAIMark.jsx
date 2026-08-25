export default function OpenAIMark({ className, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3.2a4.25 4.25 0 0 1 4.12 3.2 4.25 4.25 0 0 1 2.77 6.13 4.25 4.25 0 0 1-1.35 6.58 4.25 4.25 0 0 1-6.16.83 4.25 4.25 0 0 1-6.2-2.93 4.25 4.25 0 0 1-2.08-6.36 4.25 4.25 0 0 1 2.76-6.12A4.25 4.25 0 0 1 12 3.2Z" />
      <path d="M8.1 7.65 12 5.4l3.9 2.25v4.5L12 14.4l-3.9-2.25v-4.5Z" />
      <path d="m8.1 12.15 3.9 2.25v4.5M15.9 12.15 12 9.9 8.1 12.15M12 5.4v4.5" />
    </svg>
  );
}
