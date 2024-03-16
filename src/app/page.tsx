import { fetchChannel, fetchVideos } from "@/api/apis";
import OverviewCard, { YouTubeVideo } from "./ui/OverviewCard";
import { Suspense } from "react";

export default async function Home() {
  const videos = await fetchVideos()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 w-full">
      <Suspense fallback={<div>Loading...</div>}>
        <div className=" grid w-full" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))' }}>
          {videos.map((video: YouTubeVideo) => <OverviewCard video={video} />)}
        </div>
      </Suspense>
    </main>
  );
}
