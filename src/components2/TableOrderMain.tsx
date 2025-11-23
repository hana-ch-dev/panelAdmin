import { useGetOrders } from "@/components/books/hooks/useGetOrders";
import { useState } from "react";
import StatusDetailModal from "./statusModal";

export default function TableOrderMain() {
  const { data: ordersOfGuests, error, isLoading } = useGetOrders();
  const [ showModal , setShowModal ] = useState(false)
  const [selectedOrder, setSelectedOrder] = useState(null);

  if (isLoading) return <p>در حال بارگذاری اطلاعات </p>;
  if (error) return <p>عدم دریافت داده</p>;
  
  const modal = (order) =>{
    setShowModal(true)
    setSelectedOrder(order)
  }
  return (
    <>
      <div className="bg-gray-100 w-full min-h-screen overflow-x-hidden ">
      <div className="shadow-lg mt-6 w-[80%] mx-auto bg-white overflow-hidden border border-gray-200">
          <table className="min-w-full  border-collapse ">
            <thead className="bg-pink-300 text-gray-700">
              <tr className="text-right ">
                <th className="p-4  text-sm">شناسه کاربر</th>
                <th className="p-4 text-sm">نام مشتری</th>
                <th className="p-4 text-sm">تاریخ خرید</th>
                <th className="p-4 text-sm">وضعییت</th>
                <th className="p-4 text-sm">مبلغ کل</th>
                <th className="p-2 text-sm mr-2"> جزییات</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {ordersOfGuests.map((item, key) => (
                <tr index={key.id} className="hover:bg-pink-100 transition-colors duration-200 relative">
                  <td className="p-4 font-medium text-gray-700 text-sm">{item.guests?.id}</td>
                  <td className="p-4 font-medium text-gray-700 text-sm">{item.guests?.name}</td>
                  <td className="p-4 font-medium text-gray-700 text-sm">{new Date(item.created_at).toLocaleDateString()}</td>
                  <td> 
                  <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.status === "در حال بررسی"
                          ? "bg-yellow-100 text-yellow-800"
                          : item.status === "ارسال شده"
                          ? "bg-blue-100 text-blue-800"
                          : item.status === "تحویل داده شده"
                          ? "bg-green-100 text-green-800"
                          : item.status === "لغو شده "
                          ?"bg-red-100 text-red-800" 
                          : "bg-red-300 text-red-800" 
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="p-4 font-medium text-gray-700 text-sm">{}</td>

                  <td className="p-2 font-medium text-gray-700 text-sm">
                    <button className="text-sm px-4 py-2 rounded-sm shadow-sm hover:shadow-md transition-all duration-300" onClick={()=>{modal(item)}}>
                      مشاهده جزئیات
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      { 
       showModal ?
       ( <StatusDetailModal  selectedOrder={selectedOrder} onClose={()=>{setShowModal(false)}}/>)  
        :
        null
      }
    </>
  );
}
