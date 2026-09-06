document.getElementById('year').textContent = new Date().getFullYear();

function animateScrollTo(targetTop) {
	const startTop = window.scrollY;
	const distance = targetTop - startTop;
	const duration = 420;
	const startTime = performance.now();

	function step(currentTime) {
		const progress = Math.min((currentTime - startTime) / duration, 1);
		const easedProgress = 1 - Math.pow(1 - progress, 3);

		window.scrollTo(0, startTop + distance * easedProgress);

		if (progress < 1) {
			requestAnimationFrame(step);
		}
	}

	requestAnimationFrame(step);
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		const href = link.getAttribute('href');
		const target = href && href !== '#' ? document.getElementById(href.slice(1)) : null;

		if (!target) {
			return;
		}

		event.preventDefault();
		const header = document.querySelector('.site-header');
		const headerHeight = header ? header.offsetHeight : 0;
		const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight;

		animateScrollTo(Math.max(0, targetTop));
		history.pushState(null, '', href);
	});
});
