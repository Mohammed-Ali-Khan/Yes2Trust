// Section navigation and visibility logic
document.addEventListener('DOMContentLoaded', function() {
    const sections = {
        about: document.getElementById('about'),
        products: document.getElementById('products'),
        contact: document.getElementById('contact')
    };
    function showSection(section) {
        for (const key in sections) {
            sections[key].style.display = (key === section) ? '' : 'none';
        }
        // Highlight active nav link
        document.querySelectorAll('nav a[data-section]').forEach(link => {
            if (link.getAttribute('data-section') === section) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    // Default landing: products
    showSection('products');
    // Navigation click handler
    document.querySelectorAll('nav a[data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            showSection(section);
        });
    });
});
