import { useForm } from "react-hook-form"
import { useCreateBook } from "./hooks/useCreateBook";


export default function AddBooks(){
    const {isLoading , createBook} = useCreateBook()
    const{register , handleSubmit} = useForm() ;
    function onSubmit(data){
        createBook(data)
    }
   
    return(
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="">نام </label>
                <input  type="text" {...register("name")} />
                <label htmlFor="">نام نویسنده</label>
                <input  type="text" {...register("author_name")} />
                <label htmlFor="">قیمت</label>
                <input  type="number" {...register("price")} />
                <label htmlFor="">خلاصه </label>
                <input  type="text" {...register("Description")} />
                <label htmlFor="">تعداد</label>
                <input  type="number" {...register("number")} />
                <label htmlFor="">دسته بندی</label>
                <input  type="text" {...register("category")} />
                <label htmlFor="">مترجم</label>
                <input  type="text" {...register("Translator")} />
                <label htmlFor="">تخفیف</label>
                <input  type="number" {...register("discount")} />
                <button type="submit">send</button>
            </form>
    )
}