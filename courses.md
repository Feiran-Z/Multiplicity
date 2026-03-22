---
layout: page
title: "Courses"
description: "Four levels of causal inference education, from empirical research fundamentals to advanced topics in modern causal inference."
---

## Causal Inference Education Pathways

Our curriculum is designed to take you from foundational concepts to cutting-edge methods in causal inference. Each course builds on the previous one, but you can also jump in at the level that matches your background.

<div class="course-grid">
  {% for course in site.data.site.courses %}
    <div class="course-card" id="{{ course.title | slugify }}">
      <div class="course-card-header">
        <h3 class="course-card-title">{{ course.title }}</h3>
        <span class="course-card-level">{{ course.level }}</span>
      </div>
      <div class="course-card-body">
        <p class="course-card-description">{{ course.description }}</p>
      </div>
      <div class="course-card-footer">
        <a href="#course-{{ forloop.index }}" class="button button-text">
          View details ↓
        </a>
      </div>
    </div>
  {% endfor %}
</div>

---

## Course Details

### <span id="course-1">1. Empirical Research Fundamentals</span>
*Beginner level • Prerequisites: Basic statistics*

This course establishes the foundation for all empirical research in social sciences, with particular focus on quantitative methods.

**Learning Objectives:**
- Understand the research process from question formulation to interpretation
- Master basic statistical concepts: distributions, hypothesis testing, confidence intervals
- Learn data management and visualization principles
- Develop critical thinking about research design and measurement

**Topics Covered:**
- Research question development
- Measurement theory and operationalization
- Descriptive statistics and data visualization
- Probability distributions and sampling
- Hypothesis testing and p-values
- Confidence intervals and effect sizes
- Introduction to regression analysis
- Research ethics and reproducibility

**Format:**
- 8 modules with video lectures
- Weekly problem sets with solutions
- Final project: Design a research study
- Recommended: 6-8 hours per week for 8 weeks

**Resources:**
- Textbook: *The Practice of Social Research* by Earl Babbie
- Software: R or Python (your choice)
- Datasets: Real-world social science data

---

### <span id="course-2">2. Introduction to Causal Inference</span>
*Beginner/Intermediate level • Prerequisites: Empirical Research Fundamentals or equivalent*

This course introduces the core framework for thinking causally, starting with the potential outcomes model and building up to randomized experiments as the gold standard.

**Learning Objectives:**
- Understand Rubin's potential outcomes framework
- Define and identify causal effects
- Design and analyze randomized controlled trials (RCTs)
- Critically evaluate causal claims in research

**Topics Covered:**
- Potential outcomes and the fundamental problem of causal inference
- Stable Unit Treatment Value Assumption (SUTVA)
- Average Treatment Effects (ATE, ATT, ATC)
- Randomized experiments: design, analysis, and interpretation
- Directed Acyclic Graphs (DAGs) for causal reasoning
- Confounding, selection bias, and measurement error
- Instrumental variables introduction
- Regression discontinuity design introduction

**Format:**
- 10 modules with interactive content
- Simulation exercises to build intuition
- Case studies of landmark RCTs
- Final exam with applied problems
- Recommended: 8-10 hours per week for 10 weeks

**Resources:**
- Textbook: *Causal Inference: What If* by Hernán and Robins (free online)
- Software: R with `causalverse` package
- Datasets: Experimental data from economics, medicine, education

---

### <span id="course-3">3. Intermediate Causal Inference</span>
*Intermediate level • Prerequisites: Introduction to Causal Inference*

This course covers established methods for estimating causal effects when randomization is not possible, focusing on observational study designs.

**Learning Objectives:**
- Apply matching and weighting methods to balance covariates
- Implement difference-in-differences designs
- Use panel data methods for causal inference
- Understand instrumental variables estimation
- Conduct sensitivity analyses for unobserved confounding

**Topics Covered:**
- Propensity score methods: matching, stratification, weighting
- Inverse probability weighting and doubly robust estimation
- Difference-in-differences: two-way fixed effects, event studies
- Panel data methods: fixed effects, random effects, first differences
- Instrumental variables: two-stage least squares, local average treatment effects
- Regression discontinuity: sharp and fuzzy designs
- Synthetic control method
- Sensitivity analysis for unobserved confounding

