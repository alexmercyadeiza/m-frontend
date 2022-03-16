import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="relative grid grid-cols-5 w-full bg-gray-100">
      <Sidebar />
      {children}
    </div>
  );
}
