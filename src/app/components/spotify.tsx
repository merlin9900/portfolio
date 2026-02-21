"use client";

import { useQuery } from "@tanstack/react-query";
import SpotifyCurrentlyPalying from "./ui/spotify-currently-playing";
import SpotifyCard from "./ui/spotify-card";
import SpotifyIdleCard from "./ui/spotify-idle-card";

export default function SpotifySection() {
  const { data: nowPlaying } = useQuery({
    queryKey: ["spotify-now"],
    queryFn: () => fetch("/api/spotify/now-playing").then((r) => r.json()),
    refetchInterval: 15000,
  });

  const { data: recent } = useQuery({
    queryKey: ["spotify-recent"],
    queryFn: () => fetch("/api/spotify/recent").then((r) => r.json()),
  });

  const { data: topTracks } = useQuery({
    queryKey: ["spotify-top"],
    queryFn: () => fetch("/api/spotify/top-tracks").then((r) => r.json()),
  });

  console.log(nowPlaying);

  return (
    <section className="flex flex-col gap-2 pt-24">
      <h3 className="text-xl font-semibold">My Music DNA</h3>

      {/* Now Playing */}
      {/* {nowPlaying?.isPlaying && (
        <div className="flex gap-4 items-center">
          <img src={nowPlaying.albumImage} className="size-16 rounded-md" />
          <div>
            <p className="font-medium">{nowPlaying.song}</p>
            <p className="text-sm text-gray-400">{nowPlaying.artist}</p>
          </div>
        </div>
      )} */}
      {nowPlaying?.isPlaying ? (
        <SpotifyCurrentlyPalying track={nowPlaying} />
      ) : (
        <SpotifyIdleCard />
      )}

      {/* Recently Played */}
      <div>
        <h4 className="text-sm text-gray-400 mb-2">Recently Played</h4>
        <div className="flex gap-3">
          {recent?.map((song: any, i: number) => (
            <SpotifyCard
              key={i}
              artist={song.artist}
              song={song.song}
              image={song.image}
            />
          ))}
        </div>
      </div>

      {/* Top Tracks */}
      <div>
        <h4 className="text-sm text-gray-400 mb-2">Top Tracks</h4>
        <div className="flex gap-3">
          {topTracks?.map((song: any, i: number) => (
            <SpotifyCard
              key={i}
              artist={song.artist}
              song={song.name}
              image={song.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
