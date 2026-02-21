import { getAccessToken } from "@/app/lib/spotify";

export async function GET() {
  const { access_token } = await getAccessToken();

  const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=5", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const data = await res.json();

  return Response.json(
    data.items.map((track: any) => ({
      name: track.name,
      artist: track.artists[0].name,
      image: track.album.images[0].url,
    })),
  );
}
