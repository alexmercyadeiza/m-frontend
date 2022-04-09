import { Head } from "next/head";

export default function PublicWrapper({ children }) {
  return (
    <div className="flex flex-col min-h-screen">{children}</div>
  );
}
