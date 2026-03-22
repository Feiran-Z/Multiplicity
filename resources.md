---
layout: page
title: "Resources"
description: "References, eBooks, slides, R/Python code, and other resources for learning and applying causal inference methods."
---

## Comprehensive Causal Inference Resource Library

This collection brings together the best resources for learning, teaching, and applying causal inference methods. All resources are curated for quality, accessibility, and practical utility.

<div class="resources-grid">
  <div class="resource-card">
    <div class="resource-card-icon">📚</div>
    <h3 class="resource-card-title">Textbooks & eBooks</h3>
    <p class="resource-card-description">
      Foundational textbooks, free online books, and essential readings for every level of expertise.
    </p>
    <a href="#textbooks" class="resource-card-link">Browse textbooks →</a>
  </div>

  <div class="resource-card">
    <div class="resource-card-icon">📊</div>
    <h3 class="resource-card-title">Code Repositories</h3>
    <p class="resource-card-description">
      R and Python code examples, replication materials, and implementation guides for causal methods.
    </p>
    <a href="#code" class="resource-card-link">Explore code →</a>
  </div>

  <div class="resource-card">
    <div class="resource-card-icon">🎓</div>
    <h3 class="resource-card-title">Course Materials</h3>
    <p class="resource-card-description">
      Slides, lecture notes, problem sets, and syllabi from university courses on causal inference.
    </p>
    <a href="#courses" class="resource-card-link">View materials →</a>
  </div>

  <div class="resource-card">
    <div class="resource-card-icon">🔬</div>
    <h3 class="resource-card-title">Research Papers</h3>
    <p class="resource-card-description">
      Key papers, literature reviews, and methodological advances in causal inference.
    </p>
    <a href="#papers" class="resource-card-link">Read papers →</a>
  </div>

  <div class="resource-card">
    <div class="resource-card-icon">🛠️</div>
    <h3 class="resource-card-title">Software Tools</h3>
    <p class="resource-card-description">
      R packages, Python libraries, and specialized software for causal analysis.
    </p>
    <a href="#software" class="resource-card-link">Discover tools →</a>
  </div>

  <div class="resource-card">
    <div class="resource-card-icon">🎥</div>
    <h3 class="resource-card-title">Video Lectures</h3>
    <p class="resource-card-description">
      Recorded lectures, tutorials, and conference talks from experts in the field.
    </p>
    <a href="#videos" class="resource-card-link">Watch videos →</a>
  </div>
</div>

---

## <span id="textbooks">Textbooks & eBooks</span>

