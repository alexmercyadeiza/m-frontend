export default function One({children}) {
  return (
    <div className="grid border-r w-full min-h-screen">
      <div className="p-20">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}
