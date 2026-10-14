interface IconProps {
  size?: number;
  className?: string;
}

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
});

export const AlbumIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
  </svg>
);

export const SingleIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

export const MicIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="9" y="2" width="6" height="12" rx="3" />
    <path d="M5 10a7 7 0 0 0 14 0M12 19v3M8 22h8" />
  </svg>
);

export const VideoIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M16 10l6-3v10l-6-3z" />
  </svg>
);

export const FolderIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);

export const HandshakeIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M11 17l2-2 4 4 5-5" />
    <path d="M13 15l-3-3 3-3 3 3" />
    <path d="M3 12l3-3 4 4" />
  </svg>
);

export const WaveformIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M3 12h2M8 6v12M12 3v18M16 8v8M20 11v2" />
  </svg>
);

export const PinIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 22s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const UsersIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export const CalendarIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M16 3v4M8 3v4M3 11h18" />
  </svg>
);

export const ClockIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const CrownIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M3 18h18M3 18l2-9 4 4 3-7 3 7 4-4 2 9" />
  </svg>
);

export const ArrowLeftIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

export const ArrowRightIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);


export const SparkleIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
  </svg>
);

export const FilterIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M3 5h18M6 12h12M10 19h4" />
  </svg>
);



export const InstagramIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);

export const YoutubeIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="2" y="5" width="20" height="14" rx="4" />
    <path d="M10 9l5 3-5 3z" fill="currentColor" />
  </svg>
);

export const SpotifyIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <circle cx="12" cy="12" r="9" />
    <path d="M7 10c3-1 7-1 10 1M7.5 13c2.5-1 5.5-1 8 1M8 16c2-0.7 4.5-0.7 6.5 1" />
  </svg>
);

export const TiktokIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <path d="M15 4v9a3.5 3.5 0 1 1-3.5-3.5" />
    <path d="M15 4c0.5 2 2 3.5 4 3.5" />
  </svg>
);

export const MailIcon = ({ size = 20, className = '' }: IconProps) => (
  <svg {...base(size)} className={className}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </svg>
);