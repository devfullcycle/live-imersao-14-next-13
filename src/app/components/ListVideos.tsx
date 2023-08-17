import Image from "next/image";
import { Video } from "../util/models";

export async function getVideos(): Promise<Video[]> {
  const response = await fetch("http://localhost:8000/videos", {
    // next: {
    //   tags: ["videos"],
    // },
    next: {
      revalidate: 10, //segundos stale while revalidate
    },
    //cache: "no-store",
  });
  return response.json();
}

export async function ListVideos() {
  const videos = await getVideos();
  return (
    <ul>
      {videos.map((video) => (
          <li key={video.id}>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src={video.thumbnail_url} //webp
                alt={video.title}
                width={100}
                height={100}
                priority
              />
              <div className="flex flex-col">
                <span className="text-lg">{video.title}</span>
                <span className="text-gray-500 text-sm">{video.description}</span>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}
//SEO metadata
export default ListVideos;
