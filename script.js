// Intersection Observer API for detecting when sections enter the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        } else {
            entry.target.classList.remove("is-visible"); // Remove class when not visible
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe all sections with the class 'fade-in-section'
document.querySelectorAll('.fade-in-section').forEach(section => {
    // Add the initial visibility class if the section is already in view
    if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add("is-visible");
    }
    observer.observe(section);
});

document.addEventListener("scroll", function() {
    const gif = document.querySelector('.scrolling-gif');
    const scrollY = window.scrollY; // Current scroll position
    const windowHeight = window.innerHeight; // Height of the viewport
    const documentHeight = document.documentElement.scrollHeight; // Total height of the document

    // Calculate maximum scroll position
    const maxScroll = documentHeight - windowHeight;

    // Determine GIF position with a slower speed
    const gifSpeedFactor = 0.062; // Control the GIF's speed (0.5 = half scroll speed)
    let gifPosition = scrollY * gifSpeedFactor;

    // Stop GIF at the bottom of the viewport when scroll reaches the end
    if (scrollY >= maxScroll) {
        gifPosition = maxScroll * gifSpeedFactor;
    }

    // Ensure GIF stays within the viewport
    gif.style.top = `${Math.min(gifPosition + 10, windowHeight - 100)}px`; // Adjust '100' based on GIF height
});

