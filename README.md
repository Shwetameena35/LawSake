# CyberLex Advocate Website

A Next.js website for CyberLex Advocate - Leading Cyber Law Firm in India.

## Features

- Modern, responsive design
- Hero section with call-to-action
- About section with team members
- Statistics and awards section
- Practice areas showcase
- Client reviews/testimonials
- FAQ section
- Contact page with form
- Blog page (coming soon)
- WhatsApp integration button
- Mobile-friendly navigation

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd "advocate website"
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
advocate website/
├── app/
│   ├── about/          # About page
│   ├── blog/           # Blog page
│   ├── contact/        # Contact page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── About.tsx       # About section component
│   ├── FAQ.tsx         # FAQ section component
│   ├── Footer.tsx      # Footer component
│   ├── Header.tsx      # Header/Navigation component
│   ├── Hero.tsx        # Hero section component
│   ├── PracticeAreas.tsx # Practice areas section
│   ├── Reviews.tsx     # Reviews section component
│   ├── Stats.tsx       # Statistics section component
│   └── WhatsAppButton.tsx # WhatsApp button component
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- React Icons

## Customization

You can customize the website by:
- Updating content in component files
- Modifying colors in `tailwind.config.js`
- Adding images to the `public` folder
- Updating contact information in components

## License

This project is created for CyberLex Advocate.

