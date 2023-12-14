
# Movie Site Front-end


This is the front-end repository for the Movie Site website. It is built using Next.js, Material-UI, and Tailwind CSS.

## Tech Stack

- [Next.js](https://nextjs.org/) (v14.0.4)
- [Material-UI](https://mui.com/) (v5.15.0)
- [Tailwind CSS](https://tailwindcss.com/) (v3.3.6)
- [Husky](https://github.com/typicode/husky) (v8.0.3)
- [Jest](https://jestjs.io/) (v29.7.0)
- [@testing-library/react](https://testing-library.com/react) (v14.1.2)
- [@testing-library/jest-dom](https://testing-library.com/docs/queries/about/) (v6.1.5)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. **Install dependencies:**

   ```bash
   npm install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   ```

Your app will be available at http://localhost:3000.

## Scripts

- `dev`: Start the development server using Next.js.
- `build`: Build the production-ready application using Next.js.
- `start`: Start the production server using Next.js.
- `lint`: Run ESLint to lint your code.
- `clean`: Clean the build artifacts (.next and out directories) using rimraf.
- `test`: Run Jest tests in watch mode.
- `test:ci`: Run Jest tests in CI mode with coverage.
- `prepare`: Install Husky hooks.

## Testing

This project uses Jest for testing along with @testing-library/react and @testing-library/jest-dom. Run tests using:

```bash
npm run test
```