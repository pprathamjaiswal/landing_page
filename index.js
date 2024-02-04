function showSidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = "flex"
}

function hidesidebar(){
	const sidebar = document.querySelector('.sidebar')
	sidebar.style.display = "none"
}

// let list = document.querySelector('.slider .list');
// let items = document.querySelectorAll('.slider .list .item');
// let prev = document.getElementById('prev');
// let next = document.getElementById('next');
// let active = 0;
// let lengthItem = items.length -1;

// next.onclick = function(){
// 	if(active + 1 > lengthItem){
// 		active = 0;
// 	}else{
// 		active = active + 1;
// 	}
// 	reloadSlider();
// }

// function reloadSlider(){
// 	let checkleft = items[active].offsetLeft;
// 	list.style.left = -checkleft + 'px';
// 	// let checkright = items[active].offsetRight;
// 	// list.style.right = -checkright + 'px';
	
// }

let currentSlide = 0;

function showSlide(index) {
	const slider = document.querySelector('.slider');
	const totalSlides = document.querySelectorAll('.slide').length;

	if (index >= totalSlides) {
		currentSlide = 0;
	} else if (index < 0) {
		currentSlide = totalSlides - 1;
	} else {
		currentSlide = index;
	}

	const translateValue = -currentSlide * 100 + '%';
	slider.style.transform = `translateX(${translateValue})`;
}

function prevSlide() {
	showSlide(currentSlide - 1);
}

function nextSlide() {
	showSlide(currentSlide + 1);
}