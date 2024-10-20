"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "./ui/button";
import { MessageSquareQuote, Minus, Quote, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const QuoteDrawer = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    quote: "Life is a sum of all our choices.",
    author: "Albert Camus",
  });

  const fetchQuotes = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("api/stoic-quote");
      if (response.ok) {
        const result = await response.json();
        setData(result.data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const handleClick = () => {
    fetchQuotes();
  };

  return (
    <Drawer>
      <DrawerTrigger
        onClick={handleClick}
        className="flex items-center justify-center text-white bg-blue-700 rounded-full w-10 h-10 md:w-14 md:h-14 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
      >
        <MessageSquareQuote className="w-4 h-4 md:w-6 md:h-6"></MessageSquareQuote>
      </DrawerTrigger>
      <DrawerContent className="mx-2">
        <div className="mx-auto w-full max-w-2xl my-10">
          <DrawerHeader className="space-y-5">
            <Quote className="text-orange-500"></Quote>
            <DrawerTitle className="border-l-4 pl-2 ml-2 leading-8 tracking-widest text-sm md:text-lg text-left border-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500  via-sky-500  to-emerald-500">
              {isLoading ? (
                <Skeleton className="h-[125px] w-full rounded" />
              ) : (
                data.quote
              )}
            </DrawerTitle>
            {/* <DrawerTitle className="border-l-4 pl-2 ml-2 leading-8 tracking-widest text-sm md:text-lg text-left border-orange-500 bg-clip-text text-transparent bg-gradient-to-r from-pink-500  via-sky-500  to-emerald-500">
              {isLoading ? (
                <Skeleton className="h-[125px] w-full rounded" />
              ) : (
                data.quote
              )}
            </DrawerTitle> */}
            <DrawerDescription className="flex items-center justify-end">
              <Minus className="mr-2 text-orange-500"></Minus>
              <span className="italic text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {isLoading ? <Skeleton className="h-8 w-40" /> : data.author}
              </span>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="absolute top-0 right-0">
            <DrawerClose>
              <X></X>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
export default QuoteDrawer;
