
import { useRouter } from 'next/router';

export default function NextButton({path, title}) {
    const router = useRouter();

    return (
      <button
        className="btn"
        onClick={() => {
          router.push(path);
        }}
      >
       
       {title}
      </button>
    );
}