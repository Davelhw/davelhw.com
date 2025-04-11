// src/components/Footer.tsx
export default function Footer() {
    return (
      <footer className="w-full border-t border-gray-200 mt-16 py-6 text-center text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Dave Lim. Built with ❤️ using Next.js & TailwindCSS.
        </p>
      </footer>
    );
  }
  