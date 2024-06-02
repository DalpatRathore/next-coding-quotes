import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type QuotePaginationProps = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
};

const QuotePagination = ({
  currentPage,
  pageSize,
  totalItems,
  onPageChange,
}: QuotePaginationProps) => {
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalItems / pageSize);

  console.log(typeof currentPage);

  // Determine the range of page numbers to display
  let startPage = currentPage - 2;
  let endPage = currentPage + 2;

  if (startPage < 1) {
    endPage += 1 - startPage;
    startPage = 1;
  }

  if (endPage > totalPages) {
    startPage -= endPage - totalPages;
    endPage = totalPages;
  }

  if (startPage < 1) {
    startPage = 1;
  }

  // Generate an array of page numbers to display
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, index) => startPage + index
  );

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => onPageChange(currentPage - 1)}
            // disabled={currentPage === (1 as any)}
          />
        </PaginationItem>
        {startPage > 1 && (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => onPageChange(1)}>
              1
            </PaginationLink>
          </PaginationItem>
        )}
        {startPage > 2 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {pages.map(page => (
          <PaginationItem key={page}>
            <PaginationLink
              href="#"
              isActive={page === currentPage}
              onClick={() => onPageChange(page)}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}
        {endPage < totalPages - 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {endPage < totalPages && (
          <PaginationItem>
            <PaginationLink href="#" onClick={() => onPageChange(totalPages)}>
              {totalPages}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => onPageChange(currentPage + 1)}
            // disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default QuotePagination;