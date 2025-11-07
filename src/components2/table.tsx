import { useBooks } from "@/hooks/useGetData";
import { useEffect, useState } from "react";
import AddBookModal from "./addBookModal";
import useDeleteBook from "@/components/books/hooks/useDeleteBook";
import EditBook from "./editModal";

export default function Table() {
  const { data: books } = useBooks();
  const {isDeleting , deleteMutation} = useDeleteBook()
  const [openMenu, setOpenMenu] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);


  useEffect(() => {
    const handleClickOutside = () => setOpenMenu(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleEdit = (bookk) => {
    setSelectedBook(bookk); 
    setEditModalOpen(true); 
  };

  const handleDelete = (id)=>{
    deleteMutation(id)
  }

  return (
    <>
      <div className="bg-gray-300 w-full  border border-gray-100 shadow-sm ">
        <table className="w-full border-collapse bg-white ">
          <thead>
            <tr className="bg-gray-100 text-gray-600 text-xs border-b border-gray-100">
              <th className="py-3 px-4 text-right text-sm ">نام کتاب</th>
              <th className="py-3 px-4 text-right font-sm text-xs">نویسنده</th>
              <th className="py-3 px-4 text-right font-sm text-xs">قیمت</th>
              <th className="py-3 px-4 text-right font-sm text-xs">تخفیف</th>
              <th className="py-3 px-4 text-right font-sm text-xs">مترجم</th>
              <th className="py-3 px-4 text-right font-sm text-xs">
                دسته بندی
              </th>
              <th className="py-3 px-4 text-right font-sm text-xs">تعداد </th>
              <th className="py-3 px-4 text-right font-sm text-xs"> </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {books?.map((book, i) => (
              <tr
                key={book.id || i}
                className="hover:bg-pink-100 transition-colors duration-200 relative"
              >
                <td className="py-3 px-4 font-medium text-gray-800 text-xs">
                  {book.name}
                </td>
                <td className="py-3 px-4 text-gray-600 text-xs">
                  {book.author_name}
                </td>
                <td className="py-3 px-4 text-gray-700 text-xs">
                  {book?.price?.toLocaleString()}ریال
                </td>
                <td className="py-3 px-4 text-xs">
                  {book.discount ? (
                    <span className="text-[15px] font-medium bg-lime-50 text-green-700 px-2 py-0.5 rounded-full">
                      {book.discount.toLocaleString()}%
                    </span>
                  ) : (
                    <span className="text-[11px] font-medium bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full">
                      غیرفعال
                    </span>
                  )}
                </td>
                <td className="py-3 px-4 text-gray-600 text-xs">
                  {book.Translator}
                </td>
                <td className="py-3 px-4 text-gray-700 text-xs">
                  {book.category}
                </td>
                <td className="py-3 px-4 text-gray-700 text-xs">
                  {book.number}
                </td>
                <td className="py-3 px-4 text-left relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === i ? null : i);
                    }}
                    className="p-1.5 text-gray-500 rounded-md hover:bg-gray-100 transition-colors text-lg leading-none"
                  >
                    ⋮
                  </button>

                  {openMenu === i && (
                    <div className="absolute font-medium right-8 top-3 mt-1 w-32 bg-white border border-gray-100 rounded-md shadow-md z-20">
                      <button
                         onClick={() => {handleEdit(book)} } 
                        className="w-full text-right px-3 py-2 text-sm hover:bg-gray-50 text-gray-700"
                      >
                        ویرایش


                      </button>
                      <button onClick={()=>handleDelete(book.id)} className="w-full text-right px-3 py-2 text-sm hover:bg-pink-50 text-pink-500">
                        حذف
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowModal(true)}
            className="bg-gradient-to-r from-teal-300 to-sky-300 text-white text-xs px-4 py-2 rounded-sm shadow-sm hover:shadow-md transition-all duration-300"
          >
            اضافه کردن کتاب
          </button>
        </div>

        {showModal && <AddBookModal onClose={() => setShowModal(false)} />}
        {/*{showModal ? (
            <AddBookModal onClose={() => setShowModal(false)} />
                ) : null}
               </div>
                   );
                 }
       */}
      </div>

      {
        editModalOpen ? (
        <EditBook   book={selectedBook}
        onClose={()=>setEditModalOpen(false)}  />
         )
         : 
         null
      }

    </>
  );
}
