import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Solutions custom built for the results you need.",
          "Intelligent Traffic System",
          "Smart Parking",
          "Intelligent City Lights",
          "Video Surveillance and Analytics",
          "Cloud Gaming",
          "Live Panoramic Broadcast"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 30,
      }}
    />
  );
}

export default Type;
