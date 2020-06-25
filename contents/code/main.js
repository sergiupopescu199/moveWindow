
function moveWindow(x, y) {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        client.geometry = {
            x: maxArea.x + (maxArea.width - client.width) / x,
            y: maxArea.y + (maxArea.height - client.height) / y,
            width: client.width,
            height: client.height
        };
    }
}


registerShortcut("MoveWindowToCenter", "Move Window to Center", "Meta+C", function () {
    moveWindow(2, 2);
});

registerShortcut("MoveWindowToLeft", "Move Window to Left", "Meta+X", function () {
    moveWindow(10000, 2);
});

registerShortcut("MoveWindowToRight", "Move Window to Right", "Meta+V", function () {
    moveWindow(1, 2);
});