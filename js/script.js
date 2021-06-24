document.addEventListener('DOMContentLoaded', () => {
// slider
const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    spaceBetween: 20,


    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      

	

	breakpoints: {
		992: {
			slidesPerView: 3,
			slidesPerGroup: 3,
		},
		768: {
			slidesPerView: 2,
			slidesPerGroup: 2,
		},
		576: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
		320: {
			slidesPerView: 1,
			slidesPerGroup: 1,
		},
	}


    });

  // accordion
	const trigger = document.querySelectorAll('.accordion__header'),
	 	  accSection = document.querySelectorAll('.accordion__item');
	
	trigger.forEach(item => {
		item.addEventListener('click', () => {
			const parent = item.parentNode;
			if (parent.classList.contains('active')) {
				parent.classList.remove('active');
			} else{
				accSection.forEach(child => {
					child.classList.remove('active');
					parent.classList.add('active');
				});
			}
		});
	});	 
	// popap
	const buttons = document.querySelectorAll('.button__goods'),
	  popap = document.querySelector('.overlay'),
	  popapClose = document.querySelector('.project-card__close');

	buttons.forEach(btn => {
		btn.addEventListener('click', () => {
			popap.classList.add('active');
		});
	});
	popapClose.addEventListener('click', () => {
		popap.classList.remove('active');
	});	

});


