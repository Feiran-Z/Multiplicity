/**
 * Sophisticated Layout JavaScript
 * Handles interactive features for the sophisticated layout
 */

document.addEventListener('DOMContentLoaded', function() {
  // Table of Contents toggle functionality
  const tocToggle = document.querySelector('.toc-toggle');
  const tocNav = document.querySelector('.toc-nav');

  if (tocToggle && tocNav) {
    // Initialize state - TOC is visible by default
    tocToggle.setAttribute('aria-expanded', 'true');

    tocToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      tocNav.style.display = isExpanded ? 'none' : 'block';
    });
  }

  // Smooth scrolling for anchor links in TOC
  const tocLinks = document.querySelectorAll('.toc-nav a[href^="#"]');
  tocLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        // Calculate offset for fixed header
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // Update URL without page jump
        history.pushState(null, null, targetId);

        // Highlight active TOC link
        tocLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
      }
    });
  });

  // Highlight current section in TOC while scrolling
  if (tocLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        if (id && entry.isIntersecting) {
          tocLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    // Observe all headings that have IDs
    document.querySelectorAll('h2[id], h3[id], h4[id]').forEach(heading => {
      observer.observe(heading);
    });
  }

  // Responsive sidebar behavior
  function handleSidebarResponsive() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    if (!sidebar || !mainContent) return;

    // On mobile, make sidebar sections collapsible
    if (window.innerWidth < 1024) {
      const sidebarSections = document.querySelectorAll('.sidebar-section');
      sidebarSections.forEach(section => {
        const title = section.querySelector('.sidebar-title');
        if (title && !title.classList.contains('collapsible-added')) {
          title.classList.add('collapsible-added');
          title.setAttribute('role', 'button');
          title.setAttribute('tabindex', '0');
          title.setAttribute('aria-expanded', 'true');

          // Create toggle icon
          const toggleIcon = document.createElement('span');
          toggleIcon.className = 'sidebar-toggle-icon';
          toggleIcon.innerHTML = '−';
          title.appendChild(toggleIcon);

          // Get content to collapse (everything except the title)
          const sectionContent = Array.from(section.children).filter(
            child => !child.classList.contains('sidebar-title')
          );

          // Wrap content in a container
          const contentContainer = document.createElement('div');
          contentContainer.className = 'sidebar-section-content';
          sectionContent.forEach(child => contentContainer.appendChild(child));
          section.appendChild(contentContainer);

          // Toggle functionality
          title.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            contentContainer.style.display = isExpanded ? 'none' : 'block';
            toggleIcon.textContent = isExpanded ? '+' : '−';
          });

          title.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              this.click();
            }
          });
        }
      });
    }
  }

  // Initialize responsive behavior
  handleSidebarResponsive();
  window.addEventListener('resize', handleSidebarResponsive);

  // Sticky sidebar on desktop
  function handleStickySidebar() {
    const sidebar = document.querySelector('.sidebar');
    const contentToc = document.querySelector('.content-toc');

    if (!sidebar || window.innerWidth < 1024) return;

    const sidebarTop = sidebar.offsetTop;
    const scrollTop = window.pageYOffset;
    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 80;

    if (scrollTop > sidebarTop - headerHeight) {
      sidebar.style.position = 'sticky';
      sidebar.style.top = `${headerHeight + 20}px`;
      sidebar.style.maxHeight = `calc(100vh - ${headerHeight + 40}px)`;
      sidebar.style.overflowY = 'auto';
    } else {
      sidebar.style.position = 'static';
      sidebar.style.maxHeight = 'none';
    }

    // Handle TOC sticky behavior
    if (contentToc && window.innerWidth >= 1024) {
      const tocTop = contentToc.offsetTop;

      if (scrollTop > tocTop - headerHeight) {
        contentToc.style.position = 'sticky';
        contentToc.style.top = `${headerHeight + 20}px`;
      } else {
        contentToc.style.position = 'static';
      }
    }
  }

  // Initialize sticky behavior
  window.addEventListener('scroll', handleStickySidebar);
  window.addEventListener('resize', handleStickySidebar);
  handleStickySidebar();

  // Enhance tag cloud with size based on count
  const sidebarTags = document.querySelectorAll('.sidebar-tag[data-count]');
  sidebarTags.forEach(tag => {
    const count = parseInt(tag.getAttribute('data-count'), 10);
    if (count > 0) {
      // Scale font size based on count (min 0.75rem, max 1rem)
      const minSize = 0.75;
      const maxSize = 1;
      const scale = Math.min(Math.log(count + 1) / Math.log(10), 1);
      const fontSize = minSize + (maxSize - minSize) * scale;

      tag.style.fontSize = `${fontSize}rem`;
      tag.style.padding = `${0.25 + scale * 0.25}rem ${0.5 + scale * 0.25}rem`;
    }
  });

  // Add subtle animation to content blocks on scroll
  const contentBlocks = document.querySelectorAll('.content-block');
  const blockObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  contentBlocks.forEach(block => {
    block.style.opacity = '0';
    block.style.transform = 'translateY(20px)';
    block.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    blockObserver.observe(block);
  });
});