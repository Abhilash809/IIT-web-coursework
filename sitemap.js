console.log("sitemap.js is connected!");

document.addEventListener('DOMContentLoaded', function() {
    // Make nodes keyboard accessible
    const nodes = document.querySelectorAll('.node-link');

    nodes.forEach(node => {
        node.setAttribute('tabindex', '0');

        node.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // Add aria-labels for accessibility
    const svgNodes = document.querySelectorAll('.node');
    svgNodes.forEach(node => {
        const altText = node.getAttribute('data-alt');
        if (altText) {
            node.setAttribute('aria-label', altText);
        }
    });

    // Focus styles for keyboard navigation
    document.addEventListener('keyup', function(e) {
        if (e.key === 'Tab') {
            const focusedElement = document.activeElement;
            if (focusedElement.classList.contains('node-link')) {
                const targetNode = focusedElement.querySelector('.node');
                if (targetNode) {
                    targetNode.setAttribute('filter', 'url(#glow)');
                }
            }
        }
    });
});
