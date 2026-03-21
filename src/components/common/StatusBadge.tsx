type StatusVariant =
  | 'stable'
  | 'attention'
  | 'critical'
  | 'low'
  | 'medium'
  | 'high'
  | 'info'
  | 'warning';

type StatusBadgeProps = {
  label: string;
  variant: StatusVariant;
};

const statusStyles: Record<StatusVariant, string> = {
  stable: 'bg-emerald-100 text-emerald-700',
  attention: 'bg-amber-100 text-amber-700',
  critical: 'bg-rose-100 text-rose-700',
  low: 'bg-sky-100 text-sky-700',
  medium: 'bg-amber-100 text-amber-700',
  high: 'bg-rose-100 text-rose-700',
  info: 'bg-sky-100 text-sky-700',
  warning: 'bg-amber-100 text-amber-700',
};

function StatusBadge({ label, variant }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold capitalize ${statusStyles[variant]}`}
    >
      {label}
    </span>
  );
}

export default StatusBadge;