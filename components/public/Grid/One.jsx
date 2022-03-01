export default function One({children}) {
  return (
    <div className="grid lg:border-r w-full min-h-screen">
      <div className="lg:p-20 p-6">
        <div className="space-y-6">{children}</div>
      </div>
    </div>
  );
}
