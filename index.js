
function isTouching(a, b) {
  const rectA = a.getBoundingClientRect();
  const rectB = b.getBoundingClientRect();

  return !(
    rectA.right < rectB.left ||
    rectA.left > rectB.right ||
    rectA.bottom < rectB.top ||
    rectA.top > rectB.bottom
  );
};
window.addEventListener("DOMContentLoaded", () => {
  const arm = document.getElementById("img1");
  if (!arm) return;

  const target = document.getElementById("picyay");
  if (!target) return; 

  arm.style.position = "absolute";
  arm.style.touchAction = "none";
  arm.style.cursor = "grab";

  let dragging = false;
  let offsetX = 0;
  let offsetY = 2;

  arm.addEventListener("pointerdown", (e) => {
    dragging = true;
    arm.setPointerCapture(e.pointerId);
    arm.style.cursor = "grabbing";

    const rect = arm.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
  });

  arm.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    
    arm.style.left = `${e.clientX - offsetX}px`;
    arm.style.top  = `${e.clientY - offsetY}px`;

    if (isTouching(arm, target)) {
      target.src = "Ack.png";
    } else {
      target.src = "Hapoy.png";
    }
    arm.addEventListener("pointerup", () => {
      dragging = false;
      arm.style.cursor = "grab";

      arm.addEventListener("pointermove", (e) => {
    if (!dragging) return;

    arm.style.left = `${e.clientX - offsetX}px`;
    arm.style.top  = `${e.clientY - offsetY}px`;

    if (isTouching(arm, target)) {
      target.src = "Ack.png";
    } else {
      target.src = "Hapoy.png";
    }
  });
  });
});
});