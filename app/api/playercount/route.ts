export async function GET(request: Request) {
  try {
    const response = await fetch(
      "https://api.mcsrvstat.us/2/mc.hypixel.net",
      { next: { revalidate: 120 } } // Cache for 2 minutes
    );
    if (!response.ok) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }

    const json = await response.json();

    if (!json.players) {
      throw new Error("Missing players data in API response");
    }

    const online = Number(json.players.online) || 0;
    const max = Number(json.players.max) || 0;

    return new Response(
      JSON.stringify({ current: online, max }),
      { status: 200, headers: { "Content-Type": "application/json", "Cache-Control": "public, max-age=120" } }
    );
  } catch (error) {
    console.error("Error fetching player count:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch player count" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}