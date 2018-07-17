var allButtons = $('#buttons > span');
for (let i = 0; i < allButtons.length; i++) {
	$(allButtons[i]).on('click', function (x) {
		var index = $(x.currentTarget).index()
		var p = index * -920
		$('#images').css({
			transform: 'translate(' + p + 'px)'
		})
		n = index
		activeButton(allButtons.eq(n))
	})
}



var n = 0;
var size = allButtons.length
allButtons.eq(n % size).trigger('click')


var timerId = setTimer()

function setTimer() {
	return setInterval(() => {
		n += 1
		allButtons.eq(n % size).trigger('click')
	}, 3000)
}

function activeButton($button) {
	$button
		.addClass('active')
		.siblings('.active').removeClass('active')
}

$('.window').on('mouseenter', function () {
	window.clearInterval(timerId)
})

$('.window').on('mouseleave', function () {
	timerId = setTimer()
})