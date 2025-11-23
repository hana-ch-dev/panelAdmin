import { getGuests } from "@/services/apiGuests";
import { useQuery } from "@tanstack/react-query";

export function useGetGuests(){
    return useQuery({
        queryKey :["guests"],
        queryFn: getGuests ,
    });
}