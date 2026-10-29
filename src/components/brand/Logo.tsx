export default function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="45"
      viewBox="0 0 64 80"
      role="img"
      aria-label="Logo G kartu ID"
    >
      <rect x="4" y="2" width="56" height="76" rx="14" fill="#3C2A21" />
      <rect x="24" y="10" width="16" height="5" rx="2.5" fill="#E3D5C8" />
      <path
        d="M42.6 29.4A15 15 0 1 0 47 40H34"
        fill="none"
        stroke="#D5A18C"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
