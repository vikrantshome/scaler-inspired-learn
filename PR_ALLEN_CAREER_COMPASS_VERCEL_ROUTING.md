# Pull Request: Fix Vercel Routing for Allen Career Compass

## Branch Name
`fix/allen-career-compass-vercel-routing`

## Summary
This PR fixes the Vercel configuration for `/allen-career-compass` after the Allen landing page was merged. The route itself is already implemented in the app; this follow-up ensures `vercel.json` uses the correct schema so the deployment can succeed and the route can be served correctly.

## Description
The Allen landing page was added to `scaler-inspired-learn`, but the Vercel config still mixed route types in a way that violates Vercel's schema. Specifically, `/allen-career-compass` needs to stay under `rewrites` so the React app can render the page, while the existing partner shortcuts such as `/engineers-test` and `/applichoice` must remain under `redirects`.

This PR splits those concerns cleanly so the route behaves correctly and the config validates during deployment.

## Key Changes
1. **Allen Route Rewrite**
   - Keeps `/allen-career-compass` under `rewrites`
   - Ensures the landing app serves the page instead of redirecting away

2. **Partner Redirect Hygiene**
   - Keeps `/engineers-test` and `/applichoice` under `redirects`
   - Preserves their `permanent` redirect behavior in the correct schema section

3. **Documentation Alignment**
   - Updates the repo-tracked PR markdown so the implementation notes match the actual Vercel routing setup

## Testing Instructions
1. Deploy the updated `scaler-inspired-learn` branch.
2. Open `/allen-career-compass` and confirm the Allen landing page renders.
3. Confirm `/engineers-test` still redirects to `https://engineers-test.naviksha.co.in/`.
4. Confirm `/applichoice` still redirects to `https://applichoice.naviksha.co.in/`.
5. Confirm Vercel no longer reports a schema validation error for `vercel.json`.

## Verification / Validation
- `vercel.json` parses successfully.
- This PR contains only the post-merge Vercel routing fix.

## Context
- Follow-up to merged PR #10:
  `feat: serve Allen Career Compass as a landing page`
