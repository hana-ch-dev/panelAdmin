import supabase from "@/services/supabase";
import React, { useEffect, useState } from "react";

const TableForm = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(null); 

  useEffect(() => {
    const fetchBooks = async () => {
      const { data, error } = await supabase.from("readora").select("*");
      if (error) console.error("خطا در دریافت داده‌ها:", error.message);
      else setBooks(data);
      setLoading(false);
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const handleClickOutside = () => setOpenMenu(null);
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleEdit = (book) => console.log("ویرایش:", book);
  const handleDelete = (book) => console.log("حذف:", book);

  return (
   <div>
      {/* table */}
      <div className="bg-gray-300 w-full  border border-gray-100  shadow-sm ">
        {loading ? (
          <p className="text-center py-10 text-gray-500 animate-pulse">
            در حال بارگذاری...
          </p>
        ) : (
          <table className="w-full border-collapse bg-white ">
            <thead>
              <tr className="bg-gray-100 text-gray-600 text-xs border-b border-gray-100">
                <th className="py-3 px-4 text-right text-sm ">نام کتاب</th>
                <th className="py-3 px-4 text-right font-sm text-xs">نویسنده</th>
                <th className="py-3 px-4 text-right font-sm text-xs">قیمت</th>
                <th className="py-3 px-4 text-right font-sm text-xs">تخفیف</th>
                <th className="py-3 px-4 text-right font-sm text-xs">مترجم</th>
                <th className="py-3 px-4 text-right font-sm text-xs"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {books.map((book, i) => (
                <tr key={book.id || i} className="hover:bg-pink-100 transition-colors duration-200 relative">
                  <td className="py-3 px-4 font-medium text-gray-800 text-xs">{book.name}</td>
                  <td className="py-3 px-4 text-gray-600 text-xs">{book.author_name}</td>
                  <td className="py-3 px-4 text-gray-700 text-xs">{book.price.toLocaleString()}ریال</td>
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
                  <td className="py-3 px-4 text-gray-600 text-xs">{book.Translator}</td>

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
                          onClick={() => handleEdit(book)}
                          className="w-full text-right px-3 py-2 text-sm hover:bg-gray-50 text-gray-700"
                        >
                          ویرایش
                        </button>
                        <button
                          onClick={() => handleDelete(book)}
                          className="w-full text-right px-3 py-2 text-sm hover:bg-rose-50 text-rose-500"
                        >
                          حذف
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <button className="bg-gradient-to-r from-teal-300 to-sky-300 text-white  text-xs px-4 py-2 rounded-sm shadow-sm hover:shadow-md transition-all duration-300">
            اضافه کردن کتاب
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableForm;
