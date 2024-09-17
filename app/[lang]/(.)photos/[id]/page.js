import Modal from "@/Components/Modal";
import PhotoDetails from "../../Components/PhotoDetails";

export default function page({ params: { id, lang } }) {
    return (
        <Modal>
            <PhotoDetails id={id} lang={lang} />
        </Modal>
    );
}