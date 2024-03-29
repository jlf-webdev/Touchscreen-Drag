
const body = document.getElementById('body');
const ctn = document.getElementById('ctn');



function mouseEventHandlers() {
    function onMouseDown(e) {
        ctn.innerText = `X : ${e.pageX} - Y : ${e.pageY}`;
        //console.log({ x : e.pageX, y : e.pageY});
        body.addEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(e) {
        ctn.innerText = `X : ${e.pageX} - Y : ${e.pageY}`;
        //console.log({ x : e.pageX, y : e.pageY});
    }

    function onMouseUp() {
        body.removeEventListener('mousemove', onMouseMove);
    }

    body.addEventListener('mousedown', onMouseDown);
    body.addEventListener('mouseup', onMouseUp);
}

function touchEventHandlers() {
    ctn.innerText = "touch handler activated"
    function onTouchStart(e) {
        e.preventDefault();
        ctn.innerText = e.touches[0];
        ctn.innerText = `X : ${e.touches[0].pageX} - Y : ${e.touches[0].pageY}`;
        //console.log({ x : e.touch[0].pageX, y : e.touch[0].pageY});
        body.addEventListener('touchmove', onTouchMove);
    }

    function onTouchMove(e) {
        ctn.innerText = 'Moving';
        //console.log({ x : e.touch[0].pageX, y : e.touch[0].pageY});
        ctn.innerText = `X : ${e.touches[0].pageX} - Y : ${e.touches[0].pageY}`;
    }

    function onTouchEnd() {
        body.removeEventListener('touchmove', onTouchMove);
    }

    body.addEventListener('touchstart', onTouchStart);
    //body.addEventListener('touchend', onTouchEnd);
    //body.addEventListener('touchcancel', onTouchEnd);
}

//mouseEventHandlers();
touchEventHandlers();

