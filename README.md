# Fouad Abdulhakeem — Cybersecurity Portfolio

A responsive, photo-free portfolio for a final-year cybersecurity student, with an interactive desk laptop. Built using accessible HTML, CSS and browser JavaScript. No server, API keys or build dependencies required.

## Run locally

Serve `dist/` using any static web server, for example `python3 -m http.server 8000 --directory dist`.

## AWS Amplify Hosting

This project is prepared for Amplify but has not yet been deployed to AWS. For manual deployment, zip the **contents** of `dist/` so `index.html`, `style.css`, and `script.js` sit at the archive root, then upload that zip through Amplify Hosting's manual deployment flow. Alternatively connect a GitHub repository and use the included `amplify.yml` (artifact directory `dist`).

Before challenge submission: verify the current official setup guide and eligibility rules, deploy to Amplify, confirm public accessibility and navigation on desktop/mobile, capture the AWS deployment and website screenshots, and publish a GitHub repository link in the submission. Keep the site accessible through judging.

## Content notes

- All 11 certificate pictures are rendered from owner-supplied PDFs. Ten Credly links were matched using each public page's badge title and recipient name. The TryHackMe certificate uses its own public certificate page. Ethical Hacker is a separate course credential, not grouped under the Junior Cybersecurity Analyst path.
- Project visuals are labelled process/concept illustrations, not original screenshots.
- Project notes summarise learning work, not professional incident-response experience.
- The interactive laptop runs entirely in the browser and stores visitor notes and doodles only in page memory.
- No photograph, avatar, analytics, or contact form is used. Email opens the visitor's mail client.
- Google Fonts are optional external resources; system fonts provide fallbacks.

## Remaining owner review

Confirm project descriptions and exact contribution, and review all public-facing text before the AWS launch.

## Playful interactions — laptop version

The desk supports bounded pointer dragging and keyboard arrow movement on drag handles, with a reset control. Project folders open notes. Notebook tabs, reversible sticky notes, inline story reveals, and expandable skills and credentials work without any score or checklist.

The desk laptop opens FouadOS, an original browser desktop with four optional apps:

- Doodle pad: pointer drawing, five colours, undo and clear. Normalised strokes survive app switches and resize.
- Notes: an editable scratchpad retained in page memory until reload.
- My certifications: a thumbnail gallery of all 11 credentials, with issuer filters, a large viewer, and the matching verification links.
- Tiny terminal: a simulated, allowlisted interface with 25 commands, command-specific help, history navigation, Tab completion, and clickable command suggestions. It never executes system commands or accesses files on the visitor's computer.

Wallpaper changes, app minimise/close, and desktop navigation are included. No server or user account is needed. The earlier puzzle, investigation, and discovery checklist have been removed in this version.

Verified in browser: laptop opening, desktop and mobile-width layout, drawing, notes retention between app openings, terminal commands, and project notes opened from My files. The earlier Playful Version 1 ZIP is a separate preserved checkpoint.

## Certificate gallery and cursor

The image gallery uses progressive enhancement: certificates are visible without JavaScript, and IntersectionObserver adds a once-only scatter-to-gallery animation. Reduced-motion preferences bypass animation. Issuer filters, a larger certificate viewer, previous/next controls, arrow-key navigation, and external verification links are included.

Certificate metadata is embedded in certificates.js for file:// previews, with certificates.json as a readable reference. Images are under dist/assets/certificates/. Source PDFs remain unchanged.

The small blue scanner cursor uses local SVG assets on devices with a fine pointer. The footer toggles between scanner and classic cursors. Text fields, drawing, and drag handles retain appropriate cursors. Touch devices use normal touch behaviour.

Verified: all 11 images exist; all 11 external verification targets are distinct; ten Credly titles match supplied badge links; TryHackMe verification and its public PDF respond successfully. Browser checks cover gallery images, filtering, certificate viewer navigation, Ethical Hacker's exact link, cursor CSS, and the phone-width viewer with no horizontal overflow.

## Laptop gallery and terminal update

The desktop app and miniature laptop icon now refer to certificates. Main-page and laptop galleries share certificate metadata; the viewer retains the appropriate filtered collection for previous/next navigation. Terminal commands can open the certificate gallery, paint, or notes. Projects remain available as a terminal summary and in the main portfolio.

Browser checks covered gallery filtering and correct credential links, filtered viewer navigation, literal output escaping, help, Arrow-Up history, Tab completion, and the wallpaper command.

Phone-width checks confirmed the laptop gallery fits without horizontal overflow and the certs terminal command opens it successfully.

## Cursive identity, welcome intro, and expanded tools

Header and footer use the self-hosted Allura font under its included SIL Open Font License. The favicon is a vector outline of the same capital F, with a PNG fallback, and contains no period. It uses a white F on a rounded blue background.

The introductory visitor-session animation runs once per tab session, lasts about 2.3 seconds including its exit, and has a Skip control, Escape dismissal, reduced-motion behaviour, and a footer replay button. It is decorative and does not claim to run a security scan. Normal content remains available without JavaScript.

The toolkit lists the owner's supplied tools as hands-on learning exposure, grouped into network/wireless, vulnerability/web, reconnaissance, password auditing, forensics, and building/data. It does not imply professional proficiency. The terminal's tools and skills commands share this expanded list.

Verified in browser: automatic intro completion, replay, immediate Skip dismissal, local cursive wordmark rendering, all supplied tool names, tools-command output, and phone-width header without horizontal overflow.

## Portfolio reading order

Hero → short About → selected projects → tools → certifications → interactive desk → Contact. The hero links to work and offers an Explore my desk shortcut. Section labels and navigation follow this ordering. Project copy still awaits owner-supplied screenshots, contribution details, and findings; no new results are invented.


Project evidence update: actual user-supplied screenshots replace concept covers. Notes distinguish personal Autopsy work, a specific MongoDB denial, AgentArena interface evidence, and supporting Hadoop coursework. No live-run or unverified role claims. Hadoop Java-version discrepancy retained in notes.
