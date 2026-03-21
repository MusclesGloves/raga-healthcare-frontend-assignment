import type { ReactNode } from 'react';

type ViewMode = 'grid' | 'list';

type ViewToggleProps = {
  value: ViewMode;
  onChange: (mode: ViewMode) => void;
};

type ToggleButtonProps = {
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
};

function ToggleButton({ isActive, onClick, children }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
        isActive
          ? 'bg-slate-900 text-white shadow-sm'
          : 'bg-white text-slate-600 hover:bg-slate-100'
      }`}
    >
      {children}
    </button>
  );
}

function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <div className="inline-flex rounded-2xl bg-slate-100 p-1">
      <ToggleButton
        isActive={value === 'grid'}
        onClick={() => onChange('grid')}
      >
        Grid view
      </ToggleButton>
      <ToggleButton
        isActive={value === 'list'}
        onClick={() => onChange('list')}
      >
        List view
      </ToggleButton>
    </div>
  );
}

export default ViewToggle;