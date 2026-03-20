# Pull Request: Add Allen Career Compass Redirect Route

## Branch Name
`feat/allen-career-compass-redirect`

## Summary
This PR adds `/allen-career-compass` to `scaler-inspired-learn` and redirects that route to the dedicated Allen frontend deployment. This makes the landing app the public entry point for the Allen journey while the Allen-specific frontend remains the actual destination.

## Description
The Allen experience is no longer intended to be served from the main `acadspace-pathfinder` app. Instead, the landing project should own the public route and forward users to the Allen deployment. This PR introduces a route-level redirect in the same style as the existing partner redirects already present in `scaler-inspired-learn`.

## Key Changes
1. **Added Allen Redirect Component**
   - Added `AllenCareerCompassRedirect` using `window.location.replace(...)`.

2. **Registered the Public Route**
   - Added `/allen-career-compass` to the landing app router.

3. **Redirect Target**
   - Redirects to `https://acadspace-pathfinder-allen.vercel.app/`.
   - This can later be switched to `https://allen.naviksha.co.in/` once the custom domain is active.

## Testing Instructions
1. Run `scaler-inspired-learn`.
2. Open `/allen-career-compass`.
3. Confirm the browser redirects to the Allen frontend deployment.
4. Verify existing redirect routes such as `/engineers-test` and `/applichoice` still behave correctly.

## Verification / Validation
- `npm run build` passes successfully.

## Cross-Repo Dependency
- Coordinated with `acadspace-pathfinder`
- Companion branch: `fix/remove-allen-career-compass-route`
- Companion PR removes the old embedded route from the main app
