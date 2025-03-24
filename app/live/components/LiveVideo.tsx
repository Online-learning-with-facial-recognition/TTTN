"use client";

import { useRef, useEffect, useState } from "react";

export default function LiveVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);

  const toggleCamera = async () => {
    if (isCameraOn) {
      // Tắt camera hoàn toàn
      streamRef.current?.getTracks().forEach(track => track.stop());
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    } else {
      // Bật lại camera
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Lỗi khi bật camera:", error);
      }
    }
    setIsCameraOn(!isCameraOn);
  };

  useEffect(() => {
    if (isCameraOn) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        .then((stream) => {
          streamRef.current = stream;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(console.error);
    }
    return () => {
      streamRef.current?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-full h-[550px] bg-black rounded-lg overflow-hidden relative">
        {/* Video Camera */}
        <video 
          ref={videoRef} 
          autoPlay 
          className="w-full h-full object-cover transform scale-x-[-1]" 
          style={{ visibility: isCameraOn ? "visible" : "hidden" }} // Ẩn thay vì xóa
        />

        {/* Hiển thị khi camera tắt */}
        {!isCameraOn && (
          <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-black">
            Camera is Off
          </div>
        )}
      </div>

      {/* Nút bật/tắt camera nằm ngoài khung video */}
      <button
        onClick={toggleCamera}
        className={`mt-4 px-4 py-2 rounded ${isCameraOn ? "bg-red-500" : "bg-green-500"} text-white`}
      >
        {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
      </button>
    </div>
  );
}
