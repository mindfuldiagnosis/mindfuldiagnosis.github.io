const sr = ScrollReveal ({
	distance: '65px',
	duration: 500,
	delay: 50,
	reset: true
});

sr.reveal('.hero-text', {delay:50, origin: 'top'});
sr.reveal('.hero-image', {delay:100, origin: 'top'});
sr.reveal('.icons', {delay:500, origin: 'left'});