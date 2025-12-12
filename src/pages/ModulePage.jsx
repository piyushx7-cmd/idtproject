import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { demoModules } from "../fake-backend/data";

const ModulePage = () => {
  const { id } = useParams();
  const module = demoModules.find((m) => m.id === Number(id));

  const [videos, setVideos] = useState(module.videos);
  const [selectedVideo, setSelectedVideo] = useState(module.videos[0]);

  const markWatched = (videoId) => {
    const updated = videos.map(v =>
      v.id === videoId ? { ...v, watched: true } : v
    );
    setVideos(updated);
  };

  return (
    <div className="page" style={{ display: "flex", gap: "20px" }}>
      
      <div style={{ width: "35%" }}>
        <h1>{module.title}</h1>
        <p style={{ color: "#9ca3af" }}>{module.level} Module</p>

        <div className="card" style={{ marginTop: 12 }}>
          {videos.map(video => (
            <div
              key={video.id}
              onClick={() => {
                setSelectedVideo(video);
                markWatched(video.id);
              }}
              style={{
                padding: "12px",
                borderRadius: "10px",
                cursor: "pointer",
                background: selectedVideo.id === video.id ? "#1e293b" : "transparent",
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "8px"
              }}
            >
              <span>{video.title}</span>
              <span style={{ color: video.watched ? "#22c55e" : "#facc15" }}>
                {video.watched ? "✔" : "•"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "65%" }}>
        <div className="card">
          <iframe
            width="100%"
            height="380"
            src={selectedVideo.url}
            title="Module Video Player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ borderRadius: "12px" }}
          ></iframe>

          <h2 style={{ marginTop: 12 }}>{selectedVideo.title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ModulePage;
