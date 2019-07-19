
const body = document.getElementById('body');


function mouseEventHandlers() {
    function onMouseDown(e) {
        console.log({ x : e.pageX, y : e.pageY});
        body.addEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(e) {
        console.log({ x : e.pageX, y : e.pageY});
    }

    function onMouseUp() {
        body.removeEventListener('mousemove', onMouseMove);
    }

    body.addEventListener('mousedown', onMouseDown);
    body.addEventListener('mouseup', onMouseUp);
}

function touchEventHandlers() {
    function onTouchStart(e) {
        console.log({ x : e.touch[0].pageX, y : e.touch[0].pageY});
        body.addEventListener('touchmove', onTouchMove);
    }

    function onTouchMove(e) {
        console.log({ x : e.touch[0].pageX, y : e.touch[0].pageY});
    }

    function onTouchEnd() {
        body.removeEventListener('touchmove', onTouchMove);
    }

    body.addEventListener('touchstart', onTouchStart);
    body.addEventListener('touchend', onTouchEnd);
    body.addEventListener('touchcancel', onTouchEnd);
}

//mouseEventHandlers();
touchEventHandlers();

