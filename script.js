AOS.init();



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
    const customAlert = document.getElementById('custom-alert');

    // Function to show the custom alert
    function showCustomAlert(message) {
        customAlert.querySelector('p').textContent = message;
        customAlert.style.display = 'flex';
        setTimeout(hideCustomAlert, 3000); // Automatically hide after 3 seconds
    }

    // Function to hide the custom alert
    function hideCustomAlert() {
        customAlert.style.display = 'none';
    }

    // Check the connection status when the page loads
    function checkConnection() {
        if (!navigator.onLine) {
            showCustomAlert("🌐 No internet connection");
            document.getElementById('container').style.display = 'none';
            document.getElementById('no-connection').style.display = 'block';
        }
    }

    // Check the connection when the page loads
    checkConnection();

    // Listen for offline events
    window.addEventListener('offline', function() {
        showCustomAlert("🌐 No internet connection");
        document.getElementById('container').style.display = 'none';
        document.getElementById('no-connection').style.display = 'block';
    });

    // Listen for online events
    window.addEventListener('online', function() {
        showCustomAlert("ᯤ Connection restored");
        document.getElementById('container').style.display = 'block';
        document.getElementById('no-connection').style.display = 'none';
        setTimeout(function() {
            location.reload(); // Reload the page after showing the alert
        }, 3000);
    });
});
