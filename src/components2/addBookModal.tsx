import { useCreateBook } from "@/components/books/hooks/useCreateBook";
import { useForm } from "react-hook-form";

export default function AddBookModal({ onClose }) {
  const { isLoading, createBook } = useCreateBook();
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    createBook(data);
    onClose();
  }

  return (
    <div className="fixed inset-0  bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[600px] shadow-lg">
        <h2 className="text-lg font-bold mb-4 text-gray-700 text-center">
          اضافه کردن کتاب جدید
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-gray-600 mb-1">نام</label>
              <input
                className="border rounded-md w-full p-2 text-sm"
                type="text"
                {...register("name")}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">
                نام نویسنده
              </label>
              <input
                className="border rounded-md w-full p-2 text-sm"
                type="text"
                {...register("author_name")}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">قیمت</label>
              <input
                className="border rounded-md w-full p-2 text-sm"
                type="number"
                {...register("price")}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">تخفیف</label>
              <input
                className="border rounded-md w-full p-2 text-sm"
                type="number"
                {...register("discount")}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">تعداد</label>
              <input
                className="border rounded-md w-full p-2 text-sm"
                type="number"
                {...register("number")}
              />
            </div>

            <div>
              <label className="block text-xs text-gray-600 mb-1">
                دسته‌بندی
              </label>
              <input
                className="border rounded-md w-full p-2 text-sm"
                type="text"
                {...register("category")}
              />
            </div>

            <div className="col-span-2 flex justify-center ">
              <div className="w-1/2">
                <label className="block text-xs text-gray-600 mb-1">
                  مترجم
                </label>
                <input
                  className="border rounded-md w-full p-2 text-sm"
                  type="text"
                  {...register("Translator")}
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block text-xs text-gray-600 mb-1">خلاصه</label>
              <textarea
                className="border rounded-md w-full p-2 text-sm h-20 resize-none"
                {...register("Description")}
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md text-xs hover:bg-gray-100"
            >
              بستن
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-4 py-2 bg-gradient-to-r from-teal-400 to-sky-400 text-white text-xs rounded-md shadow-sm hover:shadow-md disabled:opacity-50"
            >
              ذخیره 
              {isLoading ? "در حال ذخیره..." : "ذخیره"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
