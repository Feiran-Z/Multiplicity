---
layout: post
title: "Doubly Robust Estimation for Time‑Varying Treatments"
date: 2024-03-22
author: "Feiran Zhang"
tags: [doubly-robust, time-varying, g-computation, longitudinal]
---

## MLA Citation

Bang, Heejung, and James M. Robins. "Doubly Robust Estimation in Missing Data and Causal Inference Models." *Biometrics*, vol. 61, no. 4, 2005, pp. 962–73. doi:[10.1111/j.1541-0420.2005.00377.x](https://doi.org/10.1111/j.1541-0420.2005.00377.x).

## Summary

This seminal paper by Bang and Robins introduces a doubly robust estimator for causal effects in longitudinal studies with time-varying treatments. The authors address a critical challenge in causal inference: when estimating the effect of a treatment that changes over time (like medication dosage or job training participation), researchers must account for time-varying confounders that are themselves affected by prior treatment.

The key innovation is an estimator that combines two approaches: inverse probability weighting (IPW) and g-computation. The estimator is "doubly robust" because it yields consistent estimates if *either* the model for treatment assignment (propensity score) *or* the model for the outcome is correctly specified. This property provides important protection against model misspecification.

The authors demonstrate their method through simulations and a real-world example: estimating the effect of highly active antiretroviral therapy (HAART) on CD4 cell count in HIV patients. They show that their doubly robust estimator performs well even when one of the two models is misspecified, while traditional methods fail under the same conditions.

This paper has become foundational for causal inference in longitudinal settings, influencing subsequent work in epidemiology, economics, and social sciences. It provides a practical solution to the complex problem of time-varying confounding, where standard methods like regression or matching can produce biased results.

## Related Papers

1. **Robins, James M., et al. "Estimation of the Causal Effect of a Time‑Varying Exposure on the Marginal Mean of a Repeated Binary Outcome." *Journal of the American Statistical Association*, vol. 94, no. 447, 1999, pp. 687–700.** — Introduces g-computation for time-varying treatments, providing the outcome modeling component used in doubly robust estimation.

2. **Hernán, Miguel A., et al. "Marginal Structural Models to Estimate the Joint Causal Effect of Nonrandomized Treatments." *Journal of the American Statistical Association*, vol. 96, no. 454, 2001, pp. 440–48.** — Develops inverse probability weighting for time-varying treatments, providing the treatment modeling component used in doubly robust estimation.

3. **Van der Laan, Mark J., and James M. Robins. *Unified Methods for Censored Longitudinal Data and Causality*. Springer, 2003.** — Extends doubly robust estimation to more complex settings with censoring and missing data, showing the generality of the approach.