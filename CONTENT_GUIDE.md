# Portfolio content guide

Most repeatable content lives in the `src/data` directory. Update the data file once and the homepage and matching detail page will stay in sync.

## Quick edit map

| What you want to change | File to edit |
| --- | --- |
| Name, email, GitHub, LinkedIn, availability, SEO description | `src/config/site.ts` |
| Degrees, GPA, year/status, coursework, academic award | `src/data/education.ts` |
| International programs, leadership, workshops, volunteering, activity hours | `src/data/activities.ts` |
| Work, research, freelance hardware, and leadership experience | `src/data/experience.ts` |
| Technical evidence, soft skills, and current learning goals | `src/data/skills.ts` |
| Project cards, case studies, repository links, and contributions | `src/data/projects.ts` |
| Homepage introduction and headline statistics | `src/components/sections/hero-section.tsx` |
| Longer personal story and focus areas | `src/app/about/page.tsx` |
| Profile photo | `public/images/profile.jpg` |
| Social sharing image | `public/og.png` |
| Downloadable CV content | `scripts/generate_resume.py` |

## Common future updates

### Update your university status

Start in `src/data/education.ts`: update the PSU entry's `status`, `period`, `gpa`, `description`, and learning groups. When you graduate, change `status` from the current-year wording to `Graduated` and replace `2024 – Present` with the final year range.

The short third-year/GPA summary also appears in a few presentation files. Search the project for the old value, then update:

- `src/components/sections/hero-section.tsx` for the homepage introduction and GPA statistic.
- `src/app/about/page.tsx` for the longer biography.
- `src/config/site.ts` for the search/social description.
- `scripts/generate_resume.py` for the downloadable CV, then regenerate and copy the PDF as described below.

### Update activity hours

Change the canonical figures in `src/data/activities.ts`. The Activities page reads those values directly. Also update the homepage statistic in `src/components/sections/hero-section.tsx`, the leadership evidence in `src/data/skills.ts`, and the CV text in `scripts/generate_resume.py`.

### Add an activity

Add a new object to the `activities` array in `src/data/activities.ts`.

- Use `featured: true` only for the strongest current highlights.
- Add a `sources` link when an official university or event page exists.
- Do not invent a date, metric, or role when the public page only verifies the event.
- Update `activityStats` in the same file when your recorded activity hours change.

### Add a project

Add one complete object to the `projects` array in `src/data/projects.ts`.

- Keep the `slug` unique and URL-friendly.
- Describe your exact role, especially for team or external repositories.
- Link to your contribution history when the repository is not owned by you.
- Only set `featuredOrder` for work you want on the homepage.

### Update skills honestly

Edit `src/data/skills.ts` and choose the evidence label that matches reality:

- `repeated-project-use`: used in more than one documented build.
- `practical-experience`: used in freelance, customer, leadership, or operational work.
- `project-exposure`: used hands-on in at least one project or prototype.
- `coursework-exposure`: introduced and practised through study or guided exercises.
- `learning-now`: an active learning goal, not a claimed capability.

This evidence system is intentionally more credible than percentages or labels such as "expert."

## Regenerate the CV

The website downloads `public/resume.pdf`. The editable source is `scripts/generate_resume.py`, and the archival output is `output/pdf/shine-bo-bo-cv.pdf`.

After editing the script, run:

```bash
python3 scripts/generate_resume.py
cp output/pdf/shine-bo-bo-cv.pdf public/resume.pdf
```

The script requires ReportLab. If it is not installed in your Python environment:

```bash
python3 -m pip install reportlab
```

The CV currently includes your phone number and Kathu/Phuket location because they were already present in the public PDF. Remove or change those lines in `scripts/generate_resume.py` if you prefer less public contact information.

## Check before deploying

Run these from the project directory:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Then open the important pages at desktop and mobile widths: `/`, `/projects`, `/skills`, `/experience`, `/education`, `/activities`, and `/contact`. Also open `/resume.pdf` and test its links.

If this repository remains connected to Vercel, pushing the final commit to the configured production branch should trigger a new deployment.

## Accuracy checklist

- Keep dates in reverse chronological order where possible.
- Update `Current`, `Present`, GPA, activity hours, and availability whenever they change.
- Keep official source links for awards, selections, curricula, and public programs.
- Separate curriculum exposure from production work experience.
- For collaborative projects, describe only the work you can support through commits, pull requests, or documentation.
