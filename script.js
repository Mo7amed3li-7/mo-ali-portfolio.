// =============================================
// SCROLL TO TOP ON REFRESH + REPLAY ANIMATIONS
// =============================================

// Force scroll to top immediately before anything renders
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// We rely on CSS for the initial animation to prevent flashing.

// =============================================
// PARALLAX EFFECT FOR HERO IMAGE
// =============================================
document.addEventListener('mousemove', (e) => {
    const img = document.querySelector('.parallax-img');
    if (!img) return;
    
    // Calculate mouse position relative to center of screen
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    
    // Apply 3D rotation
    img.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Reset transform on mouse leave
document.addEventListener('mouseleave', () => {
    const img = document.querySelector('.parallax-img');
    if (img) {
        img.style.transform = `rotateY(0deg) rotateX(0deg)`;
    }
});