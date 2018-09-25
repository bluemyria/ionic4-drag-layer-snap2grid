export function snapToGrid(x, y) {
    const snappedX = Math.round(x / 64) * 64;
    const snappedY = Math.round(y / 64) * 64;

    console.log("X,Y  " + snappedX + "    " + snappedY);

    return [snappedX, snappedY];
}