### Foundational Texts
1. **Hernán, M. A., & Robins, J. M. (2020). *Causal Inference: What If*. Chapman & Hall/CRC.**
   - [Free online version](https://www.hsph.harvard.edu/miguel-hernan/causal-inference-book/)
   - Comprehensive, accessible introduction to potential outcomes framework
   - Focus on epidemiology but widely applicable

2. **Imbens, G. W., & Rubin, D. B. (2015). *Causal Inference for Statistics, Social, and Biomedical Sciences: An Introduction*. Cambridge University Press.**
   - Rigorous treatment of Rubin causal model
   - Excellent for graduate students and researchers

3. **Angrist, J. D., & Pischke, J. S. (2014). *Mastering 'Metrics: The Path from Cause to Effect*. Princeton University Press.**
   - Intuitive introduction to five key methods: RCTs, regression, IV, RDD, DiD
   - Engaging writing style with real-world examples

4. **Pearl, J., Glymour, M., & Jewell, N. P. (2016). *Causal Inference in Statistics: A Primer*. Wiley.**
   - Introduction to causal diagrams and do-calculus
   - Complementary to potential outcomes approach

### Advanced Texts
5. **Pearl, J. (2009). *Causality: Models, Reasoning, and Inference* (2nd ed.). Cambridge University Press.**
   - Seminal work on structural causal models
   - Advanced mathematical treatment

6. **Morgan, S. L., & Winship, C. (2014). *Counterfactuals and Causal Inference: Methods and Principles for Social Research* (2nd ed.). Cambridge University Press.**
   - Bridges potential outcomes and structural equation modeling
   - Strong focus on social science applications

7. **Cunningham, S. (2021). *Causal Inference: The Mixtape*. Yale University Press.**
   - [Free online version](https://mixtape.scunning.com/)
   - Practical focus with Stata, R, and Python code
   - Covers modern methods including synthetic control

### Specialized Topics
8. **Athey, S., & Imbens, G. W. (2019). *The Econometrics of Randomized Experiments*. In Handbook of Field Experiments.**
   - Advanced treatment of experimental design and analysis

9. **Van der Laan, M. J., & Rose, S. (2011). *Targeted Learning: Causal Inference for Observational and Experimental Data*. Springer.**
   - Advanced statistical framework for causal inference
   - Focus on machine learning integration

### Free Online Resources
10. **The Effect: An Introduction to Research Design and Causality**
    - [Online book](https://theeffectbook.net/) by Nick Huntington-Klein
    - Interactive examples and visualizations

11. **Causal Data Science**
    - [Online course notes](https://matheusfacure.github.io/python-causality-handbook/landing-page.html)
    - Python-focused with practical examples

---

## <span id="code">Code Repositories & Examples</span>

### R Resources
1. **Causal Inference Cheat Sheet**
   - [GitHub Repository](https://github.com/gsbDBI/Causal-Inference-Cheatsheet)
   - Quick reference for common methods and R packages

2. **Causal Impact R Package**
   - [CRAN](https://cran.r-project.org/web/packages/CausalImpact/vignettes/CausalImpact.html)
   - Bayesian structural time-series for causal inference

3. **MatchIt Package**
   - [Documentation](https://kosukeimai.github.io/MatchIt/)
   - Nonparametric preprocessing for parametric causal inference

4. **fixest Package**
   - [Website](https://lrberge.github.io/fixest/)
   - Fast fixed-effects estimation for difference-in-differences

### Python Resources
5. **DoWhy Library**
   - [GitHub](https://github.com/py-why/dowhy)
   - End-to-end causal inference library from Microsoft Research

6. **Causal ML Package**
   - [Documentation](https://causalml.readthedocs.io/)
   - Machine learning methods for causal inference

7. **EconML Library**
   - [GitHub](https://github.com/microsoft/EconML)
   - Heterogeneous treatment effects estimation

### Interactive Tutorials
8. **Causal Inference with R**
   - [RStudio Cloud](https://rstudio.cloud/project/1283782)
   - Interactive environment with pre-loaded datasets

9. **Python Causal Inference Tutorials**
   - [Colab Notebooks](https://github.com/amit-sharma/causal-inference-tutorial)
   - Google Colab notebooks with executable code

### Replication Materials
10. **Social Science Reproduction Project**
    - [Website](https://social-science-data-editors.github.io/)
    - Code and data for replicating published studies

11. **AEA RCT Registry**
    - [Website](https://www.socialscienceregistry.org/)
    - Pre-analysis plans and replication materials

---

## <span id="courses">Course Materials</span>

### University Course Syllabi
1. **Harvard University - STAT 186: Causal Inference**
   - [Syllabus](https://canvas.harvard.edu/courses/82337)
   - Taught by Prof. Edoardo Airoldi

2. **Stanford University - MS&E 226: Fundamentals of Causal Inference**
   - [Course website](https://web.stanford.edu/~swager/teaching.html)
   - Taught by Prof. Stefan Wager

3. **UC Berkeley - STAT 240: Causal Inference**
   - [Materials](https://www.stat.berkeley.edu/~ryantibs/causal/)
   - Taught by Prof. Rina Foygel Barber

### Lecture Slides & Notes
4. **Causal Inference Slides Collection**
   - [GitHub](https://github.com/jrnold/causal-inference-notes)
   - Comprehensive slide decks covering multiple methods

5. **Potential Outcomes Framework**
   - [PDF Notes](https://www.mattblackwell.org/files/teaching/s05-framework.pdf)
   - Clear introduction to Rubin causal model

### Problem Sets & Exams
6. **MIT 14.387: Applied Econometrics**
   - [Problem sets](https://economics.mit.edu/grad/14.387)
   - Causal inference applications in economics

7. **Princeton ORF 524: Causal Inference**
   - [Assignments](https://www.princeton.edu/~yishaiz/causal-inference.html)
   - Theoretical and applied problems

---

## <span id="papers">Key Research Papers</span>

### Foundational Papers
1. **Rubin, D. B. (1974). Estimating causal effects of treatments in randomized and nonrandomized studies. *Journal of Educational Psychology*, 66(5), 688-701.**
   - Introduces potential outcomes framework

2. **Rosenbaum, P. R., & Rubin, D. B. (1983). The central role of the propensity score in observational studies for causal effects. *Biometrika*, 70(1), 41-55.**
   - Foundation for propensity score methods

3. **Angrist, J. D., Imbens, G. W., & Rubin, D. B. (1996). Identification of causal effects using instrumental variables. *Journal of the American Statistical Association*, 91(434), 444-455.**
   - Formalizes IV estimation

### Modern Advances
4. **Athey, S., & Imbens, G. (2016). Recursive partitioning for heterogeneous causal effects. *Proceedings of the National Academy of Sciences*, 113(27), 7353-7360.**
   - Causal forests for heterogeneous treatment effects

5. **Chernozhukov, V., Chetverikov, D., Demirer, M., Duflo, E., Hansen, C., Newey, W., & Robins, J. (2018). Double/debiased machine learning for treatment and structural parameters. *The Econometrics Journal*, 21(1), C1-C68.**
   - Machine learning for causal inference

6. **Abadie, A., Diamond, A., & Hainmueller, J. (2010). Synthetic control methods for comparative case studies: Estimating the effect of California's tobacco control program. *Journal of the American Statistical Association*, 105(490), 493-505.**
   - Synthetic control method

### Literature Reviews
7. **Imbens, G. W. (2020). Potential outcome and directed acyclic graph approaches to causality: Relevance for empirical practice in economics. *Journal of Economic Literature*, 58(4), 1129-1179.**
   - Comprehensive review of causal inference in economics

8. **Hernán, M. A. (2018). The C-word: Scientific euphemisms do not improve causal inference from observational data. *American Journal of Public Health*, 108(5), 616-619.**
   - Clear thinking about causal language

---

## <span id="software">Software Tools</span>

### R Packages
1. **`causalverse`** - Meta-package for causal inference
2. **`MatchIt`** - Matching methods for causal inference
3. **`WeightIt`** - Weighting methods for causal inference
4. **`fixest`** - Fast fixed-effects estimation
5. **`ivpack`** - Instrumental variables estimation
6. **`rdrobust`** - Regression discontinuity
7. **`gsynth`** - Generalized synthetic control
8. **`grf`** - Generalized random forests for causal inference
9. **`DoubleML`** - Double machine learning
10. **`medflex`** - Mediation analysis

### Python Libraries
1. **`DoWhy`** - End-to-end causal inference
2. **`CausalML`** - Machine learning for causal inference
3. **`EconML`** - Heterogeneous treatment effects
4. **`causalnex`** - Causal discovery and reasoning
5. **`pgmpy`** - Probabilistic graphical models
6. **`lingam`** - Linear non-Gaussian causal models

### Specialized Software
1. **DAGitty** - [Web tool](http://dagitty.net/) for drawing and analyzing DAGs
2. **Causal Fusion** - [Platform](https://www.causalfusion.com/) for causal discovery
3. **Tetrad** - [Software](http://www.phil.cmu.edu/tetrad/) for causal modeling

---

## <span id="videos">Video Lectures & Tutorials</span>

### Lecture Series
1. **MIT OpenCourseWare: Causal Inference**
   - [YouTube playlist](https://www.youtube.com/playlist?list=PLUl4u3cNGP60gL8hRk9c-5gW8-0-1-2-3)
   - Complete course lectures

2. **Harvard Data Science: Causal Inference**
   - [YouTube](https://www.youtube.com/watch?v=GTgZfCltMm8)
   - Introductory lectures

3. **Stanford Causal Inference Seminar**
   - [YouTube channel](https://www.youtube.com/c/StanfordCausalInference)
   - Research talks and tutorials

### Conference Talks
4. **Causal Data Science Meeting**
   - [Recordings](https://www.causalscience.org/meetings/)
   - Annual conference recordings

5. **Atlantic Causal Inference Conference**
   - [Website](https://acic2022.github.io/)
   - Conference presentations

### Tutorial Videos
6. **Causal Inference with R - DataCamp**
   - [Course](https://www.datacamp.com/courses/causal-inference-with-r)
   - Interactive video tutorials

7. **Python Causal Inference - YouTube Tutorials**
   - [Playlist](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo)
   - Step-by-step implementations

---

## Contributing to This Resource Library

This resource library is community-maintained. To suggest additions or corrections:

1. **Submit a resource**: Email [zephyr.v@outlook.com](mailto:zephyr.v@outlook.com) with:
   - Resource title and description
   - URL or citation
   - Brief justification for inclusion
   - Your name (optional, for acknowledgment)

2. **Report issues**: Found a broken link or outdated information? Let us know.

3. **Share widely**: These resources are freely available. Please share with colleagues and students.

---

*"The most exciting phrase to hear in science, the one that heralds new discoveries, is not 'Eureka!' but 'That's funny...'"*
— Isaac Asimov