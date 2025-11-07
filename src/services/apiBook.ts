import supabase from "./supabase";

export async function getBook() {
  const { data, error } = await supabase.from("readora").select("*");
  if (error) {
    console.error(error);
    throw new Error("you havent data");
  }
  return data;
}

export async function insertBook(newBook: any) {
  const { data, error } = await supabase
    .from("readora")
    .insert([{ ...newBook }]);
  
  if (error) {
    console.error(error);
    throw new Error("data is not insert");
  }
  return data;
}

export async function deleteBook(id : any){
  const { data , error } = await supabase 
  .from("readora")
  .delete()
  .eq('id' , id)
  if(error){
    console.log(error);
    throw new Error("data is not insert");
  }
  return data;
}


export async function updateData( id: number | string, updatedNewBook: any ){
  const { data , error } = await supabase 
  .from("readora")
  .update(updatedNewBook)  
  .eq('id' , id)
  .select()
  .single()
  console.log("داده" , updatedNewBook);
  
  if(error){
    console.error("Supabase returned error:", error);  
    throw new Error("data is not update");
  }
  return data;
} 