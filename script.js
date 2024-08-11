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
var swiper = new Swiper(".mySwiperslider", {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay:{
        delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
    },
    history: {
      key: "slide",
    },
  });
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 16,
    autoplay:{
        delay:3000
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  //Check if device is online or offline
  window.addEventListener('load', function() {
    // Function to check the online/offline status
    function checkConnection() {
        if (!navigator.onLine) {
            alert("No internet connection");
            document.getElementById('container').style.display = 'none';
            document.getElementById('no-connection').style.display = 'block';
        }
    }

    // Check the connection status when the page loads
    checkConnection();

    // Listen for changes in the online/offline status
    window.addEventListener('offline', function() {
        alert("No internet connection");
        document.getElementById('container').style.display = 'none';
        document.getElementById('no-connection').style.display = 'block';
    });

    window.addEventListener('online', function() {
        alert("Internet connection restored");
        document.getElementById('container').style.display = 'block';
        document.getElementById('no-connection').style.display = 'none';
    });
});
