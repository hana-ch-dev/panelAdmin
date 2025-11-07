import { insertBook } from "@/services/apiBook";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateBook(){
  const queryClient = useQueryClient()
   const {isPending :isLoading , mutate : createBook} = useMutation({
    mutationFn : (newBook)=> insertBook(newBook),
    onSuccess : ()=> {
      queryClient.invalidateQueries({queryKey : ["readora"]}) //به روز رسانی لیست بعد از ثبت 
    },
    onError:(error)=>{
      console.error(error);
    }
   })
   
   return{isLoading , createBook }

}