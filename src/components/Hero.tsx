// src/components/Hero.tsx
export default function Hero() {
    return (
      <section className="flex flex-col items-center justify-center text-center min-h-[60vh] px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-blue-700">
          Dave Lim
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 max-w-2xl">
          A passionate full-stack engineer who turns ideas into powerful systems — from RabbitMQ game pipelines to personal branding sites like this.
        </p>
        <div className="mt-6 space-x-4">
          <a
            href="https://linkedin.com/in/davelhw"
            target="_blank"
            className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition"
          >
            LinkedIn
          </a>
          <a
            href="#contact"
            className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    );
  }
  