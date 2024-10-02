import { Link } from "react-router-dom"

export default function ContactListItem({ contact }) {
    return (
        <li className="contact-item">
            <p>{contact.firstName}</p>
            <Link to={`/viewContact/${contact.id}`} className="view-link">View</Link>
            <Link to={`/editContact/${contact.id}`} className="edit-link">Edit</Link>
            <Link to={`/deleteContact/${contact.id}`} className="delete-link">Delete</Link>
        </li>
    )
}