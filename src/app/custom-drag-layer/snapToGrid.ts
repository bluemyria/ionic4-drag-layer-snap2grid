export function snapToGrid(x, y) {
    const snappedX = Math.round(x / 2) * 2;
    const snappedY = Math.round(y / 8) * 8;

    console.log("X,Y  " + snappedX + "    " + snappedY);

    return [snappedX, snappedY];
}