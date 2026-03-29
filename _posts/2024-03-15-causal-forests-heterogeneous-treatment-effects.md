---
layout: post
layout_style: 'sophisticated'
title: "Causal Forests for Heterogeneous Treatment Effects"
date: 2024-03-15
author: "Feiran Zhang"
tags: [causal-forests, machine-learning, heterogeneous-effects, random-forests]
---

<div class="post-section post-section-mla">
<h2 class="post-section-title">MLA Citation</h2>
<div class="mla-citation">
Athey, Susan, and Guido Imbens. "Recursive Partitioning for Heterogeneous Causal Effects." *Proceedings of the National Academy of Sciences*, vol. 113, no. 27, 2016, pp. 7353–60. doi:[10.1073/pnas.1510489113](https://doi.org/10.1073/pnas.1510489113).
</div>
</div>

<div class="post-section post-section-summary">
<h2 class="post-section-title">Summary</h2>
<div class="post-section-content">
<p>This influential paper by Athey and Imbens introduces "causal forests," a machine learning method for estimating heterogeneous treatment effects. The authors address a fundamental question in policy evaluation and personalized medicine: not just <em>whether</em> a treatment works on average, but <em>for whom</em> it works best.</p>

<p>Traditional methods like linear regression often assume constant treatment effects or rely on pre-specified interaction terms. Causal forests, in contrast, automatically discover subgroups with different treatment effects by recursively partitioning the covariate space. The method builds on random forests but modifies the splitting criterion to maximize heterogeneity in treatment effects rather than prediction accuracy.</p>

<p>The key innovation is an "honest" estimation approach: the algorithm uses different subsets of data for constructing the tree structure and estimating treatment effects within leaves. This prevents overfitting and provides valid confidence intervals—a crucial advance over black-box machine learning methods.</p>

<p>The authors demonstrate their method through simulations and an application to a job training program (the National Supported Work Demonstration). They show that causal forests can identify subgroups with substantially different responses to treatment, such as younger participants benefiting more from the program than older ones. The method also outperforms alternatives like regression with interactions or conventional random forests.</p>

<p>This paper bridges the gap between causal inference and machine learning, providing a rigorous framework for data-driven discovery of treatment effect heterogeneity. It has spawned a rich literature on machine learning methods for causal inference and influenced practice in economics, healthcare, and marketing.</p>
</div>
</div>

<div class="post-section post-section-contributions">
<h2 class="post-section-title">Key Contributions</h2>
<ul class="contributions-list">
<li class="contribution-item">
<div class="contribution-text">Introduces causal forests for estimating heterogeneous treatment effects using machine learning</div>
</li>
<li class="contribution-item">
<div class="contribution-text">Modifies random forest splitting criterion to maximize treatment effect heterogeneity rather than prediction accuracy</div>
</li>
<li class="contribution-item">
<div class="contribution-text">Develops "honest" estimation approach using separate data subsets for tree construction and effect estimation</div>
</li>
<li class="contribution-item">
<div class="contribution-text">Provides valid confidence intervals for treatment effect estimates, addressing inference in machine learning</div>
</li>
<li class="contribution-item">
<div class="contribution-text">Demonstrates application to job training program data, identifying subgroups with different treatment responses</div>
</li>
<li class="contribution-item">
<div class="contribution-text">Bridges causal inference and machine learning with rigorous statistical framework</div>
</li>
</ul>
</div>

<div class="post-section post-section-related">
<h2 class="post-section-title">Related Papers</h2>
<ul class="related-papers-list">
<li class="related-paper-item">
<div class="related-paper-citation">
Wager, Stefan, and Susan Athey. "Estimation and Inference of Heterogeneous Treatment Effects using Random Forests." *Journal of the American Statistical Association*, vol. 113, no. 523, 2018, pp. 1228–42.
</div>
<div class="related-paper-note">Extends causal forests with theoretical guarantees for asymptotic normality and consistent variance estimation, making the method suitable for formal hypothesis testing</div>
</li>
<li class="related-paper-item">
<div class="related-paper-citation">
Chernozhukov, Victor, et al. "Double/Debiased Machine Learning for Treatment and Structural Parameters." *The Econometrics Journal*, vol. 21, no. 1, 2018, pp. C1–C68.
</div>
<div class="related-paper-note">Develops a general framework for combining machine learning with causal inference, showing how to avoid regularization bias when using flexible models for nuisance parameters</div>
</li>
<li class="related-paper-item">
<div class="related-paper-citation">
Tibshirani, Julie, et al. "exact: Exchangeability, Calibration, and Sensitivity Analysis of Causal Forests." *arXiv preprint arXiv:1810.11347*, 2018.
</div>
<div class="related-paper-note">Provides tools for diagnosing and improving causal forest estimates, including calibration checks and sensitivity analysis for unobserved confounding</div>
</li>
</ul>
</div>