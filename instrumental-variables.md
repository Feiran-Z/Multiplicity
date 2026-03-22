---
layout: page
title: "Instrumental Variables: Using Nature's Randomization"
subtitle: "How to estimate causal effects when treatment is not randomly assigned"
mathjax: true
---

## A Story: The Effect of Classroom Size on Learning

Imagine you're an education researcher trying to determine whether smaller class sizes improve student test scores. You collect data from hundreds of schools and notice a pattern: schools with smaller classes tend to have higher test scores. But is this a causal relationship?

The problem is confounding. Schools with smaller classes often have other advantages: more funding, better teachers, wealthier neighborhoods, more involved parents. If you simply compare test scores between large and small classes, you're comparing apples to oranges. The observed correlation might reflect these other factors rather than a true causal effect of class size.

What you need is random variation in class size—something that affects class size but doesn't directly affect test scores except through class size. In the late 1990s, researchers found such a natural experiment in Tennessee. The state implemented Project STAR (Student/Teacher Achievement Ratio), which randomly assigned students and teachers to small (13-17 students) or regular (22-25 students) classes in kindergarten through third grade. This randomization created the ideal setting for causal inference.

But what if such a randomized experiment isn't available? Enter instrumental variables: a method that leverages "natural experiments" or "quasi-random" variation to estimate causal effects.

## Technical Explanation

Instrumental variables (IV) is a method for estimating causal effects when treatment assignment is not random but there exists an instrument—a variable that affects treatment but has no direct effect on the outcome except through treatment.

### The Setup

We have:
- **Outcome** $Y$ (e.g., test scores)
- **Treatment** $X$ (e.g., class size, binary or continuous)
- **Instrument** $Z$ (e.g., policy-induced variation in class size)
- **Confounders** $U$ (unobserved factors affecting both $X$ and $Y$)

The causal relationships can be represented as:

$$
Z \rightarrow X \leftarrow U \rightarrow Y
$$

$$
X \rightarrow Y
$$

Notice: there's no direct arrow from $Z$ to $Y$. The instrument affects the outcome only through its effect on treatment.

### Key Assumptions

1. **Relevance**: $Z$ is correlated with $X$
   - Formal: $Cov(Z, X) \neq 0$
   - Testable: First-stage regression of $X$ on $Z$

2. **Exclusion**: $Z$ affects $Y$ only through $X$
   - Formal: $Z \perp Y \mid X, U$
   - Not directly testable—requires subject-matter knowledge

3. **Exchangeability**: $Z$ is independent of confounders
   - Formal: $Z \perp U$
   - Often implied by random assignment or natural experiment

4. **Monotonicity** (for binary treatment): No "defiers"—no units that would take treatment if not encouraged and not take treatment if encouraged
   - Required for local average treatment effect (LATE) interpretation

### Estimation

For a continuous instrument and treatment, the simplest IV estimator is:

$$
\beta_{IV} = \frac{Cov(Z, Y)}{Cov(Z, X)}
$$

This is the ratio of the reduced form (effect of $Z$ on $Y$) to the first stage (effect of $Z$ on $X$).

In practice, we often use two-stage least squares (2SLS):

**Stage 1**: Regress $X$ on $Z$ (and covariates if available):
$$
\hat{X} = \hat{\pi}_0 + \hat{\pi}_1 Z
$$

**Stage 2**: Regress $Y$ on $\hat{X}$ (and same covariates):
$$
Y = \beta_0 + \beta_{IV} \hat{X} + \epsilon
$$

The estimate $\hat{\beta}_{IV}$ is the IV estimate of the causal effect.

### Interpretation

- **With binary treatment and instrument**: $\beta_{IV}$ estimates the local average treatment effect (LATE)—the effect for "compliers" who change treatment status due to the instrument
- **With continuous treatment**: $\beta_{IV}$ estimates a weighted average of marginal effects

### Limitations

1. **Weak instruments**: When $Z$ is only weakly correlated with $X$, IV estimates can be biased and have poor statistical properties
2. **Exclusion violation**: If $Z$ affects $Y$ through channels other than $X$, estimates are biased
3. **Heterogeneous effects**: IV estimates a particular weighted average of effects, which may not equal the average treatment effect
4. **External validity**: LATE applies only to compliers, who may differ from the overall population

## Implementation in R

Let's simulate data to illustrate IV estimation. We'll create a scenario where:
- $Z$ is a binary instrument (e.g., lottery for small classes)
- $X$ is treatment uptake (actually attending small class)
- $Y$ is test scores
- $U$ is unobserved student ability (confounder)

