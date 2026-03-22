---
layout: post
title: "Causal Forests for Heterogeneous Treatment Effects"
date: 2024-03-15
author: "Feiran Zhang"
tags: [causal-forests, machine-learning, heterogeneous-effects, random-forests]
---

## MLA Citation

Athey, Susan, and Guido Imbens. "Recursive Partitioning for Heterogeneous Causal Effects." *Proceedings of the National Academy of Sciences*, vol. 113, no. 27, 2016, pp. 7353–60. doi:[10.1073/pnas.1510489113](https://doi.org/10.1073/pnas.1510489113).

## Summary

This influential paper by Athey and Imbens introduces "causal forests," a machine learning method for estimating heterogeneous treatment effects. The authors address a fundamental question in policy evaluation and personalized medicine: not just *whether* a treatment works on average, but *for whom* it works best.

Traditional methods like linear regression often assume constant treatment effects or rely on pre-specified interaction terms. Causal forests, in contrast, automatically discover subgroups with different treatment effects by recursively partitioning the covariate space. The method builds on random forests but modifies the splitting criterion to maximize heterogeneity in treatment effects rather than prediction accuracy.

The key innovation is an "honest" estimation approach: the algorithm uses different subsets of data for constructing the tree structure and estimating treatment effects within leaves. This prevents overfitting and provides valid confidence intervals—a crucial advance over black-box machine learning methods.

The authors demonstrate their method through simulations and an application to a job training program (the National Supported Work Demonstration). They show that causal forests can identify subgroups with substantially different responses to treatment, such as younger participants benefiting more from the program than older ones. The method also outperforms alternatives like regression with interactions or conventional random forests.

This paper bridges the gap between causal inference and machine learning, providing a rigorous framework for data-driven discovery of treatment effect heterogeneity. It has spawned a rich literature on machine learning methods for causal inference and influenced practice in economics, healthcare, and marketing.

## Related Papers

1. **Wager, Stefan, and Susan Athey. "Estimation and Inference of Heterogeneous Treatment Effects using Random Forests." *Journal of the American Statistical Association*, vol. 113, no. 523, 2018, pp. 1228–42.** — Extends causal forests with theoretical guarantees for asymptotic normality and consistent variance estimation, making the method suitable for formal hypothesis testing.

2. **Chernozhukov, Victor, et al. "Double/Debiased Machine Learning for Treatment and Structural Parameters." *The Econometrics Journal*, vol. 21, no. 1, 2018, pp. C1–C68.** — Develops a general framework for combining machine learning with causal inference, showing how to avoid regularization bias when using flexible models for nuisance parameters.

3. **Tibshirani, Julie, et al. "exact: Exchangeability, Calibration, and Sensitivity Analysis of Causal Forests." *arXiv preprint arXiv:1810.11347*, 2018.** — Provides tools for diagnosing and improving causal forest estimates, including calibration checks and sensitivity analysis for unobserved confounding.