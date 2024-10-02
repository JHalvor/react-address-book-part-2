import { useState, useEffect, useContext } from 'react'
import { ContactContext } from '../App'

export default function ContactForm() {
    const initialState = {
        id: 0,
        firstName: "",
        lastName: "",
        street: "",
        city: ""
    }

    const [formData, setFormData] = useState(initialState)
    const { contacts, setContacts } = useContext(ContactContext)

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        formData.id = contacts.reduce((max, contact) => contact.id > max ? contact.id : max, 0)
        setContacts(() => [ ...contacts, formData ])
        setFormData(initialState)
    }
    
    return (
        <ul>
            <h1>Create Contact</h1>
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
                <button type="submit">Create</button>
            </form>
        </ul>
    )
}