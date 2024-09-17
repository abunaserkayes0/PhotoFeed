import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
   <>
      <Link href="/">
        <Image className="max-w-[100px] md:max-w-[165px]" width={100} height={100} src="/lws_logo.png" alt="Lws" />
      </Link>
   </>
  );
}