export const fpsRequestAnimationFrame = function (callback, initialFps = 12) {
  let now = 0;
  let delta = 0;
  let then = Date.now();
  let frames = 0;
  let oldTime = 0;
  let fps = 1000 / initialFps;

  const loop = (time) => {
    window.requestAnimationFrame(loop);

    now = Date.now();
    delta = now - then;

    if (delta > fps) {
      then = now - (delta % fps);
      frames = 1000 / (time - oldTime);
      oldTime = time;
      callback(frames);
    }
  };

  return requestAnimationFrame(loop);
};
