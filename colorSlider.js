// Swiper testimonial
const swiperTestimonial = new Swiper('.swiper.is-testimonial', {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  speed: 800,


  // And if we need scrollbar
     scrollbar: {
    el: ".swiper-drag-wrapper.is-testimonial",
      draggable: true,
      dragClass: "swiper-drag.is-testimonial",
      snapOnRelease: true
  }
});



// Swiper About image gallery
const swiperPrive = new Swiper('.swiper.is-prive', {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  spaceBetween: 16,
  grabCursor: true,
  speed: 800,


  // And if we need scrollbar
     scrollbar: {
    el: ".swiper-drag-wrapper.is-prive",
      draggable: true,
      dragClass: "swiper-drag.is-prive",
      snapOnRelease: true
  }
});


	
const rangeSlider = document.querySelector('.fs-rangeslider_input');
const tabsViews = document.querySelectorAll('.tabs_view-wrp');
const tabsContentItems = document.querySelectorAll('.tabs_content_item');
const contactTabs = document.querySelectorAll('.tab_link-contact');
const textColorElements = document.querySelectorAll('.tabs_view-wrp');
const tabLinks = document.querySelectorAll('.tab_link');
const checkboxBackgroundElements = document.querySelectorAll('.tabs_content_item-checkbox');
const testimonialItems = document.querySelectorAll('.testimonial_item');
const overlaySections = document.querySelectorAll('.overlay_section');
const priveGalleryItems = document.querySelectorAll('.prive_gallery-item');

rangeSlider.addEventListener('input', function() {
  const value = parseInt(this.value);

  switch (value) {
    case 1:
      tabsViews.forEach(view => {
        view.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
        view.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
      });
      tabsContentItems.forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
      });
      contactTabs.forEach(contact => {
        contact.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
				contact.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');        
				contact.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');      
      });
      checkboxBackgroundElements.forEach(checkbox => {
        checkbox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
      });
      tabLinks.forEach(link => {
    		link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
	    	link.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
  		});
  		testimonialItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
		  });
      overlaySections.forEach(section => {
    		section.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
		  });
      priveGalleryItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
  		});
      break;    
    case 2:
      tabsViews.forEach(view => {
        view.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
        view.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
      });
      tabsContentItems.forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
      });
      contactTabs.forEach(contact => {
        contact.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
				contact.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
				contact.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');			
      });
      checkboxBackgroundElements.forEach(checkbox => {
        checkbox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
      });
      tabLinks.forEach(link => {
    		link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
	    	link.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
  		});
  		testimonialItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
		  });
      overlaySections.forEach(section => {
    		section.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
		  });
      priveGalleryItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
  		});
      break;
    case 3:
      tabsViews.forEach(view => {
        view.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-5');
        view.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-10');
      });
      tabsContentItems.forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
      });
      contactTabs.forEach(contact => {
        contact.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
				contact.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-8');      
				contact.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');      
      });
      checkboxBackgroundElements.forEach(checkbox => {
        checkbox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-5');
      });
      tabLinks.forEach(link => {
    		link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
	    	link.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
  		});
  		testimonialItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
		  });
      overlaySections.forEach(section => {
    		section.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-5');
		  });
      priveGalleryItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-4');
  		});   
      break;
    case 4:
      tabsViews.forEach(view => {
        view.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
        view.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
      });
      tabsContentItems.forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
      });
      contactTabs.forEach(contact => {
        contact.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
				contact.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');      
				contact.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');      
      });
      checkboxBackgroundElements.forEach(checkbox => {
        checkbox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
      });
      tabLinks.forEach(link => {
    		link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
	    	link.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
  		});
  		testimonialItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
		  });
      overlaySections.forEach(section => {
    		section.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
		  });
      priveGalleryItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
  		});
      break;
    case 5:
      tabsViews.forEach(view => {
        view.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
        view.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
			});
      tabsContentItems.forEach(item => {
        item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
      });
      contactTabs.forEach(contact => {
        contact.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
				contact.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');      
				contact.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');      
      });
      checkboxBackgroundElements.forEach(checkbox => {
        checkbox.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
      });
      tabLinks.forEach(link => {
    		link.style.color = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
	    	link.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-3');
  		});
  		testimonialItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
		  });
      overlaySections.forEach(section => {
    		section.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-7');
		  });
      priveGalleryItems.forEach(item => {
    		item.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--swatch--color-6');
  		});    
      break;
    default:
      // Default state or any other behavior for other values
      break;
  }
});



