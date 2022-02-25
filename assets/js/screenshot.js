window.onload = function () {
    var w = document.getElementById('screenshot').clientWidth;
    var h = document.getElementById('screenshot').clientHeight;

    var s = Snap("#screenshot");
    s.paper.image('demo-ui/screenshot.png', 0, 0, 973, 639);
    
    var text = null;
    
    var hoverIn = (button, label, tX, tY) => {
        if (text === null) {
            text = s.paper.text(tX, tY, label);
            text.attr('fill', '#51A4FB');
            text.attr('textAnchor', 'end');
            text.attr('font-family', 'Avenir, Helvetica, Arial, sans-serif');
            text.attr('font-size', '0.8em');
            button.attr('opacity', '1');
        }
    };
    
    var hoverOut = (button) => {
        text.remove();
        text = null;
        button.attr('opacity', '0');
    }
    
    // x,y,w,h -> hover button position & dimensions | tX,tY -> label position
    var loadLabel = (label, image, x, y, w, h, tX, tY) => {
        var i = s.paper.image('demo-ui/' + image, x, y, w, h);
        i.attr('opacity', '0');
        i.hover(() => hoverIn(i, label, tX, tY), () => hoverOut(i));
    };
    
    var loadButton = (image, x, y, w, h) => {
        var i = s.paper.image('demo-ui/' + image, x, y, w, h);
        i.attr('opacity', '0');
        i.hover(() => i.attr('opacity', '1'), () => i.attr('opacity', '0'));
    }
    
    loadLabel('STOP', 'btn-stop.png', 318, 57, 48, 48, 950, 88);
    loadLabel('SYNCHRONIZE FROM REMOTE', 'btn-sync.png', 376, 57, 49, 48, 950, 88);
    loadLabel('TAKE SNAPSHOT', 'btn-snap.png', 435, 57, 48, 48, 950, 88);
    loadLabel('RESTORE FROM SNAPSHOT', 'btn-rest.png', 493, 57, 49, 48, 950, 88);
    loadLabel('OPEN SNAPSHOT FOLDER', 'btn-open.png', 552, 57, 48, 48, 950, 88);
    loadLabel('REMOVE', 'btn-remove.png', 610, 57, 48, 48, 950, 88);
    
    loadLabel('CONTAINER STATE', 'lbl-sta.png', 318, 162, 98, 10, 950, 172);
    loadLabel('CPU USAGE', 'lbl-cpu.png', 447, 162, 75, 10, 950, 172);
    loadLabel('MEMORY USAGE', 'lbl-mem.png', 553, 162, 74, 10, 950, 172);
    loadLabel('DISK USAGE', 'lbl-dsk.png', 658, 162, 79, 10, 950, 172);
    
    loadButton('ui-min.png', 901, 3, 20, 20);
    loadButton('ui-max.png', 925, 3, 20, 20);
    loadButton('ui-close.png', 949, 3, 20, 20);
    loadButton('ui-add.png', 255, 40, 32, 33);
};