**Format:**
- 12 modules with technical depth
- Weekly coding assignments with peer review
- Replication of published studies
- Final project: Analyze an observational dataset
- Recommended: 10-12 hours per week for 12 weeks

**Resources:**
- Textbook: *Mastering 'Metrics* by Angrist and Pischke
- Software: R with `MatchIt`, `fixest`, `ivpack` packages
- Datasets: Observational data from economics, public health, policy evaluation

---

### <span id="course-4">4. Advanced Causal Inference</span>
*Advanced level • Prerequisites: Intermediate Causal Inference*

This course explores frontier topics and modern approaches, including machine learning methods for causal inference and recent methodological developments.

**Learning Objectives:**
- Integrate machine learning with causal inference
- Estimate heterogeneous treatment effects
- Handle high-dimensional confounding
- Understand recent advances in causal discovery
- Apply causal inference to complex data structures

**Topics Covered:**
- Machine learning for causal inference: meta-learners, causal forests
- Heterogeneous treatment effects: estimation and inference
- High-dimensional confounding and double/debiased machine learning
- Causal discovery from observational data
- Mediation analysis and path-specific effects
- Time-varying treatments and dynamic regimes
- Network interference and spillover effects
- Bayesian methods for causal inference
- Recent advances: synthetic interventions, proximal causal inference

**Format:**
- 14 modules at research level
- Reading and discussion of recent papers
- Implementation of advanced methods
- Research proposal development
- Recommended: 12-15 hours per week for 14 weeks

**Resources:**
- Textbook: *Causal Inference for Statistics, Social, and Biomedical Sciences* by Imbens and Rubin
- Software: R with `grf`, `DoubleML`, `bnlearn` packages
- Research papers from top econometrics, statistics, and ML journals

---

## Enrollment and Access

### Current Status
All courses are **under development** and will be released in phases:

1. **Phase 1 (Q3 2024)**: Introduction to Causal Inference
2. **Phase 2 (Q4 2024)**: Empirical Research Fundamentals
3. **Phase 3 (Q1 2025)**: Intermediate Causal Inference
4. **Phase 4 (Q2 2025)**: Advanced Causal Inference

### Format Options
Each course will be available in multiple formats:
- **Self-paced online**: Video lectures, interactive exercises, automated feedback
- **Live cohort**: Weekly sessions with instructor, peer discussion, personalized feedback
- **Institutional licensing**: For universities and research organizations

### Prerequisites Assessment
Not sure which course is right for you? Take our [prerequisites assessment quiz](#) (coming soon) to determine the best starting point.

### Scholarships
We are committed to making causal inference education accessible. Limited scholarships will be available for:
- Students from low-income countries
- Researchers at institutions with limited resources
- Professionals transitioning to data science/research roles

### Certification
Complete all four courses to earn a **Certificate in Causal Inference Methods**. Each course also offers individual completion certificates.

---

## Frequently Asked Questions

**Q: Do I need to take the courses in order?**
A: While designed as a sequence, each course stands alone. We recommend starting with "Introduction to Causal Inference" unless you have strong statistics background.

**Q: What software will I need?**
A: All courses use R, with optional Python equivalents provided. We'll help you get set up regardless of your current skill level.

**Q: Are there prerequisites?**
A: Yes, each course lists prerequisites. The first course requires only basic statistics knowledge.

**Q: How much time should I budget?**
A: See the "Format" section for each course. Most require 6-15 hours per week depending on the level.

**Q: Will there be interaction with instructors?**
A: In live cohort formats, yes. Self-paced courses include discussion forums and optional office hours.

**Q: Can I use these courses for academic credit?**
A: We're working on partnerships with universities for credit transfer. Currently, courses provide certificates of completion.

---

## Stay Updated

Sign up for our newsletter to receive:
- Course launch announcements
- Free preview materials
- Scholarship opportunities
- Research updates in causal inference

[Subscribe to updates](#) (coming soon)

---

*"The aim of science is not to open the door to infinite wisdom, but to set a limit to infinite error."*
— Bertolt Brecht