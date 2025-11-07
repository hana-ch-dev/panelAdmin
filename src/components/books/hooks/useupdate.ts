import { updateData } from "@/services/apiBook";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export default function useUpdateBook() {
  const queryClient = useQueryClient();

  const { isPending: isChanging, mutate: updateBook } = useMutation({
    mutationFn: ({ id, updatedNewBook }: { id: number, updatedNewBook: any }) =>
      updateData(id, updatedNewBook),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["readora"] });
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { isChanging, updateBook };
}