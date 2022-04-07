export default function TextArea({
  rows,
  name,
  handleChange,
  placeholder,
  value,
  span,
}) {
  return (
    <textarea
      className={`col-span-2 block w-full rounded-md border-gray-200 border text-sm focus:border-gray-300 focus:bg-white focus:ring-0 ${
        span ? span : "lg:col-span-1"
      }`}
      rows={rows ? rows : 3}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
    ></textarea>
  );
}
