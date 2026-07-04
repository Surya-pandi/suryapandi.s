# Surya Pandi — Portfolio

A multi-page Next.js portfolio with scroll-linked 3D motion, responsive layouts, a Supabase-backed contact form, and Vercel-ready production settings.

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Connect Supabase

1. Create a Supabase project.
2. Run `supabase.sql` in the Supabase SQL Editor.
3. Copy `.env.example` to `.env.local` and add the project URL and service role key.
4. Never expose `SUPABASE_SERVICE_ROLE_KEY` in browser code or commit it to Git.

The contact API validates input server-side and writes to the private `contact_messages` table.

## Deploy to Vercel

1. Push this project to GitHub and import it in Vercel.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in **Project Settings → Environment Variables**.
3. Deploy. Vercel detects Next.js automatically; no custom build configuration is needed.

## Personalize

- Edit project content in `lib/projects.ts`.
- Replace imagery in `public/images` while keeping the existing filenames, or update the image paths.
- Update email and social links in `components/footer.tsx` and `app/contact/page.tsx`.
- Update the production URL in `app/layout.tsx`.
