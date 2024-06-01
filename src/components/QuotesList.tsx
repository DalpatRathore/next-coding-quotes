import QuoteRevealEffect from "./QuoteRevealEffect";
import { fetchQuotes } from "@/lib/quote-fetcher";

const QuotesList = () => {
  const quotes = fetchQuotes(1, 8);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-2 py-10">
        {quotes.map(quote => (
          <QuoteRevealEffect quote={quote} key={quote.id}></QuoteRevealEffect>
        ))}
      </div>
    </>
  );
};
export default QuotesList;
