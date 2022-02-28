export default function Two({children}) {
return (
  <div className="grid">
    <div className="p-20">
      <div className="grid gap-8">{children}</div>
    </div>
  </div>
);
}