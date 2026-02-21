import { getAccessToken } from "@/app/lib/spotify";

export async function GET() {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (res.status === 204) {
    return Response.json({ isPlaying: false });
  }

  const data = await res.json();

  return Response.json({
    isPlaying: data.is_playing,
    song: data.item.name,
    artist: data.item.artists.map((a: any) => a.name).join(", "),
    albumImage: data.item.album.images[0].url,
    progress: data.progress_ms,
    duration: data.item.duration_ms,
  });
}
