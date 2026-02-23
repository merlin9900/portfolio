"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MusicBars } from "./music-bars";

type SpotifyNowPlaying = {
  albumImage: string;
  song: string;
  artist: string;
  album: string;
  duration: number;
  progress: number;
  isPlaying: boolean;
};

export default function SpotifyCurrentlyPalying({
  track,
}: {
  track: SpotifyNowPlaying;
}) {
  const [now, setNow] = useState(track.progress);

  useEffect(() => {
    if (!track.isPlaying) return;

    const interval = setInterval(() => {
      setNow((prev) => prev + 1000);
    }, 1000);

    return () => clearInterval(interval);
  }, [track.isPlaying]);

  const total = track.duration;
  const current = Math.min(now, total);
  const progress = (current / total) * 100;

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full rounded-2xl bg-linear-to-b from-[#121212] to-[#0b0b0b] p-6 border border-zinc-800">
      <div className="flex gap-6">
        <Image
          src={track.albumImage}
          alt={track.song}
          width={140}
          height={140}
          className="rounded-lg shadow-lg"
        />

        <div className="flex flex-col justify-between flex-1">
          <div>
            <div className="text-sm flex items-center justify-between gap-4 text-green-400 mb-1">
              <p>{track.isPlaying ? "Currently Playing" : "Last Played"}</p>
              {track.isPlaying && <MusicBars />}
            </div>

            <h3 className="text-xl font-semibold text-white">{track.song}</h3>

            <p className="text-zinc-400">{track.artist}</p>
            <p className="text-xs text-zinc-500 mt-1">{track.album}</p>
          </div>

          <div className="mt-6">
            <div className="h-2 bg-zinc-700 rounded-full overflow-hidden">
              <div
                className="h-2 bg-green-500 rounded-full transition-all duration-1000 linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-zinc-400 mt-2">
              <span>{formatTime(current)}</span>
              <span>{formatTime(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
