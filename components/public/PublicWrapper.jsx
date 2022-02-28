import { Head } from "next/head";

export default function PublicWrapper({ children }) {
  return (
    <>
      <div className="w-full mx-auto flex flex-col min-h-screen">{children}</div>
    </>
  );
}
