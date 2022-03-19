import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div className="relative grid lg:grid-cols-5 w-full bg-gray-50">
      <Sidebar />
      {children}
    </div>
  );
}
