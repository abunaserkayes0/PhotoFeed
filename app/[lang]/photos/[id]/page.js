
import PhotoDetails from "../Components/PhotoDetails";

export default async function page({ params: { lang, id } }) {

  return (
    <PhotoDetails id={id} lang={lang} />
  );
}