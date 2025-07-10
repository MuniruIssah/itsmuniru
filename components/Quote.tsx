import { QuoteIcon } from "lucide-react"; // You can use any icon set you prefer

const Quote = async () => {
  const quoteResponse = await fetch("https://zenquotes.io/api/random", {
    cache: "no-store",
  });
  const quote: { q: string; a: string; h: string }[] =
    await quoteResponse.json();

  const currentQuote = quote[0];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 rounded-xl shadow-2xl border border-neutral-800 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white relative">
      <QuoteIcon className="absolute -top-5 left-4 w-10 h-10 text-white/30" />
      <p className="text-lg font-semibold leading-relaxed mb-4">
        {currentQuote.q}
      </p>
      <span className="block text-right text-sm opacity-90">
        — {currentQuote.a}
      </span>
    </div>
  );
};

export default Quote;
