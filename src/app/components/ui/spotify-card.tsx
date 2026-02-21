import React from "react";
import { ProgressiveBlur } from "./progressive-blur";
import Image from "next/image";

interface SpotifyCardProps {
  song: string;
  artist: string;
  image: string;
}

const SpotifyCard = ({ song, artist, image }: SpotifyCardProps) => {
  return (
    <div className="relative aspect-square w-[500px] overflow-hidden rounded-[4px]">
      <Image
        src={image}
        alt={song}
        width={500}
        height={500}
        className="rounded-lg shadow-lg"
      />
      <ProgressiveBlur
        className="pointer-events-none absolute bottom-0 left-0 h-[50%] w-full"
        blurIntensity={6}
      />
      <div className="absolute bottom-0 left-0 p-1">
        <p className="text-sm line-clamp-2 font-medium text-white">{song}</p>
        <p className="text-xs line-clamp-1 font-medium text-white/30">
          {artist}
        </p>
      </div>
    </div>
  );
};

export default SpotifyCard;
