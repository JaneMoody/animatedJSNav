const sections = document.querySelectorAll('section');
const fly = document.querySelector('.fly');
const gradients =[
    "linear-gradient(to right, #0cebeb, #20e3b2, #29ffc6)",
    "linear-gradient(to right, #06beb6, #48b1bf)",
    "linear-gradient(to right, #36d1dc, #5b86e5)"
];

const options = {
    threshold: 0.7
};

let observer = new IntersectionObserver(navCheck, options);

function navCheck(entries){
    entries.forEach(entry => {
        const className = entry.target.className;
        const activeAnchor = document.querySelector(`[data-page=${className}]`);
        const gradientIndex = entry.target.getAttribute("data-Index");
        const coords = activeAnchor.getBoundingClientRect();
        const directions = {
            height: coords.height,
            width: coords.width,
            top: coords.top,
            left: coords.left
        };
        if (entry.isIntersecting) {
            fly.style.setProperty("left", `${directions.left}px`);
            fly.style.setProperty("top", `${directions.top}px`);
            fly.style.setProperty("width", `${directions.width}px`);
            fly.style.setProperty("height", `${directions.height}px`);

        }
    });
}

sections.forEach(section => {
    observer.observe(section);
});