"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import video1 from "../../public/video1.mp4";

const videos = [
  {
    title: "Sarah Mitchell - 133% ROAS Increase",
    src: video1,
  },
  {
    title: "Marcus Chen - 2x Conversions",
    src: video1,
  },
  {
    title: "Client Case Study - Scaling to $800k/mo",
    src: video1,
  },
];

function VideoCard({ video }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState("0:00");

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleLoadedMetadata = (e) => {
    const totalSeconds = e.target.duration;
    if (!isNaN(totalSeconds)) {
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = Math.floor(totalSeconds % 60)
        .toString()
        .padStart(2, "0");
      setDuration(`${minutes}:${seconds}`);
    }
  };

  return (
    <div
      className="group relative aspect-[9/16] bg-[var(--card)] border border-[var(--border)] overflow-hidden cursor-pointer hover:border-[var(--primary)]/40 transition-all duration-300"
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={video.src}
        onLoadedMetadata={handleLoadedMetadata}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        loop
      />

      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity">
          <div className="relative">
            <div className="absolute inset-0 w-20 h-20 -m-2 rounded-full border border-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 group-hover:scale-110 transition-all duration-300" />
            <div className="w-16 h-16 rounded-full bg-[var(--primary)] flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-2xl shadow-[var(--primary)]/20">
              <Play className="w-7 h-7 text-white ml-0.5" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-sm font-semibold text-white mb-1">{video.title}</p>
        <p className="text-xs text-white/60">{duration}</p>
      </div>

      <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 transition-colors pointer-events-none" />
    </div>
  );
}

export function VideoSection() {
  return (
    <section className="py-32 px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[var(--primary)]" />
            <span className="text-sm font-medium text-[var(--primary)] uppercase tracking-wider">
              Client Stories
            </span>
            <div className="w-12 h-px bg-[var(--primary)]" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold">
            Hear From Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
