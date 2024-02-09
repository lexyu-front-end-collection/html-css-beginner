const scrollers = document.querySelectorAll(".scroller");

// console.log(scrollers);

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-redeced-motion: reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		scroller.setAttribute("data-animated", true);

		const scrollerInner = scroller.querySelector(".scroller_inner");
		// console.log(scrollerInner);
		const scrollerContent = Array.from(scrollerInner.children);
		// console.log(scrollerContent);

		scrollerContent.forEach(item => {
			const duplicatedItem = item.cloneNode(true);
			// console.log(duplicatedItem);
			duplicatedItem.setAttribute('aria-hidden', true);
			scrollerInner.appendChild(duplicatedItem);
		})
	});


}
