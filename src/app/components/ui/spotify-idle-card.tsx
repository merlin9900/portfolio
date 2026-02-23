"use client";

import Image from "next/image";

export default function SpotifyIdleCard() {
  return (
    <div className="w-full rounded-2xl bg-linear-to-b from-[#121212] to-[#0b0b0b] p-6 border border-zinc-800">
      <div className="flex gap-6 items-center">
        <div className="size-35 rounded-lg bg-zinc-900 flex items-center justify-center border border-zinc-800">
          <Image
            src="/spotify.png"
            alt="Spotify"
            width={60}
            height={60}
            className="opacity-70"
          />
        </div>

        <div className="flex flex-col justify-center flex-1">
          <p className="text-sm text-zinc-400 mb-1">Spotify</p>

          <h3 className="text-xl font-semibold text-white">
            No track spinning right now
          </h3>

          <p className="text-zinc-500 mt-1">
            Music appears here whenever I hit play.
          </p>

          <div className="mt-6">
            <div className="h-2 bg-zinc-800 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
