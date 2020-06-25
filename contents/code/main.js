registerShortcut("MoveWindowToCenter", "Move Window to Center", "Meta+C", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        client.geometry = {
            x: maxArea.x + (maxArea.width - client.width) / 2,
            y: maxArea.y + (maxArea.height - client.height) / 2,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToLeft", "Move Window to Left", "Meta+X", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        client.geometry = {
            x: maxArea.x + (maxArea.width - client.width) / 10000,
            y: maxArea.y + (maxArea.height - client.height) / 2,
            width: client.width,
            height: client.height
        };
    }
});

registerShortcut("MoveWindowToRight", "Move Window to Right", "Meta+V", function () {
    var client = workspace.activeClient;
    if (client.moveable) {
        var maxArea = workspace.clientArea(KWin.MaximizeArea, client);
        client.geometry = {
            x: maxArea.x + (maxArea.width - client.width) / 1,
            y: maxArea.y + (maxArea.height - client.height) / 2,
            width: client.width,
            height: client.height
        };
    }
});