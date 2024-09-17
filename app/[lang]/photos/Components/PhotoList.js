import Image from "next/image";
import { getDictionaries } from "../dictionaries";
import Link from "next/link";
import PhotoCard from "./PhotoCard";

export default function PhotoList({ photos }) {

    return (
        <div className="img-grid">
            {
                photos.map((photo) => <PhotoCard key={photo.id} photo={photo} />)
            }
        </div>
    )
}