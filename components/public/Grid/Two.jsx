export default function Two({children}) {
return (
  <div className="grid filter invert lg:invert-0 bg-white">
    <div className="lg:p-20 p-6">
      <div className="grid gap-8">{children}</div>
    </div>
  </div>
);
}