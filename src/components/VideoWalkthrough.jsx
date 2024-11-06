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
        src="https://www.youtube.com/embed/D2PZUB_lDCk?si=JXKnVjxk_6qLu6Eh"
        title="UniGuide Walkthrough"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoWalkthrough;
