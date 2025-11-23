
import { getOrders } from "@/services/apiGuests";
import { useQuery } from "@tanstack/react-query";

export  function useGetOrders(){
  return useQuery({
    queryKey : ['order'] ,
    queryFn : getOrders,
  })
}