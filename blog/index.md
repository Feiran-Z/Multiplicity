---
layout: page
title: "Blog"
description: "Research paper summaries, methodological insights, and updates on causal inference developments."
---

## Causal Inference Research Blog

Welcome to our research blog, where we summarize and discuss recent developments in causal inference. Each post focuses on a published research paper, providing an accessible summary, critical analysis, and connections to related work.

<div class="blog-list">
  <!-- Blog posts will be automatically listed here -->
  {% for post in site.posts %}
    <article class="blog-post-card">
      <div class="card-header">
        <h3 class="blog-post-card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>
        <div class="blog-post-card-meta">
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
      <div class="card-body">
        <p class="blog-post-card-excerpt">
          {{ post.excerpt | strip_html | truncatewords: 50 }}
        </p>
      </div>
      <div class="card-footer">
        <a href="{{ post.url | relative_url }}" class="blog-post-card-link">
          Read full summary →
        </a>
      </div>
    </article>
  {% else %}
    <div class="empty-state">
      <h3>No posts yet</h3>
      <p>Check back soon for research paper summaries and methodological insights.</p>
    </div>
  {% endfor %}
</div>

---

## Blog Post Format

Each blog post follows a consistent structure designed to make research accessible:

### 1. MLA Citation
Full citation with clickable DOI link to the original paper.

### 2. Summary (300-400 words)
Concise summary highlighting:
- Research question and motivation
- Key methodological contribution
- Main findings and implications
- Limitations and future directions

### 3. Related Papers (max 3)
Citations to foundational or complementary work with brief explanations of connections.

### 4. Tags (max 3)
Specific causal inference methods and concepts covered.

---

## Topics Covered

Our blog covers the full spectrum of causal inference research:

### Methodological Advances
- New estimation techniques
- Inference under weaker assumptions
- High-dimensional settings
- Machine learning integration
- Bayesian methods
- Sensitivity analysis

### Application Areas
- Economics and econometrics
- Epidemiology and public health
- Education research
- Political science
- Computer science and AI
- Social policy evaluation

### Foundational Concepts
- Potential outcomes framework
- Directed acyclic graphs
- Identification strategies
- Experimental design
- Measurement and validation
- Ethical considerations

---

## Submission Guidelines

We welcome guest contributions from researchers, practitioners, and students. To submit a blog post:

### Requirements
1. **Paper selection**: Recent (last 3 years) publication in peer-reviewed journal
2. **Citation**: Complete MLA format with DOI
3. **Summary**: 300-400 words, accessible to graduate students
4. **Related papers**: 1-3 citations with connection explanations
5. **Tags**: 1-3 relevant tags (lowercase, hyphenated)

### Review Process
1. **Initial screening**: Within 1 week of submission
2. **Editorial review**: Feedback on clarity and accessibility
3. **Final approval**: After revisions, if needed
4. **Publication**: Within 2-4 weeks of submission

### How to Submit
Email submissions to [zephyr.v@outlook.com](mailto:zephyr.v@outlook.com) with:
- Subject: "Blog Submission: [Paper Title]"
- Your name and affiliation (optional)
- Draft in Markdown format
- PDF of the paper

---

## Stay Updated

Subscribe to our newsletter to receive:
- New blog post announcements
- Monthly research roundups
- Conference and workshop updates
- Resource recommendations

[Subscribe to updates](#) (coming soon)

---

## Archive

### By Year
{% for post in site.posts %}
  {% assign currentdate = post.date | date: "%Y" %}
  {% if currentdate != date %}
    {% unless forloop.first %}</ul>{% endunless %}
    <h3 id="y{{post.date | date: "%Y"}}">{{ currentdate }}</h3>
    <ul>
    {% assign date = currentdate %}
  {% endif %}
    <li>
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <span class="post-date">({{ post.date | date: "%B %-d" }})</span>
    </li>
  {% if forloop.last %}</ul>{% endif %}
{% endfor %}

### By Tag
{% assign tags = site.tags | sort %}
{% for tag in tags %}
  <h3 id="{{ tag[0] | slugify }}">{{ tag[0] }}</h3>
  <ul>
    {% for post in tag[1] %}
      <li>
        <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <span class="post-date">({{ post.date | date: "%B %-d, %Y" }})</span>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

---

*"Research is to see what everybody else has seen, and to think what nobody else has thought."*
— Albert Szent-Györgyi