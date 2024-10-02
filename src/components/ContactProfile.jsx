import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import { ContactContext } from '../App'

export default function ContactProfile() {
  const { id } = useParams()
  const { contacts } = useContext(ContactContext)
  const [contact, setContact] = useState(null)

  useEffect(() => {
    contacts.forEach((c) => {
        if (c.id == id) {
          setContact(c);
        }})
  }, [])

  if (!contact) return <p>Loading...</p>;

  return (
    <ul>
        <h1> {contact.firstName} {contact.lastName} </h1>
        <> {contact.street}, {contact.city} </>
    </ul>
  )
}