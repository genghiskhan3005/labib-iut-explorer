type ArtProps = { className?: string };

const stroke = "oklch(0.53 0.145 250)";
const ink = "oklch(0.22 0.012 265)";

/** Islamic geometry — Al-Mirath */
export function MirathArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 240 160" className={className} role="presentation" aria-hidden="true">
      <g fill="none" stroke={ink} strokeOpacity="0.16" strokeWidth="1">
        {[0, 1, 2, 3, 4].map((i) => (
          <g key={i} transform={`translate(${40 + i * 40} 80)`}>
            <circle r="30" />
            <rect x="-21" y="-21" width="42" height="42" transform="rotate(45)" />
            <rect x="-21" y="-21" width="42" height="42" />
          </g>
        ))}
      </g>
      <g fill="none" stroke={stroke} strokeWidth="1.2">
        <g transform="translate(120 80)">
          <circle r="30" strokeOpacity="0.9" />
          <rect x="-21" y="-21" width="42" height="42" transform="rotate(45)" strokeOpacity="0.55" />
          <circle r="5" fill={stroke} stroke="none" />
        </g>
      </g>
    </svg>
  );
}

/** Org / hierarchy diagram — Hall Management System */
export function HallArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 240 160" className={className} role="presentation" aria-hidden="true">
      <g stroke={ink} strokeOpacity="0.2" fill="none" strokeWidth="1">
        <path d="M120 44V64M60 96V80h120v16M60 96v0M120 80v16" />
        <path d="M60 112v12M120 112v12M180 112v12" />
      </g>
      <g fill="none" strokeWidth="1.2">
        <rect x="94" y="24" width="52" height="22" rx="3" stroke={stroke} />
        <rect x="36" y="90" width="48" height="22" rx="3" stroke={ink} strokeOpacity="0.35" />
        <rect x="96" y="90" width="48" height="22" rx="3" stroke={ink} strokeOpacity="0.35" />
        <rect x="156" y="90" width="48" height="22" rx="3" stroke={ink} strokeOpacity="0.35" />
        <rect x="44" y="128" width="32" height="14" rx="3" stroke={ink} strokeOpacity="0.18" />
        <rect x="104" y="128" width="32" height="14" rx="3" stroke={ink} strokeOpacity="0.18" />
        <rect x="164" y="128" width="32" height="14" rx="3" stroke={ink} strokeOpacity="0.18" />
      </g>
    </svg>
  );
}

/** Workflow pipeline — CrediFlow */
export function CrediArt({ className }: ArtProps) {
  return (
    <svg viewBox="0 0 240 160" className={className} role="presentation" aria-hidden="true">
      <g fill="none" strokeWidth="1.2">
        <path d="M40 80h32M104 80h32M168 80h32" stroke={ink} strokeOpacity="0.22" strokeDasharray="4 4" />
        <path d="M88 64V40h64v24" stroke={ink} strokeOpacity="0.14" />
        <path d="M88 96v24h64V96" stroke={ink} strokeOpacity="0.14" />
        <rect x="72" y="66" width="32" height="28" rx="4" stroke={stroke} />
        <rect x="136" y="66" width="32" height="28" rx="4" stroke={ink} strokeOpacity="0.35" />
        <circle cx="32" cy="80" r="8" stroke={ink} strokeOpacity="0.35" />
        <circle cx="208" cy="80" r="8" stroke={stroke} />
        <rect x="76" y="28" width="24" height="14" rx="3" stroke={ink} strokeOpacity="0.18" />
        <rect x="140" y="118" width="24" height="14" rx="3" stroke={ink} strokeOpacity="0.18" />
      </g>
      <circle cx="120" cy="80" r="2.5" fill={stroke} />
    </svg>
  );
}

/** Elemental brick grid — React-o-ball */
export function ReactoArt({ className }: ArtProps) {
  const cols = 6;
  const rows = 3;
  return (
    <svg viewBox="0 0 240 160" className={className} role="presentation" aria-hidden="true">
      <g>
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => {
            const highlight = (r * cols + c) % 5 === 2;
            return (
              <rect
                key={`${r}-${c}`}
                x={36 + c * 28}
                y={30 + r * 18}
                width={24}
                height={12}
                rx={2}
                fill="none"
                strokeWidth="1.2"
                stroke={highlight ? stroke : ink}
                strokeOpacity={highlight ? 0.9 : 0.2}
              />
            );
          }),
        )}
      </g>
      <g fill="none" strokeWidth="1.2">
        <path d="M120 128L96 104" stroke={ink} strokeOpacity="0.18" strokeDasharray="3 4" />
        <circle cx="122" cy="130" r="6" stroke={stroke} />
        <path d="M74 140h56" stroke={ink} strokeOpacity="0.3" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}
