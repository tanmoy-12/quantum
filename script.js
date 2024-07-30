document.addEventListener('DOMContentLoaded', function() {
    const brandContainer = document.querySelector('.brandContainer');
    const brandContents = Array.from(document.querySelectorAll('.brandContent'));

    // Duplicate the brand contents to create an infinite loop effect
    brandContents.forEach(brandContent => {
        const clone = brandContent.cloneNode(true);
        brandContainer.appendChild(clone);
    });

    let currentScroll = 0;
    const scrollSpeed = 1; // Adjust the scroll speed as needed

    function scrollBrands() {
        currentScroll += scrollSpeed;
        if (currentScroll >= brandContainer.scrollWidth / 2) {
            currentScroll = 0;
        }
        brandContainer.scrollLeft = currentScroll;
        requestAnimationFrame(scrollBrands);
    }

    scrollBrands();
});
