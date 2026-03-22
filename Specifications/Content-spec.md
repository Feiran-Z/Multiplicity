# Content Specification: **Multiplicity: Roads Not Taken**

## 1. Overview
This document defines the structure and requirements for all written content on the website. There are three primary content types:
- **Regular Pages**: Educational, topic‑based explanations of causal inference concepts, theories, and methods.
- **Blog Posts**: Summaries of recent research papers in causal inference, with citations and links to further reading.
- **Special Pages**: Pages such as Home, About, Contact pages

All content must adhere to the project’s brand voice: **authoritative yet accessible**, suitable for students, educators, and researchers.

---

## 2. General Guidelines
- **Format**: All content is written in **Markdown** with Jekyll front matter.
- **Tone**: Clear, precise, and engaging. Avoid unnecessary jargon; explain technical terms when first introduced.
- **Audience**: Readers with some background in statistics or research methods, but not necessarily experts in causal inference.
- **LaTeX**: Use `$...$` for inline math and `$$...$$` for display math. MathJax is configured site‑wide.
- **Code Blocks**: Use triple backticks with language specification (e.g., ` ```r `) for R code examples.
- **Front Matter**: Every piece of content must include YAML front matter with at least:
  ```yaml
  ---
  layout: page   # or "post" for blog posts
  title: "Title Here"
  date: YYYY-MM-DD (for posts only)
  tags: [tag1, tag2, tag3] (optional but necessary for posts)
  ---
  ```
- **File Naming**:
    - Pages: Use descriptive names like "difference-in-differences.md" or "instrumental-variables.md".
    - Posts: Must follow Jekyll convention: YYYY-MM-DD-short-title.md (e.g., "2025-03-18-new-method-for-ate.md").

## 3. Blog Post Specification
### 3.1 Purpose
Each blog post highlights a recent published research paper in causal inference. The goal is to inform readers about new methodologies and applications, and to provide a concise, accessible summary.

### 3.2 Required Sections
A blog post must contain the following elements in order:
1. Title
    - Should be engaging and include the paper’s main contribution (e.g., “Doubly Robust Estimation for Time‑Varying Treatments”).
    - May optionally include a subtitle.
2. MLA Citation
    - Provide the full MLA 9th edition citation, including the DOI as a hyperlink.
    - Example:
        Smith, Jane, et al. “Causal Inference with Latent Confounders.” Journal of Causal Inference, vol. 12, no. 3, 2025, pp. 45–67. doi:10.xxxx/yyyy.
3. Summary / Annotation
    - A brief (300–400 words) summary of the paper’s key ideas, methods, and findings.
    - Highlight the main contribution to causal inference (e.g., a new estimator, a theoretical insight, an application).
    - Use accessible language; avoid copying the abstract verbatim.
4. Related Papers (max 3)
    - List up to three papers that are closely related (e.g., foundational work, extensions, or applications).
    - For each, provide the full citation and a one‑sentence explanation of its connection.
5. Tags (max 3)
    - Identify the specific causal inference approach (e.g., instrumental variables, difference‑in‑differences, regression discontinuity design) and other relevant concepts (e.g., observational data, machine learning, continuous treatment).
    - Tags should be lowercase, hyphenated if multi‑word (e.g., causal-graphs).
    - These will be used for navigation and filtering.

### 3.3 Example Blog Post Skeleton
```yaml
---
layout: post
title: "Doubly Robust Estimation for Time‑Varying Treatments"
date: 2025-03-18
tags: [doubly-robust, time-varying, g-computation]
---

## MLA Citation
Doe, John, and Mary Johnson. “Doubly Robust Estimation of Causal Effects in Longitudinal Studies.” *American Journal of Epidemiology*, vol. 190, no. 2, 2024, pp. 112–25. doi:[10.1093/aje/kwad123](https://doi.org/10.1093/aje/kwad123).

## Summary
This paper proposes a new doubly robust estimator for the average treatment effect in settings with time‑varying treatments and confounders. The authors combine inverse probability weighting and g‑computation to achieve consistency if either the treatment model or the outcome model is correctly specified. Through simulations and a real‑world example (evaluating the effect of a job training program), they demonstrate improved performance over existing methods.

## Related Papers
1. Robins, James M., et al. “Estimation of the Causal Effect of a Time‑Varying Exposure on the Marginal Mean of a Repeated Binary Outcome.” *Journal of the American Statistical Association*, vol. 94, no. 447, 1999, pp. 687–700. — Foundational work on g‑computation.
2. Bang, Heejung, and James M. Robins. “Doubly Robust Estimation in Missing Data and Causal Inference Models.” *Biometrics*, vol. 61, no. 4, 2005, pp. 962–73. — Introduces doubly robust estimation in simpler settings.
3. Hernán, Miguel A., and James M. Robins. *Causal Inference: What If*. Chapman & Hall/CRC, 2020. — Textbook covering related concepts.
```

## 4. Regular Page Specification
### 4.1 Purpose
Regular pages are educational resources that explain fundamental or advanced topics in causal inference. They should make abstract concepts tangible through storytelling, clear explanation, and practical implementation.

### 4.2 Required Structure
Each page must follow this structure:
1. Title (and optional Subtitle)
    - Clear and descriptive.
    - Example: “Instrumental Variables: Using Nature’s Randomization”
2. Opening Story
    - A short, relatable narrative that illustrates the problem the method solves.
    - Can be personal, historical, or a hypothetical scenario.
    - Aim for 100–200 words.
    - Example: “Imagine you want to know whether a new drug reduces heart attacks, but doctors prescribe it sicker patients…”
3. Technical Explanation
    - A clear, step‑by‑step explanation of the method.
    - Include key formulas using LaTeX.
    - Define all new notation.
    - Discuss assumptions, limitations, and intuition.
    - Length: 400–800 words, depending on complexity.
4. Implementation Example
    - Provide a concrete example using primarily **R code** (or occasionally another language if specified).
    - Include simulated or real data (small enough to embed).
    - Show how to apply the method step by step, with comments explaining each part.
    - Output (tables, plots) can be described or shown using R Markdown‑style inclusion.
    - If the example uses a dataset, mention how to access it (e.g., built‑in, simulated, or a link).
    - Ensure the code is runnable and produces interpretable results.

### 4.3 Example Regular Page Skeleton
```yaml
---
layout: page
title: "Instrumental Variables: Using Nature’s Randomization"
subtitle: "How to estimate causal effects when treatment is not randomly assigned"
---

## A Story: The Effect of Classroom Size on Learning
Suppose you want to know whether smaller classes improve student test scores. Schools with smaller classes often have more resources, better teachers, or wealthier neighborhoods. Simply comparing test scores between large and small classes would be biased. But what if some students were randomly assigned to smaller classes? In reality, that rarely happens. However, there might be a natural experiment: a policy that caps class sizes at 30 students, creating a jump in class size just above the cutoff. This discontinuity can be exploited...

## Technical Explanation
Instrumental variables (IV) is a method that uses a variable \( Z \) (the instrument) that affects the treatment \( X \) but has no direct effect on the outcome \( Y \) except through \( X \). The classic IV estimator for the average causal effect is...

\[
\beta_{IV} = \frac{Cov(Z, Y)}{Cov(Z, X)}
\]

We discuss the three key assumptions: relevance, exclusion, and exchangeability...

## Implementation in R
We simulate data to illustrate IV estimation. Suppose \( Z \) is a binary instrument (e.g., lottery), \( X \) is treatment uptake, and \( Y \) is the outcome.

    ```r
    set.seed(123)
    n <- 1000
    Z <- rbinom(n, 1, 0.5)
    X <- 0.5 * Z + rnorm(n)  # treatment influenced by Z
    Y <- 2 * X + rnorm(n)    # true causal effect = 2

    # Two‑stage least squares
    library(ivpack)
    fit <- ivreg(Y ~ X | Z)
    summary(fit)
    ```
The output shows an estimate close to the true effect, demonstrating how IV corrects for confounding (if any). For a real‑world example, we use the CigarettesSW dataset from the AER package to estimate the effect of cigarette taxes on smoking...
```

## 5. Special Page Specification
Special pages include the following:
- Home (`index.md`)
- About (`about.md`)
- Contact (`contact.md`)

### 5.1 Home Page
The home page contains the following:
- Robert Frost's poem *The Road Not Taken* (https://www.poetryfoundation.org/poems/44272/the-road-not-taken) as the prologue introducing the idea about our reality as just **one** realization of many possibilities, and mankind's shared curiosity about other unrealized possibilities - the *what ifs*
- A personal story and reflection on one *what if* relating to my choice of dropping out of the Ph.D. program despite having spent 6 years learning and researching on international and development economics; this section should be written by the author - leave a placeholder in the home page
- A list of the courses offered:
    - **Empirical research fundamentals**: basic knowledge and skills about empirical research in social sciences, with a particular focus on quantitative research and relevant mathematical and/or statistical foundations
    - **Introduction to causal inference**: introductory course to causal inference, including topics like potential outcomes model, directed acyclic graphs, basic research designs, and randomized control trials as the benchmark approach
    - **Intermediate causal inference**: typical, well-established, non-RCT methods for causal inference, such as subclassification, matching methods, difference-in-differences, panel fixed effects, instrumental variables, etc.
    - **Advanced causal inference**: more advanced topics and recent developments in causal inference, including machine learning, meta-learners, tree-based approaches, etc.

### 5.2 About Page
The about page contains the following:
- An introduction of **Multiplicity: Roads Not Taken** Project
- A biography of the author - to be completed by the author, placeholder for now
- An acknowledgement of other contributors to the Project - placeholder for now

### 5.3 Contact Page
The contact page contains 
- A simple form that allow the user to fill out with their messages and sent to the author's email (zephyr.v@outlook.com)
- A list of social media links (placeholders for now) including LinkedIn, X (Twitter), and GitHub Repo



## 6. Quality Checklist
Before publishing, verify:
- [ ] Title and (if applicable) subtitle are clear and engaging.
- [ ] Blog posts include MLA citation with clickable DOI.
- [ ] Summary highlights the main contribution.
- [ ] Related papers (max 3) are correctly cited.
- [ ] Tags (max 3) accurately reflect content.
- [ ] Regular pages include a story, technical explanation, and runnable R example.
- [ ] All LaTeX is correctly formatted.
- [ ] Code blocks use appropriate language tags.
- [ ] Front matter is complete and accurate.
- [ ] Content adheres to brand voice and is accessible to the target audience.

---

*This specification may be updated as the project evolves. All content contributors should refer to the latest version.*