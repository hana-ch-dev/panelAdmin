import supabase from "./supabase";

export async function getGuests() {
    const {data , error} = await supabase.from("guests").select("*");
     if(error){
        console.log(error);
        throw new Error("you havent dataGuests");
     }
     return data
} 


export async function getOrders() {
      const{ data , error } = await supabase
      .from("order")
      .select("guests (name , id) , order_item(*) , * ")
      if(error){
         console.log(error);
         throw new Error("you havent order");
      }
      return data
   }
   

 
