export default function Wrapper({children}) {
    return (
      <div className="grid lg:grid-cols-2 mx-auto max-w-screen-2xl w-full h-screen md:h-0">
        {children}
      </div>
    );
}