"use client";
import { useState } from "react";
import QuotePagination from "./QuotePagination";
import QuoteRevealEffect from "./QuoteRevealEffect";
import { fetchQuotes } from "@/lib/quote-fetcher";

const QuotesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;
  const totalQuotes = 501; // Total number of quotes

  // Calculate the start index based on the current page and page size
  const startIndex = (currentPage - 1) * pageSize;

  // Fetch quotes for the current page
  const quotes = fetchQuotes(currentPage, pageSize);

  // Handle pagination change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="py-10" id="quotes">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 px-2 py-10">
        {quotes.map((quote, i) => (
          <QuoteRevealEffect
            quote={quote}
            key={quote.id}
            quoteNo={(currentPage - 1) * pageSize + i + 1}
          ></QuoteRevealEffect>
        ))}
      </div>
      <div className="border-t pt-10">
        <QuotePagination
          currentPage={currentPage}
          pageSize={pageSize}
          totalItems={totalQuotes}
          onPageChange={pageNumber => handlePageChange(pageNumber)}
        />
      </div>
    </div>
  );
};
export default QuotesList;
