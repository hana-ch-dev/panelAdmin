
export default function StatusDetailModal({ onClose, selectedOrder }) {
  console.log(selectedOrder);


  return (
    <>
      <div className="fixed inset-0 backdrop-blur-sm bg-blue/50 flex items-center justify-center z-50">
        <div className="bg-white/90  backdrop-blur-xl pb-8 rounded-md shadow-2xl w-[90%] max-w-3xl relative border border-gray-200">
          <div className="flex items-center justify-between bg-gradient-to-r from-teal-300 to-sky-300 w-full p-2 ">
            <button
              onClick={onClose}
              className=" text-white hover:text-gray-700 mr-2 "
            >
              ✖
            </button>

            <h2 className="text-xl text-white ml-2">
              جزئیات سفارش #{selectedOrder.id}
            </h2>
          </div>

          <div className="flex items-center justify-center  w-full p-2 mt-1 ">
            <h3 className="font-semibold  text-slate-700 flex items-center  ">
              اطلاعات خریدار
            </h3>
          </div>

          <div className="mt-3 flex justify-between items-center p-3 border-[3px] border-gray-200 m-2">
            <div className="flex flex-col gap-2 mr-2 ">
              <p className="text-gray-500 font-small">
                <span className="font-semibold text-black"> نام : </span>{" "}
                {selectedOrder?.guests.name}
              </p>
              <p className="text-gray-500 font-small ">
                <span className="font-semibold text-black"> شماره تماس : </span>{" "}
                {selectedOrder?.guests?.phone}
              </p>
              <p className="text-gray-700 font-small">
                <span className="font-semibold text-black"> آدرس : </span>{" "}
                {selectedOrder?.guests?.address}
              </p>
            </div>

            <div className="flex flex-col gap-3 ml-2 ">
              <p className="text-gray-700 font-small text-md">
                <span className="font-semibold text-black"> ایمیل : </span>{" "}
                {selectedOrder?.guests?.email}
              </p>
              <p className="text-gray-700 font-small">
                <span className="font-semibold text-black">
                  وضعیت پرداخت :{" "}
                </span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center m-2  w-full p-2  ">
            <h3 className="font-semibold text-slate-700 flex items-center  ">
              کتاب‌های سفارش
            </h3>
          </div>

          <div className="p-4 m-5 border-[3px] border-sky-50 bg-sky-50">
            <div className="p-4 m-5 border-[3px] border-sky-50 bg-sky-50 rounded-lg">
              {selectedOrder.order_item.map((item, index) => (
                <div key={index} className="flex justify-between py-2 border-b">
                  <span>{item?.readora?.name}</span>
                  <span>{item?.quantity} عدد</span>
                  <span>{item?.readora?.price} تومان</span>
                  <span>{item?.readora_id} </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
