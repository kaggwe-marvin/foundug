# FoundUG

A web application for reporting and discovering lost-and-found items.

**Live demo:** https://foundug.vercel.app

> **Note:** This repository is currently **archived**. The codebase is provided as-is for reference.

## Features

- Create and browse listings for lost and found items
- Modern UI built with Next.js and Tailwind CSS
- Data validation with Zod
- Backend services powered by Supabase

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + DaisyUI
- **Backend / DB:** Supabase

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn / pnpm)

### Installation

```bash
git clone https://github.com/kaggwe-marvin/foundug.git
cd foundug
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and set the following values:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

## Scripts

- `npm run dev` — start local development server
- `npm run build` — build for production
- `npm run start` — start production server
- `npm run lint` — run ESLint

## Deployment

This project is deployed on Vercel.

- Build command: `npm run build`
- Output: Next.js default

## Contributing

Because this repository is archived, contributions are not being accepted. If you'd like to build on the idea, feel free to fork the project.

## License

No license file is currently included in this repository. If you plan to reuse or redistribute this code, add an appropriate license first.
