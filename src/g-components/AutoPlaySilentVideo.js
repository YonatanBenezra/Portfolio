import React, { useRef, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function AutoPlaySilentVideo(props) {
  const handle = useFullScreenHandle();
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });

  return (
    <div>
      <p className="text-center m-auto primary"><span className="badge">Click the video to enter full screen</span></p>
      <FullScreen handle={handle}>
    <video
      style={{flex: 1}} contentContainerStyle={{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      }}
      onClick={handle.enter}
      className={props.className}
      ref={videoRef}
      loop
      autoPlay
      muted
      playsInline
      poster={props.poster}
    >
      <source src={props.src1} type="video/webm" />
      <source src={props.src2} type="video/mp4" />
    </video>
    </FullScreen>
    </div>
  );
}
