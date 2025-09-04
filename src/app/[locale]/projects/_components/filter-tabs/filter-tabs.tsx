"use client";

type TProps = {
  value: string;
  onChange: (v: string) => void;
  options: { key: string; label: string }[];
  ariaLabel?: string;
};

export default function FilterTabs({
  value,
  onChange,
  options,
  ariaLabel,
}: TProps) {
  return (
    <div role="tablist" aria-label={ariaLabel} className="flex flex-wrap gap-2">
      {options.map((opt) => {
        const active = value === opt.key;
        return (
          <button
            key={opt.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(opt.key)}
            className={`px-3 py-1 rounded-full text-xs border transition-all ${
              active
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
