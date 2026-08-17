const items = [
  { emoji: "⭐", label: "Google Reviews" },
  { emoji: "🚗", label: "Comfortable Vehicles" },
  { emoji: "📍", label: "Pune" },
  { emoji: "💬", label: "Easy WhatsApp Booking" },
];

export function TrustStrip() {
  return (
    <div className="relative border-t border-white/10 bg-navy-950/80">
      <ul className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 text-sm font-medium text-white/85 sm:justify-between sm:px-6 lg:px-8">
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">{item.emoji}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
