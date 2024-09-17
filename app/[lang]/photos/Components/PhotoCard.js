import Image from "next/image";
import Link from "next/link";

export default function PhotoCard({ photo }) {
    // const { url, title } = photo;

    return (
        <Link href={`/photos/${photo.id}`} className="group">
            <Image src={photo.url} alt={photo.title} width={7000} height={700} />
            <div className="title-container">
                <h4 className="title">{photo.title}</h4>
            </div>
        </Link>
    );
}