import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface YouTubeVideoProps {
  query: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ query }) => {
  const [videoId, setVideoId] = useState<string | null>(null);

  const fetchVideo = async () => {
    const API_KEY = 'YOUR_YOUTUBE_API_KEY';
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
      params: {
        part: 'snippet',
        q: query,
        type: 'video',
        key: API_KEY,
      },
    });

    if (response.data.items.length > 0) {
      setVideoId(response.data.items[0].id.videoId);
    }
  };

  useEffect(() => {
    if (query) {
      fetchVideo();
    }
  }, [query]);

  return (
    <div className="flex justify-center my-4">
      {videoId ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Music Video"
        ></iframe>
      ) : (
        <p>No video found</p>
      )}
    </div>
  );
};

export default YouTubeVideo;