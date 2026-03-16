import { WebcamPixelGrid } from "@/components/ui/webcam-pixel-grid";
import Link from "next/link";

export function WebcamPixelGridDemo() {
  return (
    <div className="relative w-screen bg-black overflow-hidden">
      {/* Webcam pixel grid background */}
      <div className="fixed inset-0">
        <WebcamPixelGrid
          gridCols={60}
          gridRows={40}
          maxElevation={50}
          motionSensitivity={0.25}
          elevationSmoothing={0.2}
          colorMode="webcam"
          backgroundColor="#030303"
          mirror={true}
          gapRatio={0.05}
          invertColors={false}
          darken={0.6}
          borderColor="#ffffff"
          borderOpacity={0.06}
          className="w-full h-full"
          onWebcamReady={() => console.log("Webcam ready!")}
          onWebcamError={(err) => console.error("Webcam error:", err)}
        />
      </div>
      
    </div>
  );
}