import { Link } from "react-router-dom"

export default function ContactListItem({ contact }) {
    return (
        <li className="contact-item">
            <p>{contact.firstName}</p>
            <Link to={`/contacts/${contact.id}`} className="view-link">View</Link>
        </li>
    )
}