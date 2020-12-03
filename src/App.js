import React, { useRef, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import WebCam from "react-webcam";
import "./App.css";
import drawMesh from "./utils";

const filters = [
  { name: "Default", colors: ["pink", "gray"] },
  { name: "Beauty", colors: ["aqua", "gray"] },
  { name: "Girl Fav", colors: ["aqua", "lightseagreen"] },
  { name: "Lamina", colors: ["gray", "lightseagreen"] },
];
const App = () => {
  const [filter, setFilter] = useState(0);
  const canvasRef = useRef(null);
  const webCamRef = useRef(null);
  (async () => {
    const network = await facemesh.load({
      maxFaces: 10,
      inputResolution: { width: 640, height: 480 },
      scale: 0.8,
    });
    setInterval(async () => {
      if (
        typeof webCamRef.current !== "undefined" &&
        webCamRef.current !== null &&
        webCamRef.current.video.readyState === 4
      ) {
        // get the video properties
        const { video } = webCamRef.current;
        const { videoWidth, videoHeight } = video;

        // set the webcam and canvas properties

        webCamRef.current.video.width = videoWidth;
        webCamRef.current.video.height = videoHeight;
        canvasRef.current.width = videoWidth;
        canvasRef.current.height = videoHeight;
        // get detections from the streams
        const ctx = canvasRef.current.getContext("2d");
        const detections = await network.estimateFaces(video);
        // console.log(detections);
        drawMesh(ctx, detections, filters[Number.parseInt(filter)].colors);
      }
    }, 100);
  })();
  return (
    <div className="app">
      <h1>Crisp Facemesh</h1>
      <label htmlFor="app__filter">Select Filter</label>
      <select
        id="app__filter"
        className="app__select"
        value={filter}
        onChange={(e) => setFilter(Number.parseInt(e.target.value))}
      >
        {filters.map((filter, index) => (
          <option value={index} key={filter?.name}>
            {filter?.name}
          </option>
        ))}
      </select>
      <center>
        <div className="app__main">
          <WebCam className="app__webcam" ref={webCamRef} />
          <canvas className="app__canvas" ref={canvasRef}></canvas>
        </div>
      </center>
    </div>
  );
};

export default App;
