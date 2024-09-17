import PhotoList from "./photos/Components/PhotoList";

export default async function Home() {
    // const dict = await getDictionaries(lang);
    const response = await fetch(`${process.env.BASE_API_URL}/photos`);
    const photos = await response.json();

    return (
        <PhotoList photos={photos} />
    )
}