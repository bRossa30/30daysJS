const inputs = document.querySelectorAll('.controls input');

function updateVariable() {
    const sizing = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing);
}
inputs.forEach(input => input.addEventListener('change', updateVariable));
inputs.forEach(input => input.addEventListener('mousemove', updateVariable));

