// resizeHandler.js

function adjustLayout() {
    const width = window.innerWidth;

    const content = document.querySelector('.content'); // Adjust this to your actual content class
    const footer = document.querySelector('.footer'); // Adjust this to your actual footer class
    const textElements = document.querySelectorAll('.text'); // Adjust this selector for your text elements

    if (width < 600) { // Example for mobile
        content.style.fontSize = '14px';
        footer.style.display = 'none'; // Hide footer for mobile
        textElements.forEach(element => {
            element.style.fontSize = '12px'; // Smaller text for mobile
        });
    } else if (width >= 600 && width < 1200) { // Example for tablet
        content.style.fontSize = '16px';
        footer.style.display = 'block'; // Show footer for tablet
        textElements.forEach(element => {
            element.style.fontSize = '14px'; // Medium text for tablet
        });
    } else { // Desktop
        content.style.fontSize = '18px';
        footer.style.display = 'block'; // Show footer for desktop
        textElements.forEach(element => {
            element.style.fontSize = '16px'; // Larger text for desktop
        });
    }
}

// Call the function on load
window.onload = adjustLayout;

// Call the function on resize
window.onresize = adjustLayout;
