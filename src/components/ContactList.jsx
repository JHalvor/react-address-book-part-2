import { useContext } from "react"
import { ContactContext } from '../App'
import ContactListItem from "./ContactListItem"

export default function ContactList() {
    const { contacts } = useContext(ContactContext)

    return (
        <ul className="contact-list">
            <h1>Contacts</h1>
            {contacts.map((contact) => (
                <ContactListItem contact={contact} key={contact.id} />
            ))}
        </ul>
    )
}