document.querySelectorAll('.accordion_button').forEach((item) => {
	item.addEventListener('click', (event) => {
		let accCollapse = item.nextElementSibling;

		if (!item.classList.contains('collapsing')) {
			// Open accordion item
			if (!item.classList.contains('open')) {

				accCollapse.style.display = 'block';
				let accHeight = accCollapse.clientHeight;
				console.log(accHeight);

				setTimeout(() => {
					accCollapse.style.height = accHeight + 'px';
					accCollapse.style.display = '';
				}, 1);

				accCollapse.classList = 'accordion_collapse collapsing';

				setTimeout(() => {
					accCollapse.classList = 'accordion_collapse collapse open';
				}, 300);
			}
			// Close accordion item
			else {
				accCollapse.classList = 'accordion_collapse collapsing';

				setTimeout(() => {
					accCollapse.style.height = '0px';
				}, 1);

				setTimeout(() => {
					accCollapse.classList = 'accordion_collapse collapse';
					accCollapse.style.height = '';
				}, 300);
			}

			item.classList.toggle('open');
		}
	});
});