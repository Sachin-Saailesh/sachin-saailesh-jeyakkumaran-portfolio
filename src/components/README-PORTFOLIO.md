
# Portfolio Customization Summary

## What changed
- **Main.tsx**: Replaced name, role, tagline; wired working email and LinkedIn; simplified social set for clean mobile layout.
- **Footer.tsx**: Personalized copyright and links; removed upstream credit from UI.
- **Navigation.tsx**: Renamed nav items to Skills / Experience / Projects / Contact; preserved smooth-scroll + dark mode.
- **Expertise.tsx**: Rewrote copy and skill chips from resume; grouped by Modeling, Web, and Data/Cloud.
- **Project.tsx**: Replaced placeholders with three flagship projects (RT‑DETR vs YOLOv11, Legal‑BERT ECtHR‑B, CityLearn RL) and concrete metrics.
- **Timeline.tsx**: Merged Experience and Education; added bullet outcomes and metrics.
- **Contact.tsx**: Implemented mailto-based send action for instant working contact; clear validation + microcopy.

## Tone
- “Professional and creative yet approachable”: concise action verbs, outcome‑first bullets, and human‑sounding microcopy.

## Responsiveness & UX
- All components retain MUI responsiveness, grid layouts, and mobile nav drawer.
- Accessible labels on icons; contrast inherited from theme.

## Animations
- Keep existing CSS/JS transitions; timeline has built‑in reveal. You can further add intersection observers if desired.

## SEO
- Add/update meta tags and Open Graph in your HTML template or Next.js head:
  - Title: "Sachin Saailesh Jeyakkumaran — AI/ML Engineer"
  - Description: One‑sentence summary from Main.tsx tagline
  - Canonical URL + social preview image
- Add JSON‑LD `Person` schema (name, sameAs for LinkedIn).

## Next steps
- Place your headshot at `/assets/images/avatar.jpg` (square, ~512px).
- If you have repos/demos, add links under each project card.
- Consider enabling EmailJS if you prefer form submission without mail client.
