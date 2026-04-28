import foodHygieneRating from "@/assets/foodhygienerating.svg";
import logo from "@/assets/logo.png";

const testimonials = [
  {
    name: "Margaret H., Witham",
    quote:
      "The meals are absolutely delicious and the delivery ladies are so kind. It's the highlight of my day.",
  },
  {
    name: "David & Jean T., Maldon",
    quote:
      "After my wife's operation we needed help. Essex Meals on Wheels were brilliant — proper home-cooked food every day.",
  },
  {
    name: "Sandra K., Braintree",
    quote:
      "My mother looks forward to her meal and the chat. It's given our whole family such peace of mind.",
  },
];

const links = [
  { label: "Our Menu", desc: "See this week's meal choices", href: "#" },
  { label: "How to Order", desc: "Getting started is simple", href: "#" },
  { label: "Delivery Areas", desc: "Find out if we deliver to you", href: "#" },
  { label: "About Us", desc: "Our story and our team", href: "#" },
  { label: "Contact Us", desc: "Get in touch with us", href: "#" },
  { label: "Privacy Policy", desc: "How we use your information", href: "#" },
];

const highlights = [
  { label: "Cooked fresh daily by a professional chef" },
  { label: "Delivered hot to your door, 7 days a week" },
  { label: "All staff fully DBS checked" },
  { label: "5-star food hygiene rating" },
  { label: "Vegetarian and vegan options available" },
  { label: "Hot meal and dessert from just £8.50" },
];

export default function App() {
  return (
    <div
      className="min-h-screen bg-white text-gray-900 flex flex-col"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {/* Top bar */}
      <div className="bg-blue-950 text-white text-base px-6 py-3 flex items-center justify-between border-b-4 border-yellow-500">
        <span>Serving mid-Essex daily</span>
        <a
          href="tel:01376297552"
          className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors tracking-wide"
        >
          Tel: 01376 297 552
        </a>
      </div>

      {/* Header */}
      <header
        className="relative bg-blue-950 text-white"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(15,27,50,0.95) 50%, rgba(15,27,50,0.6) 100%), url('https://images.unsplash.com/photo-1547592180-85f173990554?w=1400&q=80')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <p className="text-yellow-400 text-lg font-semibold uppercase tracking-widest mb-4">
            Family-run since 1995
          </p>
          <div className="flex flex-row items-center">
            <img src={logo} className="h-24 md:h-32 object-contain" />
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Essex Meals
              <br />
              On Wheels
            </h1>
          </div>

          <p className="text-blue-100 text-2xl max-w-xl mb-4 leading-relaxed">
            Fresh, nutritious meals delivered with care — cooked daily and
            brought to your door by a friendly, trusted team.
          </p>
          <p className="text-blue-300 text-xl mb-10">
            Hot meal and dessert from{" "}
            <span className="text-white font-bold">£8.50</span> — delivered for
            every day of the week
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:01376297552"
              className="btn btn-warning text-blue-950 font-bold text-xl px-8 py-4 h-auto rounded-none"
            >
              Call: 01376 297 552
            </a>
            <a
              href="#"
              className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-950 font-bold text-xl px-8 py-4 h-auto rounded-none"
            >
              See Our Menu
            </a>
          </div>
        </div>
      </header>

      {/* Highlights strip */}
      <div className="bg-gray-100 border-t-4 border-b-4 border-gray-300">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {highlights.map(({ label }) => (
            <div
              key={label}
              className="flex items-start gap-3 text-lg text-gray-700"
            >
              <span className="text-blue-950 font-bold mt-0.5 text-xl">
                &#10003;
              </span>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <main className="flex-1 flex flex-col items-center py-14 px-6 gap-14">
        {/* About */}
        <section className="w-full max-w-4xl border-l-4 border-blue-950 pl-8">
          <h2 className="text-3xl font-bold text-blue-950 mb-4">
            Welcome to Essex Meals on Wheels
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            We are a proud family-run business dedicated to providing
            high-quality, freshly prepared meals to the elderly and those who
            find cooking for themselves difficult. We believe that everyone
            deserves a hot, delicious meal and a friendly face each day.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed">
            All of our meals are made using locally sourced produce, cooked
            fresh by an experienced professional chef, and delivered hot and
            ready to enjoy straight to your door.
          </p>
        </section>

        {/* Navigation links */}
        <section className="w-full max-w-4xl ">
          <h2 className="text-2xl font-bold text-blue-950 mb-6 border-b-2 border-gray-300 pb-3">
            Find Out More
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {links.map(({ label, desc, href }) => (
              <a
                key={label}
                href={href}
                className="group flex items-center justify-between bg-gray-50 border border-gray-300 hover:bg-blue-950 hover:border-blue-950 p-5 transition-colors duration-150"
              >
                <div>
                  <p className="text-xl font-bold text-blue-950 group-hover:text-white">
                    {label}
                  </p>
                  <p className="text-base text-gray-500 group-hover:text-blue-200 mt-0.5">
                    {desc}
                  </p>
                </div>
                <span className="text-2xl text-gray-300 group-hover:text-white font-bold ml-4">
                  &#8250;
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-blue-950 mb-6 border-b-2 border-gray-300 pb-3">
            What Our Customers Say
          </h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {testimonials.map(({ name, quote }) => (
              <div key={name} className="bg-gray-50 border border-gray-300 p-6">
                <p className="text-5xl text-blue-950 leading-none mb-3 font-serif">
                  &ldquo;
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {quote}
                </p>
                <p className="text-base font-bold text-blue-950 border-t border-gray-200 pt-3">
                  {name}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-950 text-blue-200 border-t-4 border-yellow-500">
        <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-start justify-between gap-8">
          <div>
            <img src={logo} alt="Essex Meals on Wheels Logo" width={120} />
          </div>
          <div>
            <p className="text-white font-bold text-2xl mb-3">
              Essex Meals on Wheels
            </p>
            <p className="text-lg">2 Church Street, Witham, Essex CM8 3TH</p>
            <p className="text-lg mt-1">
              Tel:{" "}
              <a
                href="tel:01376297552"
                className="text-yellow-400 hover:text-yellow-300 font-bold"
              >
                01376 297 552
              </a>
            </p>
            <p className="text-lg mt-1">
              <a
                href="mailto:essexmeals@btinternet.com"
                className="hover:text-white transition-colors"
              >
                essexmeals@btinternet.com
              </a>
            </p>
            <p className="text-lg mt-1">
              <a
                href="https://essexmealsonwheels.co.uk"
                className="hover:text-white transition-colors"
              >
                essexmealsonwheels.co.uk
              </a>
            </p>
            <p className="mt-6 text-blue-400 text-base">
              © {new Date().getFullYear()} Essex Meals on Wheels. All rights
              reserved.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src={foodHygieneRating}
              alt="Food Hygiene Rating 5 — Very Good"
              className="h-20"
            />
            <p className="text-sm text-blue-400">Food Standards Agency</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
