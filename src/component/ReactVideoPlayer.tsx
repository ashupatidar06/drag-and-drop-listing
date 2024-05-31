// import React, { useRef } from "react";
// import { getMetadata } from 'video-metadata-thumbnails';

// const VideoUploader = () => {
//   const videoRef = useRef<any>(null);

//   const handleFileChange = async (event: any) => {
//     const file = event.target.files[0];
//     const metadata = await getMetadata(file);
//     console.log("metadata", metadata);
//     if (metadata.fps !== 60) {
//       alert("Please upload a video with 60fps.");
//       return;
//     }
//     if (file) {
//       const video = videoRef.current;
//       video.src = URL.createObjectURL(file);
//       console.log("video", video);
//     }
//   };

//   const handleLoadedMetadata = () => {
//     // Access the video's metadata, including the frame rate
//     console.log(
//       "videoRef.current",
//       videoRef.current.captureStream().getVideoTracks()[0].getSettings()
//     );
//     const frameRate = videoRef.current
//       .captureStream()
//       .getVideoTracks()[0]
//       .getSettings().frameRate;
//     console.log(`Video FPS: ${frameRate}`);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileChange} accept="video/*" />
//       <video
//         ref={videoRef}
//         controls
//         onLoadedMetadata={handleLoadedMetadata}
//       ></video>
//     </div>
//   );
// };

// export default VideoUploader;
export {};
