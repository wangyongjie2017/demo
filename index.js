function createCanvas(width, height) {
    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
};

function drawImage(url, x, y, width, height, ctx) {
    return new Promise((resolve) = > {
        let img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () = > {
            ctx.drawImage(img, x, y, width, height);
            resolve()
        }
        img.src = url;
    });
};

function fillText(text, y, ctx) {

    ctx.font = `normal normal 600 80px / 48px PingFangSC`;
    ctx.fillStyle = '#d1b07f'

    let textWidth = ctx.measureText(text).width;
    let x = (750 - textWidth) / 2;

    //draw
    ctx.fillText(text, x, y);

};


function base64Img2Blob(code) {
    var parts = code.split(';base64,');
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], {
        type: contentType
    });
}

function downloadFile(fileName, content) {

    var aLink = document.createElement('a');
    var blob = base64Img2Blob(content); //new Blob([content]);

    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("click", false, false); //initEvent 涓嶅姞鍚庝袱涓弬鏁板湪FF涓嬩細鎶ラ敊
    aLink.download = fileName;
    aLink.href = URL.createObjectURL(blob);

    aLink.dispatchEvent(evt);
}

function getQuery(key) {
    let result = '';

    let search = location.search.substr(1);
    search.split('&').forEach(item = > {
        let kv = item.split('=');
        if (kv[0] == key) {
            result = decodeURI(kv[1]);
        }
    });

    return result;
}