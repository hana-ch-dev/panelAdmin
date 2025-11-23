import { getOrders } from "@/services/apiGuests";
import { useQuery } from "@tanstack/react-query";

export default function Test() {
  // استفاده از useQuery برای گرفتن داده‌ها
  const { data: order, isLoading, isError, error, } = useQuery({
    queryKey: ["order"], // کلید یکتا برای کش
    queryFn: getOrders, // تابعی که داده می‌گیره
  });

  // حالت لودینگ
  if (isLoading) return <p>در حال بارگذاری...</p>;

  // حالت خطا
  if (isError) return <p>خطا: {error.message}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>کاربر</th>
          <th>ایمیل</th>
          <th>کتاب</th>
          <th>تعداد</th>
          <th>قیمت</th>
          <th>وضعیت</th>
          <th>تاریخ</th>
        </tr>
      </thead>
      <tbody>
        {order.map((o) => (
          <tr key={o.id}>
            <td>{o.guests?.name}</td>
            <td>{o.guests?.email}</td>
            <td>{o.readora?.name}</td>
            <td>{o.quantity}</td>
            <td>{o.readora?.price}</td>
            <td>{o.status}</td>
            <td>{new Date(o.created_at).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}