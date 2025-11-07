export default function InputSearch() {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800"> لیست کتاب‌ها</h2>
        <div className="flex items-center gap-3">
          <input
            type="text"
            placeholder="جستجو..."
            className="px-3 py-1.5 border border-gray-200 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-teal-200"
          />
          <select className="border border-gray-200 rounded-sm px-2 py-1.5 font-sm text-xs focus:ring-1 focus:ring-fuchsia-300">
            <option className="font-sm text-xs">همه</option>
            <option className="font-sm text-xs">با تخفیف</option>
            <option className="font-sm text-xs">بدون تخفیف</option>
          </select>
        </div>
      </div>
    </>
  );
}
