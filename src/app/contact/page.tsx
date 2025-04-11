// src/app/contact/page.tsx
export default function ContactPage() {
    return (
      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-blue-700">Contact</h1>
  
        <p className="text-lg text-gray-700 mb-6">
          Whether you&#39;re looking to collaborate, hire, or just have a good chat about tech — I’d love to hear from you!
        </p>
  
        <ul className="space-y-4 text-lg text-gray-600">
          <li>
            📧 Email: <a href="mailto:dave@davelhw.com" className="text-blue-600 hover:underline">dave@davelhw.com</a>
          </li>
          <li>
            💼 LinkedIn: <a href="https://linkedin.com/in/davelhw" target="_blank" className="text-blue-600 hover:underline">linkedin.com/in/davelhw</a>
          </li>
          <li>
            💻 GitHub: <a href="https://github.com/davelhw" target="_blank" className="text-blue-600 hover:underline">github.com/davelhw</a>
          </li>
        </ul>
      </section>
    );
  }
  