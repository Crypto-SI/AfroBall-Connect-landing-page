# AfroBall Connect

Welcome to AfroBall Connect, the premier global destination for streaming African football! This project is the landing page for the upcoming service.

## Project Overview

This Next.js application serves as the initial landing page for AfroBall Connect. It aims to introduce the brand, showcase upcoming features, and allow interested users and partners to sign up for a mailing list.

## Tech Stack

*   **Framework:** Next.js (with App Router)
*   **UI Components:** shadcn/ui
*   **Styling:** Tailwind CSS
*   **Backend (Mailing List):** Supabase
*   **Deployment (Initial Dev Preview):** Docker

(Refer to `context/tech.md` for more details before it was gitignored - this information should ideally be moved here or to a more permanent project documentation space if `context` is purely for temporary AI interaction files).

## Getting Started

### Prerequisites

*   Node.js (v20 or later recommended)
*   npm (or yarn/pnpm)
*   Docker (for running the dev environment as currently set up)

### Development Environment

1.  **Clone the repository (if applicable).**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    Create a `.env.local` file in the root directory and add your Supabase URL and Anon Key:
    ```
    NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```
4.  **Run the development server (locally without Docker):**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5.  **Run with Docker (as set up in previous steps):**
    *   Build the image: `docker build -t afroball-connect-dev .`
    *   Run the container: `docker run -d -p 3000:3000 --name afroball-connect-app afroball-connect-dev`
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

*   `/src/app`: Core application pages and layouts (App Router).
*   `/src/components`: Reusable UI components (including shadcn/ui components).
*   `/src/lib`: Utility functions (e.g., `cn` from shadcn/ui).
*   `/public`: Static assets.
*   `Dockerfile`: For containerizing the application.
*   `.dockerignore`: Specifies files to ignore for Docker builds.

## Future Roadmap

This section outlines the planned future development for AfroBall Connect.

### Phase 1: Landing Page Enhancements & Pre-Launch (Current Focus)

*   [ ] **Mailing List Integration:** Fully implement Supabase backend for mailing list sign-ups.
*   [ ] **Detailed Features Section:** Expand on the features placeholder with more compelling copy and visuals.
*   [ ] **App Prototype Page/Link:** Create a dedicated page or link to an external Figma/interactive prototype showcasing the app's UI/UX.
*   [ ] **Content Update:** Replace all placeholder text and images with final brand assets and copy.
*   [ ] **SEO Optimization:** Basic on-page SEO for the landing page.
*   [ ] **Responsive Design Polish:** Ensure flawless display across all major devices and screen sizes.
*   [ ] **Accessibility (A11y) Review:** Basic accessibility checks.

### Phase 2: Core Application Development (Post-Landing Page Launch)

*   [ ] **User Authentication:** Secure user registration and login (likely with Supabase Auth).
*   [ ] **Video Streaming Integration:** Integrate a robust video streaming solution for live matches and VOD.
*   [ ] **Content Management System (CMS):** Set up a CMS for managing match schedules, news, and other dynamic content.
*   [ ] **User Profiles & Preferences:** Allow users to customize their experience.
*   [ ] **Search & Discovery:** Powerful search functionality for matches, teams, players, etc.
*   [ ] **Community Features:** Forums, comment sections, or social sharing.
*   [ ] **Subscription & Payments:** If applicable, integrate a payment gateway for premium features.
*   [ ] **Admin Dashboard:** For managing users, content, and platform settings.

### Phase 3: Expansion & Advanced Features

*   [ ] **Mobile Applications:** Develop native iOS and Android apps.
*   [ ] **Personalized Recommendations:** AI-driven content suggestions.
*   [ ] **Interactive Stats & Data Visualizations:** Rich data for football nerds.
*   [ ] **Multilingual Support:** Cater to a broader African and global audience.
*   [ ] **Partnerships & Integrations:** Collaborate with leagues, clubs, and other media outlets.

## Contributing

Details on how to contribute to the project will be added here if it becomes open source or accepts external contributions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
