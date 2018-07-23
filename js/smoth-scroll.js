!function () {
    let liTags = document.querySelectorAll('nav.menu>ul>li');
    for (let i = 0; i < liTags.length; i++) {
        liTags[i].onmouseenter = function (e) {
            e.currentTarget.classList.add('active');

        }

        liTags[i].onmouseleave = function (e) {
            e.currentTarget.classList.remove('active');

        }
    }

    function animate(time) {
        requestAnimationFrame(animate);
        TWEEN.update(time);
    }
    requestAnimationFrame(animate);
    let aTags = document.querySelectorAll('nav.menu>ul>li>a');
    for (let i = 0; i < aTags.length; i++) {
        aTags[i].onclick = function (e) {
            e.preventDefault();
            let href = e.currentTarget.getAttribute('href');
            let ele = document.querySelector(href);

            let top = ele.offsetTop;//目标元素距离顶部距离

            let currentTop = window.scrollY; //
            let targetTop = top - 70;
            let distance = (targetTop - currentTop)

            var coords = { y: currentTop };
            let t = Math.abs(distance / 100 * 300);
            t > 500 ? 500 : t;

            var tween = new TWEEN.Tween(coords)
                .to({ y: targetTop }, 1000)
                .easing(TWEEN.Easing.Bounce.Out)
                .onUpdate(function () { // Called after tween.js updates 'coords'.
                    window.scrollTo(0, coords.y)

                })
                .start(); // Start the tween immediately.

        }
    }
}.call()