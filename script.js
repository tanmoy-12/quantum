document.addEventListener('DOMContentLoaded', function() {
  const brandContainer = document.querySelector('.brandContainer');

  function scrollCarousel() {
      const lastElement = brandContainer.lastElementChild;
      const clone = lastElement.cloneNode(true);
      brandContainer.insertBefore(clone, brandContainer.firstElementChild);
      brandContainer.removeChild(lastElement);
  }

  setInterval(scrollCarousel, 1000);
});


