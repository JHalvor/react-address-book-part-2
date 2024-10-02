import { useContext, useEffect } from "react";
import { ContactContext } from "../App";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteContact() {
    const { id } = useParams();
    const { setContacts } = useContext(ContactContext);
    const navigate = useNavigate();

    useEffect(() => {
        setContacts(contacts => contacts.filter(contact => contact.id !== parseInt(id)));

        navigate("/contacts");
    }, [id, setContacts, navigate]);

    return <p>Deleting contact...</p>;
}