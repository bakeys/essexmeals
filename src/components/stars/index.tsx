export function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="rating rating-sm">
      {Array.from({ length: total }).map((_, i) => (
        <input
          key={i}
          type="radio"
          className={`mask mask-star-2 ${i < count ? "bg-yellow-400" : "bg-base-300"}`}
          readOnly
          checked={i === count - 1}
        />
      ))}
    </div>
  );
}
