---
layout: home
layout_style: 'sophisticated'
title: "Multiplicity: Roads Not Taken"
description: "An educational website on causal inference, exploring alternative paths - the 'what ifs' - as in Rubin's potential outcomes model."
---

<div class="banner" id="banner">
  <div class="banner-content">
    <h1 class="banner-title">Multiplicity: Roads Not Taken</h1>
    <div class="banner-typewriter" aria-live="polite">
      <span id="typewriter-text"></span>
      <span class="typewriter-cursor" aria-hidden="true"></span>
    </div>
  </div>

  <div class="banner-nav">
    <a href="{{ site.baseurl }}/" class="banner-logo">Multiplicity</a>
    <ul class="banner-nav-links">
      {% for item in site.data.navigation %}
        <li><a href="{{ site.baseurl }}{{ item.link }}" class="banner-nav-link">{{ item.name }}</a></li>
      {% endfor %}
    </ul>
  </div>

  <div class="scroll-indicator">
    <svg class="scroll-indicator-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M12 5v14M5 12l7 7 7-7"/>
    </svg>
    Scroll to explore
  </div>
</div>

<div class="content-blocks">
<div class="content-block content-block-hero">
<main class="container">
  <!-- Robert Frost Poem Section -->
  <section class="poem-section">
    <div class="poem-container">
      <h2 class="poem-title">The Road Not Taken</h2>
      <p class="poem-author">by Robert Frost</p>
      <div class="poem-content">
        <div class="poem-stanza">
          Two roads diverged in a yellow wood,<br>
          And sorry I could not travel both<br>
          And be one traveler, long I stood<br>
          And looked down one as far as I could<br>
          To where it bent in the undergrowth;
        </div>
        <div class="poem-stanza">
          Then took the other, as just as fair,<br>
          And having perhaps the better claim,<br>
          Because it was grassy and wanted wear;<br>
          Though as for that the passing there<br>
          Had worn them really about the same,
        </div>
        <div class="poem-stanza">
          And both that morning equally lay<br>
          In leaves no step had trodden black.<br>
          Oh, I kept the first for another day!<br>
          Yet knowing how way leads on to way,<br>
          I doubted if I should ever come back.
        </div>
        <div class="poem-stanza">
          I shall be telling this with a sigh<br>
          Somewhere ages and ages hence:<br>
          Two roads diverged in a wood, and I—<br>
          I took the one less traveled by,<br>
          And that has made all the difference.
        </div>
      </div>
    </div>
  </section>

  <!-- Personal Story Section -->
  <section class="personal-story">
    <div class="story-container">
      <h2 class="story-title">A Personal Reflection: The Road Not Taken</h2>
      <div class="story-content">
        <p>
          This website is born from a personal journey—one that grapples with the very essence of "what if."
          After six years immersed in the study of international and development economics, pursuing a Ph.D.
          that promised a clear academic path, I made the difficult decision to step away. The road ahead
          seemed certain: publish, teach, contribute to the field. Yet another path called—one less defined,
          but brimming with different possibilities.
        </p>
        <p>
          That choice, like Frost's traveler, was made with both hesitation and conviction. It left me
          wondering about the alternative reality—the one where I stayed. What discoveries might I have
          made? What contributions could I have offered? This curiosity about unseen outcomes, about the
          roads not taken, is at the heart of causal inference.
        </p>
        <p>
          In research, as in life, we observe only one realized path. We see the treatment received,
          the policy implemented, the choice made. But what about the counterfactual? What would have
          happened under a different condition? Rubin's potential outcomes framework gives us the language
          to ask these questions rigorously. It reminds us that every observed outcome is just one
          realization among many possible worlds.
        </p>
        <p>
          This project is my attempt to explore those other worlds—not just in my personal narrative,
          but in the scientific pursuit of understanding cause and effect. Through education, resources,
          and community, I hope to help others navigate their own diverging paths, whether in research,
          policy, or personal decision-making.
        </p>
      </div>
    </div>
  </section>

  <!-- Courses Section -->
  <section class="courses-section">
    <div class="container">
      <h2 class="section-title">Educational Courses</h2>
      <p class="section-subtitle">
        Four levels of causal inference education, from fundamentals to advanced topics
      </p>

      <div class="course-grid">
        {% for course in site.data.site.courses %}
          <div class="course-card">
            <div class="course-card-header">
              <h3 class="course-card-title">{{ course.title }}</h3>
              <span class="course-card-level">{{ course.level }}</span>
            </div>
            <div class="course-card-body">
              <p class="course-card-description">{{ course.description }}</p>
            </div>
            <div class="course-card-footer">
              <a href="{{ site.baseurl }}/courses/#{{ course.title | slugify }}" class="button button-text">
                Learn more →
              </a>
            </div>
          </div>
        {% endfor %}
      </div>
    </div>
  </section>
</main>
</div>
</div>

<script src="{{ site.baseurl }}/assets/js/home.js" defer></script>

