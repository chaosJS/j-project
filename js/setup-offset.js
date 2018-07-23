!function () {
    let specialTags = document.querySelectorAll('[data-x]')
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')
    }

    findCloseEle()
    window.onscroll = function (e) {
        // console.log(window.scrollY);
        window.scrollY > 0 ? topNavBar.classList.add('sticky') : topNavBar.classList.remove('sticky')

        findCloseEle();
    }


    function findCloseEle() {
        let specialTags = document.querySelectorAll('[data-x]')
        let minIndex = 0;

        for (let i = 1; i < specialTags.length; i++) {
            if (
                Math.abs(specialTags[i].offsetTop - window.scrollY)
                <
                Math.abs(specialTags[minIndex].offsetTop - window.scrollY)
            ) {
                minIndex = i
            }
        }

        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id;
        let a = document.querySelector(`a[href="#${id}"]`);
        let li = a.parentElement;
        let aSlibings = li.parentElement.children;
        for (let i = 0; i < aSlibings.length; i++) {
            aSlibings[i].classList.remove('highlight')
        }
        li.classList.add('highlight');
    }
}.call()