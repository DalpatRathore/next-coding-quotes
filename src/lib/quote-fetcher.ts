import { quotes } from "@/data/quotes";

export const fetchQuotes = (pageNumber: number, pageSize: number) => {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedQuotes = quotes.slice(startIndex, endIndex);
  return paginatedQuotes;
};
