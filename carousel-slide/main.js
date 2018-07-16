let $buttons = $('#buttonWrapper>button');
let $slides = $('#slides');
let $images = $slides.children('img');
let $firstCopy = $images.eq(0).clone(true);
let $lastCopy = $images.eq($images.length - 1).clone(true);

$slides.append($firstCopy);
$slides.prepend($lastCopy);
$slides.css({ transform: 'translateX(-600px)' })

let current = 0;
$buttons.eq(0).on('click', () => {
    if (current === 2) {
        console.log('从最后一张切到第一张')
        $slides.css({ transform: 'translateX(-2400px)' })
            .one('transitionend', () => {
                $slides.hide().offset();
                $slides.css({ transform: 'translateX(-600px)' }).show()
            })
    } else {
        $slides.css({ transform: 'translateX(-600px)' });
        current = 0;
    }
})

$buttons.eq(1).on('click', () => {
    console.log(current)
    $slides.css({ transform: 'translateX(-1200px)' });
    current = 1;
})

$buttons.eq(2).on('click', () => {
    if (current === 0) {
        console.log('从第一张切到最后一张')
        $slides.css({ transform: 'translateX(0px)' })
            .one('transitionend', () => {
                $slides.hide().offset();
                $slides.css({ transform: 'translateX(-1800px)' }).show()
            })
    } else {
        $slides.css({ transform: 'translateX(-1800px)' });
        current = 2;
    }
})