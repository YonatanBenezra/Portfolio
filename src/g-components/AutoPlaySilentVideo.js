import React, { useRef, useEffect } from "react";

export default function AutoPlaySilentVideo(props) {
  const videoRef = useRef(undefined);
  useEffect(() => {
    videoRef.current.defaultMuted = true;
  });
  return (
    <video
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
  );
}
