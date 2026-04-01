---
layout: page
layout_style: 'sophisticated'
toc: false
title: "Blog"
description: "Research paper summaries, methodological insights, and updates on causal inference developments."
---

<div class="content-block">
  <h2>Causal Inference Research Blog</h2>

  <p>Welcome to our research blog, where we summarize and discuss recent developments in causal inference. Each post focuses on a published research paper, providing an accessible summary, critical analysis, and connections to related work.</p>

  <div class="content-grid">
    <!-- Blog posts will be automatically listed here -->
    {% for post in site.posts %}
      <div class="content-grid-card">
        <div class="content-grid-card-header">
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <div class="content-grid-card-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}">
              {{ post.date | date: "%B %-d, %Y" }}
            </time>
            {% if post.tags.size > 0 %}
              •
              {% for tag in post.tags %}
                <a href="{{ site.baseurl }}/blog/tags/#{{ tag | slugify }}" class="tag">{{ tag }}</a>
              {% endfor %}
            {% endif %}
          </div>
        </div>
        <div class="content-grid-card-body">
          <p>{{ post.excerpt | strip_html | truncatewords: 50 }}</p>
        </div>
        <div class="content-grid-card-footer">
          <a href="{{ post.url | relative_url }}" class="button button-text">
            Read full summary →
          </a>
        </div>
      </div>
    {% else %}
      <div class="content-empty-state">
        <h3>No posts yet</h3>
        <p>Check back soon for research paper summaries and methodological insights.</p>
      </div>
    {% endfor %}
  </div>
</div>

</div>

<div class="content-block">
  <h2>Blog Post Format</h2>

  <div class="content-card">
    <p>Each blog post follows a consistent structure designed to make research accessible:</p>

    <h3>1. MLA Citation</h3>
    <p>Full citation with clickable DOI link to the original paper.</p>

    <h3>2. Summary (300-400 words)</h3>
    <p>Concise summary highlighting:</p>
    <ul>
      <li>Research question and motivation</li>
      <li>Key methodological contribution</li>
      <li>Main findings and implications</li>
      <li>Limitations and future directions</li>
    </ul>

    <h3>3. Related Papers (max 3)</h3>
    <p>Citations to foundational or complementary work with brief explanations of connections.</p>

    <h3>4. Tags (max 3)</h3>
    <p>Specific causal inference methods and concepts covered.</p>
  </div>
</div>

</div>

<div class="content-block">
  <h2>Topics Covered</h2>

  <div class="content-card">
    <p>Our blog covers the full spectrum of causal inference research:</p>

    <h3>Methodological Advances</h3>
    <ul>
      <li>New estimation techniques</li>
      <li>Inference under weaker assumptions</li>
      <li>High-dimensional settings</li>
      <li>Machine learning integration</li>
      <li>Bayesian methods</li>
      <li>Sensitivity analysis</li>
    </ul>

    <h3>Application Areas</h3>
    <ul>
      <li>Economics and econometrics</li>
      <li>Epidemiology and public health</li>
      <li>Education research</li>
      <li>Political science</li>
      <li>Computer science and AI</li>
      <li>Social policy evaluation</li>
    </ul>

    <h3>Foundational Concepts</h3>
    <ul>
      <li>Potential outcomes framework</li>
      <li>Directed acyclic graphs</li>
      <li>Identification strategies</li>
      <li>Experimental design</li>
      <li>Measurement and validation</li>
      <li>Ethical considerations</li>
    </ul>
  </div>
</div>

</div>

<div class="content-block">
  <h2>Submission Guidelines</h2>

  <div class="content-card">
    <p>We welcome guest contributions from researchers, practitioners, and students. To submit a blog post:</p>

    <h3>Requirements</h3>
    <ol>
      <li><strong>Paper selection</strong>: Recent (last 3 years) publication in peer-reviewed journal</li>
      <li><strong>Citation</strong>: Complete MLA format with DOI</li>
      <li><strong>Summary</strong>: 300-400 words, accessible to graduate students</li>
      <li><strong>Related papers</strong>: 1-3 citations with connection explanations</li>
      <li><strong>Tags</strong>: 1-3 relevant tags (lowercase, hyphenated)</li>
    </ol>

    <h3>Review Process</h3>
    <ol>
      <li><strong>Initial screening</strong>: Within 1 week of submission</li>
      <li><strong>Editorial review</strong>: Feedback on clarity and accessibility</li>
      <li><strong>Final approval</strong>: After revisions, if needed</li>
      <li><strong>Publication</strong>: Within 2-4 weeks of submission</li>
    </ol>

    <h3>How to Submit</h3>
    <p>Email submissions to <a href="mailto:zephyr.v@outlook.com">zephyr.v@outlook.com</a> with:</p>
    <ul>
      <li>Subject: "Blog Submission: [Paper Title]"</li>
      <li>Your name and affiliation (optional)</li>
      <li>Draft in Markdown format</li>
      <li>PDF of the paper</li>
    </ul>
  </div>
</div>

</div>

<div class="content-block">
  <h2>Stay Updated</h2>

  <div class="content-card">
    <p>Subscribe to our newsletter to receive:</p>
    <ul>
      <li>New blog post announcements</li>
      <li>Monthly research roundups</li>
      <li>Conference and workshop updates</li>
      <li>Resource recommendations</li>
    </ul>
    <p><a href="#" class="button button-primary">Subscribe to updates</a> (coming soon)</p>
  </div>
</div>

<div class="content-block">
  <h2>Archive</h2>

  <div class="content-card">
    <h3>By Year</h3>
    {% for post in site.posts %}
      {% assign currentdate = post.date | date: "%Y" %}
      {% if currentdate != date %}
        {% unless forloop.first %}</ul>{% endunless %}
        <h4 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h4>
        <ul>
        {% assign date = currentdate %}
      {% endif %}
        <li>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          <span class="post-date">({{ post.date | date: "%B %-d" }})</span>
        </li>
      {% if forloop.last %}</ul>{% endif %}
    {% endfor %}

    <h3>By Tag</h3>
    {% assign tags = site.tags | sort %}
    {% for tag in tags %}
      <h4 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h4>
      <ul>
        {% for post in tag[1] %}
          <li>
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            <span class="post-date">({{ post.date | date: "%B %-d, %Y" }})</span>
          </li>
        {% endfor %}
      </ul>
    {% endfor %}
  </div>
</div>

<div class="content-quote">
  "Research is to see what everybody else has seen, and to think what nobody else has thought."
  <div class="content-quote-author">— Albert Szent-Györgyi</div>
</div>