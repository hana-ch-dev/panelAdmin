import { deleteBook } from "@/services/apiBook";
import { useMutation, useQueryClient } from "@tanstack/react-query";

  export default function useDeleteBook(){
  const queryClient = useQueryClient()
   const{ isPending : isDeleting , mutate : deleteMutation} = useMutation({
       mutationFn : (id)=> deleteBook(id),
        onSuccess : ()=> {
          queryClient.invalidateQueries({queryKey : ["readora"]}) //به روز رسانی لیست بعد از ثبت 
        },
        onError:(error)=>{
          console.error(error);
        }
   })
   return{isDeleting , deleteMutation }

  }