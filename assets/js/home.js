/**
 * Homepage JavaScript for Multiplicity: Roads Not Taken
 * Implements typewriter effect and scroll-triggered banner shrink
 */

document.addEventListener('DOMContentLoaded', function() {
  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Initialize features
  initTypewriterEffect(prefersReducedMotion);
  initScrollShrink(prefersReducedMotion);
});

/**
 * Typewriter effect for homepage tagline
 * @param {boolean} prefersReducedMotion - Whether user prefers reduced motion
 */
function initTypewriterEffect(prefersReducedMotion) {
  const typewriterElement = document.getElementById('typewriter-text');
  const cursorElement = document.querySelector('.typewriter-cursor');

  if (!typewriterElement || !cursorElement) {
    console.warn('Typewriter elements not found');
    return;
  }

  // Phrases to cycle through
  const phrases = [
    "Explore the roads not taken.",
    "Causal inference for curious minds.",
    "Research education reimagined.",
    "What if things had been different?",
    "Understanding cause and effect."
  ];

  // Typewriter settings
  const settings = {
    typingSpeed: 70,    // ms per character when typing
    deletingSpeed: 40,  // ms per character when deleting
    pauseTime: 2000,    // ms to pause between phrases
    startDelay: 1000    // ms before starting
  };

  // If user prefers reduced motion, show static text and hide cursor
  if (prefersReducedMotion) {
    typewriterElement.textContent = phrases[0];
    cursorElement.style.display = 'none';
    return;
  }

  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let isPaused = false;

  // Typewriter animation function
  function typeWriter() {
    if (isPaused) return;

    const currentPhrase = phrases[currentPhraseIndex];

    if (!isDeleting) {
      // Typing phase
      typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex + 1);
      currentCharIndex++;

      if (currentCharIndex === currentPhrase.length) {
        // Finished typing, pause then start deleting
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
          isDeleting = true;
          typeWriter();
        }, settings.pauseTime);
        return;
      }
    } else {
      // Deleting phase
      typewriterElement.textContent = currentPhrase.substring(0, currentCharIndex - 1);
      currentCharIndex--;

      if (currentCharIndex === 0) {
        // Finished deleting, move to next phrase
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      }
    }

    // Schedule next character
    const speed = isDeleting ? settings.deletingSpeed : settings.typingSpeed;
    setTimeout(typeWriter, speed);
  }

  // Start typewriter after initial delay
  setTimeout(typeWriter, settings.startDelay);

  // Blink cursor animation
  let cursorVisible = true;
  setInterval(() => {
    cursorVisible = !cursorVisible;
    cursorElement.style.opacity = cursorVisible ? '1' : '0';
  }, 500);
}

/**
 * Scroll-triggered banner shrink effect
 * @param {boolean} prefersReducedMotion - Whether user prefers reduced motion
 */
function initScrollShrink(prefersReducedMotion) {
  const banner = document.getElementById('banner');

  if (!banner) {
    console.warn('Banner element not found');
    return;
  }

  // If user prefers reduced motion, use static banner
  if (prefersReducedMotion) {
    banner.classList.add('banner--shrunk');
    return;
  }

  let ticking = false;
  let isShrunk = false;

  // Throttled scroll handler
  function handleScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        const shrinkThreshold = 100; // pixels

        if (scrollY > shrinkThreshold && !isShrunk) {
          banner.classList.add('banner--shrunk');
          isShrunk = true;
        } else if (scrollY <= shrinkThreshold && isShrunk) {
          banner.classList.remove('banner--shrunk');
          isShrunk = false;
        }

        ticking = false;
      });

      ticking = true;
    }
  }

  // Initial check
  handleScroll();

  // Add scroll event listener with passive option for performance
  window.addEventListener('scroll', handleScroll, { passive: true });

  // Handle resize events
  window.addEventListener('resize', handleScroll, { passive: true });
}

/**
 * Utility function to check if element is in viewport
 * @param {HTMLElement} element - The element to check
 * @param {number} offset - Optional offset from viewport edges
 * @returns {boolean} Whether element is in viewport
 */
function isInViewport(element, offset = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 - offset &&
    rect.left >= 0 - offset &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) + offset
  );
}

/**
 * Smooth scroll to anchor links
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip if it's just "#" or empty
      if (href === '#' || href === '') return;

      const targetElement = document.querySelector(href);

      if (targetElement) {
        e.preventDefault();

        // Check for reduced motion
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prefersReducedMotion) {
          // Instant scroll for reduced motion preference
          targetElement.scrollIntoView();
        } else {
          // Smooth scroll
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Initialize smooth scroll
document.addEventListener('DOMContentLoaded', initSmoothScroll);

/**
 * Mobile menu toggle
 */
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const siteNav = document.querySelector('.site-nav');

  if (!menuToggle || !siteNav) return;

  menuToggle.addEventListener('click', function() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';

    // Toggle menu visibility
    this.setAttribute('aria-expanded', !isExpanded);
    siteNav.classList.toggle('is-open');

    // Update button text for screen readers
    const menuState = !isExpanded ? 'expanded' : 'collapsed';
    this.setAttribute('aria-label', `Navigation menu ${menuState}`);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
    }
  });

  // Close menu on escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && siteNav.classList.contains('is-open')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      siteNav.classList.remove('is-open');
      menuToggle.focus();
    }
  });
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', initMobileMenu);

/**
 * Form validation for contact form
 */
function initFormValidation() {
  const contactForm = document.getElementById('contact-form');

  if (!contactForm) return;

  contactForm.addEventListener('submit', function(event) {
    // Basic validation
    const name = this.querySelector('#name');
    const email = this.querySelector('#email');
    const message = this.querySelector('#message');

    let isValid = true;

    // Reset previous error states
    [name, email, message].forEach(field => {
      field.classList.remove('error');
      const errorElement = field.nextElementSibling;
      if (errorElement && errorElement.classList.contains('form-error')) {
        errorElement.remove();
      }
    });

    // Validate name
    if (!name.value.trim()) {
      showError(name, 'Please enter your name');
      isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
      showError(email, 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      showError(email, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      showError(message, 'Please enter your message');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters');
      isValid = false;
    }

    if (!isValid) {
      event.preventDefault();
      event.stopPropagation();
    }
  });

  function showError(field, message) {
    field.classList.add('error');

    const errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    errorElement.textContent = message;
    errorElement.setAttribute('role', 'alert');

    field.parentNode.insertBefore(errorElement, field.nextSibling);
    field.focus();
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

// Initialize form validation
document.addEventListener('DOMContentLoaded', initFormValidation);

/**
 * Performance optimization: Lazy load images
 */
function initLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img.lazy').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

/**
 * Accessibility: Skip to content link
 */
function initSkipToContent() {
  const skipLink = document.querySelector('.skip-to-content');
  const mainContent = document.getElementById('main-content');

  if (!skipLink || !mainContent) return;

  skipLink.addEventListener('click', function(e) {
    e.preventDefault();
    mainContent.setAttribute('tabindex', '-1');
    mainContent.focus();

    // Remove tabindex after focus
    setTimeout(() => {
      mainContent.removeAttribute('tabindex');
    }, 1000);
  });
}

// Initialize skip to content
document.addEventListener('DOMContentLoaded', initSkipToContent);