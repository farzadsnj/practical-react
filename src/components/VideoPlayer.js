import React from "react";
import ReactPlayer from "react-player";

function VideoPlayer() {
  return (
    <div className="video-player">
      <ReactPlayer
        width="480px"
        height="240px"
        controls
        url="https://www.youtube.com/watch?v=9wbZEPrFd10&t=3282s"
        onReady={() => console.log("onReady")}
        onStart={() => console.log("onStart")}
        onPause={() => console.log("onPause")}
        onEnded={() => console.log("onEnded")}
        onError={() => console.log("onError")}
      />
    </div>
  );
}

export default VideoPlayer;
