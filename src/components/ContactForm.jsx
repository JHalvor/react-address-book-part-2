import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from '../App'

export default function ContactForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { contacts, setContacts } = useContext(ContactContext)

    const initialState = {
        id: 0,
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    const [formData, setFormData] = useState(initialState)

    useEffect(() => {
        // If id is present, find the contact by id and populate the form for editing
        if (id) {
            const contactToEdit = contacts.find(contact => contact.id === parseInt(id));
            if (contactToEdit) {
                setFormData(contactToEdit);
            }
        }
    }, [id, contacts]);

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        if (id) {
            // Update existing contact
            setContacts(contacts => contacts.map(contact => contact.id === parseInt(id) ? formData : contact));
            navigate(`/viewContact/${id}`);
        } else {
            // Create new contact
            formData.id = contacts.reduce((max, contact) => contact.id > max ? contact.id : max, 0)
            setContacts(() => [ ...contacts, formData ])
            setFormData(initialState)
        }
    }
    
    return (
        <ul>
            <h1>{id ? "Edit Contact" : "Create Contact"}</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            onChange={handleChange}
                            value={formData.firstName}/>
                    </li>
                    <li>
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            onChange={handleChange}
                            value={formData.lastName}/>
                    </li>   
                    <li>
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            id="street"
                            name="street"
                            onChange={handleChange}
                            value={formData.street}/>
                    </li>
                    <li>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            onChange={handleChange}
                            value={formData.city}/>
                    </li>
                </ul>
                <button type="submit">{id ? "Update" : "Create"}</button>
            </form>
        </ul>
    )
}