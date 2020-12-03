import TRIANGULATION from "./constants";

const drawTriangle = (ctx, closePath, points, filter) => {
  const region = new Path2D();
  region.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) {
    const point = points[i];
    region.lineTo(point[0], point[1]);
  }

  if (closePath) {
    region.closePath();
  }
  ctx.strokeStyle = filter;
  ctx.stroke(region);
};
const drawMesh = (ctx, detections, filter) => {
  if (detections.length > 0) {
    detections.forEach((detection) => {
      const { scaledMesh } = detection;
      for (let i = 0; i < TRIANGULATION.length / 3; i++) {
        const points = [
          TRIANGULATION[i * 3 + 0],
          TRIANGULATION[i * 3 + 1],
          TRIANGULATION[i * 3 + 2],
        ].map((index) => scaledMesh[index]);
        //  Draw triangle
        drawTriangle(ctx, true, points, filter[1]);
      }
      scaledMesh.forEach((point) => {
        ctx.beginPath();
        ctx.fillStyle = filter[0];
        ctx.arc(point[0], point[1], 1, 0, 2 * Math.PI);
        ctx.fill();
      });
    });
  }
};
export default drawMesh;
