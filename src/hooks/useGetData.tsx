import { getBook } from "@/services/apiBook";
import { useQuery } from "@tanstack/react-query";

export function useBooks() {
  return useQuery({
    queryKey: ["readora"],
    queryFn: getBook,
  });
}
