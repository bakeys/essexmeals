import foodHygieneRating from "@/assets/foodhygienerating.svg";

const AREAS = [
  "Chelmsford",
  "Colchester",
  "Southend-on-Sea",
  "Braintree",
  "Basildon",
  "Brentwood",
  "Harlow",
  "Maldon",
];
const LINKS = [
  "About Us",
  "This Week's Menu",
  "Pricing & Packages",
  "Refer a Neighbour",
  "Volunteer with Us",
  "Contact",
];

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-primary-content/10 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* ── Main grid ── */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="font-serif text-xl font-bold text-primary-content mb-2">
                Essex Meals on Wheels
              </h3>
              <p className="font-sans text-sm text-primary-content/45 leading-relaxed max-w-xs">
                Nourishing meals delivered to elderly residents across Essex
                since 1974. CQC regulated · Essex County Council approved.
              </p>
            </div>
            <div className="space-y-1.5">
              {[
                { icon: "📞", text: "01245 000 000" },
                { icon: "✉️", text: "hello@essexmealsonwheels.co.uk" },
                { icon: "📍", text: "12 Market Road, Chelmsford, CM1 1GF" },
              ].map((c) => (
                <div key={c.text} className="flex items-center gap-2">
                  <span className="text-xs">{c.icon}</span>
                  <span className="font-sans text-xs text-primary-content/50">
                    {c.text}
                  </span>
                </div>
              ))}
            </div>
            <img
              src={foodHygieneRating}
              alt="Food Hygiene Rating 5 — Food Standards Agency"
              className="w-44"
            />
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-primary-content/35 mb-4">
              Areas We Cover
            </p>
            <ul className="space-y-1.5">
              {AREAS.map((a) => (
                <li key={a}>
                  <a
                    href="#contact"
                    className="font-sans text-sm text-primary-content/45 hover:text-secondary transition-colors"
                  >
                    {a}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-primary-content/35 mb-4">
              Useful Links
            </p>
            <ul className="space-y-1.5">
              {LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-sans text-sm text-primary-content/45 hover:text-secondary transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-primary-content/10 pt-5 flex flex-wrap justify-between items-center gap-2">
          <p className="font-sans text-xs text-primary-content/25">
            © 2025 Essex Meals on Wheels · Registered in England &amp; Wales
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="font-sans text-xs text-primary-content/25 hover:text-primary-content/50 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="font-sans text-xs text-primary-content/25 hover:text-primary-content/50 transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
