import { getAccessToken } from "@/app/lib/spotify";

export async function GET() {
  const { access_token } = await getAccessToken();

  const res = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played?limit=5",
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  const data = await res.json();

  return Response.json(
    data.items.map((item: any) => ({
      song: item.track.name,
      artist: item.track.artists.map((a: any) => a.name).join(", "),
      image: item.track.album.images[0].url,
    })),
  );
}
