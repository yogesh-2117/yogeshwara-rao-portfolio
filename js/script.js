document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		const href = link.getAttribute('href');
		const target = href && href !== '#' ? document.getElementById(href.slice(1)) : null;

		if (!target) {
			return;
		}

		event.preventDefault();
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		history.pushState(null, '', href);
	});
});
