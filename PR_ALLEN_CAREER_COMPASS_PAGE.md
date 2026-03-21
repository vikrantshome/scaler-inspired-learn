# Pull Request: Serve Allen Career Compass as a First-Class Landing Page

## Branch Name
`feat/allen-career-compass-page`

## Summary
This PR replaces the `/allen-career-compass` redirect with a real landing page inside `scaler-inspired-learn`. Instead of bouncing users to another URL immediately, the landing site now renders the Allen-branded Career Compass experience directly and keeps the CTA flow pointed at the dedicated Allen application instance.

## Description
The original implementation routed `/allen-career-compass` through a redirect, which prevented the Allen landing experience from being served from the landing repo itself. This PR moves that experience into `scaler-inspired-learn` by:

- adding a dedicated `AllenCareerCompass` page
- wiring `/allen-career-compass` to render that page
- converting the Vercel rule from a redirect to a rewrite so the landing app can handle the route

This keeps the public entry experience in the landing repo while still sending users into the Allen-specific app when they choose to start the assessment.

## Key Changes
1. **Real Allen Landing Page**
   - Added `src/pages/AllenCareerCompass.tsx`
   - Implements the Allen Career Compass landing experience directly in this repo

2. **Route-Level Rendering**
   - Updated `src/App.tsx`
   - `/allen-career-compass` now renders the Allen page instead of redirecting away

3. **Vercel Routing Fix**
   - Updated `vercel.json`
   - Replaced the `/allen-career-compass` redirect with a rewrite so the React router can serve the page
   - Kept `/engineers-test` and `/applichoice` as standard redirects under the `redirects` section to match Vercel schema requirements

4. **Allen App CTA Target**
   - The Allen landing page CTA links point to the dedicated Allen application instance:
     - `https://acadspace-pathfinder-allen.vercel.app/auth`

## Testing Instructions
1. Run the landing app locally.
2. Open `/allen-career-compass`.
3. Confirm the Allen landing page renders inside `scaler-inspired-learn`.
4. Confirm the page no longer redirects immediately on load.
5. Click the CTA and verify it opens the Allen application instance.
6. Verify `/engineers-test` and `/applichoice` continue to behave as before.

## Verification / Validation
- `npm run build` passes successfully.

## Notes
- This supersedes the earlier redirect-only approach.
- When `allen.naviksha.co.in` is ready, the CTA target can be updated from the current Allen Vercel URL to the custom domain if desired.
