import { useEffect, useRef } from "react";

export default function VideoCall() {
  const localVideo = useRef(null);
  const remoteVideo = useRef(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      localVideo.current.srcObject = stream;
      localVideo.current.muted = true;
    });
  }, []);

  return (
    <div className="relative w-full h-screen bg-black text-white">
      <video ref={remoteVideo} autoPlay playsInline className="w-full h-full object-cover" />
      <video ref={localVideo} autoPlay playsInline className="absolute bottom-4 right-4 w-32 h-48 object-cover rounded-lg border border-white" />
      <div className="absolute bottom-8 w-full flex justify-center gap-6">
        <button className="bg-gray-800 p-4 rounded-full">🎤</button>
        <button className="bg-red-600 p-4 rounded-full">🔴</button>
        <button className="bg-gray-800 p-4 rounded-full">🔄</button>
      </div>
    </div>
  );
}
