var op1 = document.querySelector('#op1');
var ticking = false;

// test if element is at least partial in viewport
function isElementVisible(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.bottom >= 0 ||
        rect.right >= 0 ||
        rect.top <= window.innerHeight ||
        rect.left <= window.innerWidth
    );
}

window.addEventListener('scroll', function () {
    // call only once per animation frame
    if (!ticking) {
        window.requestAnimationFrame(function () {
            // the animated element is the parent of the animate element
            if (isElementVisible(op1.parentElement)) {
                op1.beginElement();
            }
            ticking = false;
        });

        ticking = true;
    }
});
