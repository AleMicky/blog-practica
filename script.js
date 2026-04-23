const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const chips = document.querySelectorAll('.chip');
const cards = document.querySelectorAll('.card');
const form = document.querySelector('#newsletter-form');
const message = document.querySelector('#form-message');

if (menuToggle && menu) {
	menuToggle.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});
}

chips.forEach((chip) => {
	chip.addEventListener('click', () => {
		chips.forEach((item) => item.classList.remove('active'));
		chip.classList.add('active');

		const filter = chip.dataset.filter;
		cards.forEach((card) => {
			const match = filter === 'all' || card.dataset.tag === filter;
			card.style.display = match ? 'block' : 'none';
		});
	});
});

if (form && message) {
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const emailInput = document.querySelector('#email');
		const emailValue = emailInput ? emailInput.value.trim() : '';

		if (!emailValue.includes('@')) {
			message.textContent = 'Ingresa un correo valido para suscribirte.';
			return;
		}

		message.textContent = 'Gracias por suscribirte a ByteVista.';
		form.reset();
	});
}

const revealTargets = document.querySelectorAll('.hero-copy, .hero-panel, .card, .metric, .newsletter, .product-card');
revealTargets.forEach((element, index) => {
	element.classList.add('reveal');
	element.style.animationDelay = `${index * 0.08}s`;
});
