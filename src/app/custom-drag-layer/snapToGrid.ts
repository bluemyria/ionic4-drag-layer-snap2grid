export function snapToGrid(x, y) {
    const snappedX = Math.round(x / 128) * 128;
    const snappedY = Math.round(y / 128) * 128;

    console.log("X,Y  " + snappedX + "    " + snappedY);

    return [snappedX, snappedY];
}