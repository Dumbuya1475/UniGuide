// src/components/VideoWalkthrough.jsx

function VideoWalkthrough() {
  return (
    <div className="video-walkthrough">
      <h2>Welcome to UniGuide - Video Walkthrough</h2>
      <p>
        Watch this video to learn how to navigate through UniGuide and make the
        most of its features!
      </p>
      <iframe
        width="100%"
        height="500px"
        src="https://www.youtube.com/embed/BDUe48hVIqg"
        title="UniGuide Walkthrough Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default VideoWalkthrough;
