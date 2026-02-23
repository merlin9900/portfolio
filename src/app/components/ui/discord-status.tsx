"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type LanyardData = {
  discord_status: "online" | "idle" | "dnd" | "offline";
  discord_user: {
    id: string;
    username: string;
    avatar: string;
  };
  spotify?: {
    song: string;
    artist: string;
    album_art_url: string;
    timestamps: {
      start: number;
      end: number;
    };
  };
};

export default function DiscordStatus() {
  const [data, setData] = useState<LanyardData | null>(null);

  useEffect(() => {
    let mounted = true;

    const fetchPresence = async () => {
      try {
        const res = await fetch(
          `https://api.lanyard.rest/v1/users/${process.env.NEXT_PUBLIC_DISCORD_USER_ID}`,
          { cache: "no-store" },
        );
        const json = await res.json();
        if (mounted) setData(json.data);
      } catch {
        // silent fail (status widget shouldn't crash UI)
      }
    };

    fetchPresence();
    const interval = setInterval(fetchPresence, 10000);

    return () => {
      mounted = false;
      clearInterval(interval);
    };
  }, []);

  const statusColor = useMemo(
    () =>
      ({
        online: "#23a55a",
        idle: "#f0b232",
        dnd: "#f23f43",
        offline: "#80848e",
      })[data?.discord_status ?? "offline"],
    [data?.discord_status],
  );

  if (!data) return null;

  return (
    <div className="relative group inline-block ml-2">
      <div className="flex items-center gap-2">
        <div
          className="size-4 rounded-full"
          style={{ background: statusColor }}
        />
        {/* <span className="text-sm text-gray-300 capitalize">
          {data.discord_status}
        </span> */}
      </div>

      <div className="absolute hidden group-hover:block top-8 left-0 z-50">
        <DiscordHoverCard data={data} />
      </div>
    </div>
  );
}

function DiscordHoverCard({ data }: { data: LanyardData }) {
  const avatar = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`;

  return (
    <div className="w-96 p-4 bg-[#2b2d31] rounded-xl shadow-xl border border-neutral-700 flex flex-col gap-4">
      <div className="flex items-center justify-between pr-3">
        <div className="flex items-center gap-3 ">
          <Image
            src={avatar}
            alt="Discord avatar"
            width={48}
            height={48}
            unoptimized
          />

          <div>
            <p className="text-white font-medium">
              {data.discord_user.username}
            </p>
            <p className="text-xs text-gray-400 capitalize">
              {data.discord_status}
            </p>
          </div>
        </div>
        <Image
          src={"/discord.svg"}
          alt="Discord"
          width={24}
          height={24}
          unoptimized
        />
      </div>
      {data.spotify && <DiscordSpotifyCard spotify={data.spotify} />}
    </div>
  );
}

function DiscordSpotifyCard({
  spotify,
}: {
  spotify: NonNullable<LanyardData["spotify"]>;
}) {
  const [now, setNow] = useState<number>(() => Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const total = spotify.timestamps.end - spotify.timestamps.start;
  const current = now - spotify.timestamps.start;
  const progress = Math.min((current / total) * 100, 100);

  const formatTime = (ms: number) => {
    const seconds = Math.floor(ms / 1000);
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full p-4 bg-[#1e1f22] rounded-xl">
      <p className="text-sm text-gray-300 mb-3">Listening to Spotify</p>

      <div className="flex gap-4">
        <Image
          src={spotify.album_art_url}
          alt={spotify.song}
          width={80}
          height={80}
          className="rounded-md"
        />

        <div className="flex-1">
          <p className="font-medium text-white">{spotify.song}</p>
          <p className="text-sm text-gray-400">{spotify.artist}</p>

          <div className="mt-3">
            <div className="h-1 bg-gray-600 rounded overflow-hidden">
              <div
                className="h-1 bg-white rounded transition-all duration-1000 linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>{formatTime(current)}</span>
              <span>{formatTime(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
