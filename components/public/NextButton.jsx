
import { useRouter } from 'next/router';

export default function NextButton({path, title, status}) {
    const router = useRouter();

    return (
      <button
        disabled={status}
        className="btn"
        onClick={() => {
          router.push(path);
        }}
      >
       
       {title}
      </button>
    );
}