```r
# Load required packages
library(ivpack)
library(ggplot2)
library(dplyr)

# Set seed for reproducibility
set.seed(123)

# Simulate data
n <- 1000  # Number of students

# Unobserved confounder: student ability
U <- rnorm(n, 0, 1)

# Instrument: random assignment (lottery)
Z <- rbinom(n, 1, 0.5)  # 50% chance of being assigned to small class

# Treatment: actually attending small class
# Affected by both instrument and ability (confounding)
X <- 0.3 * Z + 0.5 * U + rnorm(n, 0, 0.5)
X <- ifelse(X > 0.5, 1, 0)  # Convert to binary

# Outcome: test scores
# True causal effect: small class increases scores by 10 points
Y <- 70 + 10 * X + 5 * U + rnorm(n, 0, 5)

# Create data frame
data <- data.frame(Z = Z, X = X, Y = Y, U = U)

# Naive comparison (biased)
naive_effect <- mean(data$Y[data$X == 1]) - mean(data$Y[data$X == 0])
cat("Naive estimate (biased):", round(naive_effect, 2), "\n")

# First stage: effect of instrument on treatment
first_stage <- lm(X ~ Z, data = data)
cat("First stage coefficient:", round(coef(first_stage)["Z"], 3), "\n")
cat("F-statistic:", round(summary(first_stage)$fstatistic[1], 1), "\n")

# Reduced form: effect of instrument on outcome
reduced_form <- lm(Y ~ Z, data = data)
cat("Reduced form coefficient:", round(coef(reduced_form)["Z"], 3), "\n")

# IV estimate (Wald estimator)
iv_estimate <- coef(reduced_form)["Z"] / coef(first_stage)["Z"]
cat("IV estimate (Wald):", round(iv_estimate, 2), "\n")

# 2SLS manually
X_hat <- predict(first_stage)
second_stage <- lm(Y ~ X_hat, data = data)
cat("2SLS estimate:", round(coef(second_stage)["X_hat"], 2), "\n")

# Using ivpack package for proper inference
iv_model <- ivreg(Y ~ X | Z, data = data)
summary(iv_model)

# Compare with true effect (10)
cat("\nTrue effect: 10.00")
cat("\nIV estimate:", round(coef(iv_model)["X"], 2))
cat("\nBias:", round(coef(iv_model)["X"] - 10, 2))

# Visualization
plot_data <- data %>%
  group_by(Z, X) %>%
  summarise(mean_Y = mean(Y), se = sd(Y)/sqrt(n()), .groups = 'drop')

ggplot(plot_data, aes(x = factor(X), y = mean_Y, fill = factor(Z))) +
  geom_bar(stat = "identity", position = position_dodge()) +
  geom_errorbar(aes(ymin = mean_Y - 1.96*se, ymax = mean_Y + 1.96*se),
                width = 0.2, position = position_dodge(0.9)) +
  labs(x = "Treatment (Small Class)", y = "Test Score",
       fill = "Instrument\n(Lottery)",
       title = "IV Estimation: Class Size Effect on Test Scores",
       subtitle = "Bars show mean outcomes by treatment and instrument status") +
  theme_minimal() +
  scale_fill_manual(values = c("#3A6B6B", "#880112"))
```

### Interpretation of Output

The simulation should show:
1. **Naive estimate**: Biased upward (maybe ~15) because higher-ability students are more likely to attend small classes
2. **First stage**: Significant effect of lottery on actual attendance
3. **IV estimate**: Close to the true effect of 10, correcting for confounding

### Real-World Example: Cigarette Taxes and Smoking

Let's apply IV to a classic economics question: Do higher cigarette taxes reduce smoking? The concern is that states with higher taxes might have other anti-smoking policies or cultural differences.

```r
# Load AER package for CigarettesSW dataset
library(AER)

# Load data
data("CigarettesSW")
cig_data <- CigarettesSW

# Prepare data (1995 only)
cig_data <- subset(cig_data, year == 1995)

# Variables:
# packs = cigarette consumption per capita
# tax = cigarette tax
# price = price per pack
# income = state income

# Naive regression (potentially biased)
naive_model <- lm(log(packs) ~ log(price), data = cig_data)
summary(naive_model)

# IV approach: Use tax as instrument for price
# Assumption: tax affects consumption only through price
first_stage_cig <- lm(log(price) ~ log(tax), data = cig_data)
summary(first_stage_cig)

# Check instrument strength (F-statistic > 10 is good)
f_stat <- summary(first_stage_cig)$fstatistic[1]
cat("First stage F-statistic:", round(f_stat, 1), "\n")

# IV regression
iv_model_cig <- ivreg(log(packs) ~ log(price) | log(tax), data = cig_data)
summary(iv_model_cig)

# Compare naive and IV estimates
cat("\nNaive price elasticity:", round(coef(naive_model)["log(price)"], 3))
cat("\nIV price elasticity:", round(coef(iv_model_cig)["log(price)"], 3))

# Interpretation: A 1% increase in price reduces consumption by ~elasticity%
```

The IV estimate typically shows a larger (more negative) price elasticity than the naive estimate, suggesting that failing to account for endogeneity underestimates the effect of prices on smoking.

### Best Practices for IV Analysis

1. **Check instrument strength**: First-stage F-statistic > 10
2. **Test overidentifying restrictions**: If multiple instruments, test whether they give similar estimates
3. **Report first stage**: Always show the relationship between instrument and treatment
4. **Discuss exclusion**: Provide theoretical justification for why instrument affects outcome only through treatment
5. **Consider heterogeneity**: Interpret estimates as LATE for compliers
6. **Sensitivity analysis**: Test how results change with different instruments or specifications

### Common Pitfalls

1. **Weak instruments**: Can cause bias worse than naive estimation
2. **Invalid instruments**: The most common problem—instruments that violate exclusion
3. **Sample selection**: Instruments that affect sample composition
4. **Measurement error**: Can exacerbate weak instrument problems
5. **External validity**: LATE may not generalize to entire population

### Further Reading

For more advanced topics:
- **Many instruments**: LIML, Fuller-k class estimators
- **Weak instruments**: Anderson-Rubin tests, conditional likelihood ratio tests
- **Nonlinear models**: Control function approach, maximum likelihood
- **Heterogeneous effects**: Marginal treatment effects framework

Instrumental variables remain one of the most important tools in the causal inference toolkit, turning natural experiments into credible causal estimates when randomized trials are not feasible.