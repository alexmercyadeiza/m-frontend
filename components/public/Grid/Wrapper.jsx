export default function Wrapper({children}) {
    return (
      <div className="grid grid-cols-2 mx-auto max-w-screen-2xl w-full">
        {children}
      </div>
    );
}