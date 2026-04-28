import foodHygieneRating from "@/assets/foodhygienerating.svg";
import logo from "@/assets/logo.png";
import fish from "@/assets/food/fish.jpg";
import pie from "@/assets/food/pie.jpg";
import sausages from "@/assets/food/sausages.jpg";
import foodDelivery from "@/assets/fooddelivery.png";
import menuPdf from "@/assets/mow_flyer_april26.pdf";

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

const highlights = [
  { label: "Cooked fresh daily by a professional chef" },
  { label: "Delivered hot to your door, 7 days a week" },
  { label: "All staff fully DBS checked" },
  { label: "5-star food hygiene rating" },
  { label: "Vegetarian and vegan options available" },
  { label: "Hot meal and dessert from just £8.50" },
];

const menuItems = [
  {
    img: fish,
    title: "Battered Fish",
    desc: "Golden battered fish fillet with creamy mashed potato and garden peas",
  },
  {
    img: pie,
    title: "Cottage Pie",
    desc: "Rich, slow-cooked filling in a buttery shortcrust pastry with seasonal veg",
  },
  {
    img: sausages,
    title: "Pork Sausages",
    desc: "Hearty Cumberland sausages with fluffy mash and thick onion gravy",
  },
];

const deliveryAreas = [
  "Witham",
  "Braintree",
  "Halstead",
  "Maldon",
  "Tiptree",
  "Kelvedon",
  "Coggeshall",
  "Silver End",
  "Hatfield Peverel",
  "Wickham Bishops",
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
          href="tel:01376423462"
          className="font-bold text-yellow-400 hover:text-yellow-300 transition-colors tracking-wide"
        >
          Tel: 01376 423 462
        </a>
      </div>

      {/* Header */}
      <header
        className="text-white"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0f1b32 50%, #1a3a5c 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-0 flex flex-col md:flex-row md:items-center gap-8">
          {/* Left: text */}
          <div className="flex-1 pb-10">
            <div className="flex flex-row items-center mb-6">
              <img
                src={logo}
                className="h-24 md:h-32 object-contain"
                alt="Essex Meals on Wheels logo"
              />
              <div className="ml-4">
                <p className="text-yellow-400 text-sm font-semibold uppercase tracking-widest mb-1">
                  Family-run since 1995
                </p>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Essex Meals
                  <br />
                  On Wheels
                </h1>
              </div>
            </div>
            <p className="text-blue-100 text-xl max-w-lg mb-3 leading-relaxed">
              Fresh, nutritious meals delivered with care — cooked daily and
              brought to your door by a friendly, trusted team.
            </p>
            <p className="text-blue-300 text-lg mb-8">
              Hot meal and dessert from{" "}
              <span className="text-white font-bold">£8.50</span> — seven days a
              week
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:01376423462"
                className="btn btn-warning text-blue-950 font-bold text-xl px-8 py-4 h-auto rounded-none"
              >
                Call: 01376 423 462
              </a>
              <a
                href={menuPdf}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline text-white border-white hover:bg-white hover:text-blue-950 font-bold text-xl px-8 py-4 h-auto rounded-none"
              >
                See Our Menu
              </a>
            </div>
          </div>
          <div className="hidden md:block shrink-0">
            <div className="relative" style={{ padding: "10px 0 0 10px" }}>
              <div
                className="absolute inset-0"
                style={{
                  border: "3px solid #eab308",
                  top: 0,
                  left: 0,
                  right: "10px",
                  bottom: "-10px",
                }}
              />
              <img
                src={foodDelivery}
                alt="Friendly delivery driver with a hot meal"
                className="relative h-96 w-auto object-contain object-bottom block"
              />
            </div>
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

        {/* Food photo showcase */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-blue-950 mb-1 border-b-2 border-gray-300 pb-3">
            A Taste of What We Serve
          </h2>
          <p className="text-gray-500 text-base mt-4 mb-6">
            Every meal is freshly cooked and delivered piping hot to your door.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-gray-300">
            {menuItems.map(({ img, title, desc }, i) => (
              <div
                key={title}
                className={`flex flex-col${
                  i < menuItems.length - 1
                    ? " sm:border-r border-b sm:border-b-0 border-gray-300"
                    : ""
                }`}
              >
                <div className="overflow-hidden" style={{ height: "220px" }}>
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="bg-white p-5 flex-1">
                  <p className="text-lg font-bold text-blue-950 mb-1">
                    {title}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-right">
            <a
              href={menuPdf}
              target="_blank"
              rel="noreferrer"
              className="text-base font-bold text-blue-950 hover:text-yellow-600 transition-colors underline underline-offset-4"
            >
              View full menu &rsaquo;
            </a>
          </div>
        </section>

        {/* Delivery Areas */}
        <section className="w-full max-w-4xl">
          <h2 className="text-2xl font-bold text-blue-950 mb-1 border-b-2 border-gray-300 pb-3">
            Delivery Areas
          </h2>
          <p className="text-gray-500 text-base mt-4 mb-6">
            We currently deliver across mid-Essex, seven days a week. If you
            don't see your town listed, please call us — we may still be able to
            help.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {deliveryAreas.map((area) => (
              <div
                key={area}
                className="border border-gray-300 bg-gray-50 px-4 py-3 text-base font-semibold text-blue-950 text-center"
              >
                {area}
              </div>
            ))}
          </div>
          <p className="mt-6 text-base text-gray-600">
            Not sure if we cover your area?{" "}
            <a
              href="tel:01376423462"
              className="font-bold text-blue-950 hover:text-yellow-600 underline underline-offset-4 transition-colors"
            >
              Give us a call on 01376 423 462
            </a>
          </p>
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
                href="tel:01376423462"
                className="text-yellow-400 hover:text-yellow-300 font-bold"
              >
                01376 423 462
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
