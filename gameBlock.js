let otherSprites = document.createElement("img");
otherSprites.src = "img/img1.png";

CanvasDisplay.prototype.drawBackground = function (level) {
    let { left, top, width, height } = this.viewport; let xStart = Math.floor(left);
    let xEnd = Math.ceil(left + width);
    let yStart = Math.floor(top);
    let yEnd = Math.ceil(top + height);

    for (let y = yStart; y < yEnd; y++){
        for (let x = xStart; x < xEnd; x++){
            let tile = level.rows[y][x];
            if (tile == "empty") continue;
            let screenX = (x - left) * scale;
            let screenY = (y - top) * scale;
            let tileX = tile == "lava" ? scale : 0;
            this.cx.drawImage(otherSprites, tileX, 0, scale, scale, screenX, screenY, scale, scale)
        }
    }
}
