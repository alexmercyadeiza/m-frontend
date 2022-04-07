
import { useRouter } from 'next/router';

export default function ReturnLinks({path, title}) {
const router = useRouter();
    return (
      <div
        onClick={() => {
          router.push(path);
        }}
        className="cursor-pointer hover:text-gray-700 text-xs font-semibold"
      >
        <span className="capitalize text-sm font-medium tracking-tight">{title}</span>
      </div>
    );
}