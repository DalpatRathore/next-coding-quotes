import { quotes } from "@/data/quotes";
import QuoteRevealEffect from "./QuoteRevealEffect";

const QuotesList = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        {quotes.map(quote => (
          <QuoteRevealEffect quote={quote} key={quote.id}></QuoteRevealEffect>
        ))}
      </div>
    </>
  );
};
export default QuotesList;
