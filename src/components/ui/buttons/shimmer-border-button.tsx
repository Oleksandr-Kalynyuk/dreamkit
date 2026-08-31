"use client";

export const shimmerBorderButtonCode = `<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl p-[1.5px] focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-95 transition-all duration-300">
  <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#f59e0b_88%,#ffffff_92%,#f59e0b_96%,transparent_100%)]" />

  <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10.5px] bg-zinc-950 px-6 py-1 text-sm font-medium text-zinc-300 backdrop-blur-3xl transition-colors group-hover:bg-zinc-900 group-hover:text-white">
    <span className="tracking-wide">DreamKit</span>
  </span>
</button>`;

export function ShimmerBorderButton() {
  return (
    <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-xl p-[1.5px] focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-zinc-950 active:scale-95 transition-all duration-300">
      {/* High-definition, crisp rotating border beam */}
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#f59e0b_88%,#ffffff_92%,#f59e0b_96%,transparent_100%)]" />

      {/* Inner button surface */}
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[10.5px] bg-zinc-950 px-6 py-1 text-sm font-medium text-zinc-300 backdrop-blur-3xl transition-colors group-hover:bg-zinc-900 group-hover:text-white">
        <span className="tracking-wide">DreamKit</span>
      </span>
    </button>
  );
}