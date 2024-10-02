import { useEffect, useState, createContext  } from 'react'
import { Routes, Route, Link } from "react-router-dom"
export const ContactContext = createContext()
import './App.css'
import ContactList from "./components/ContactList"
import ContactProfile from "./components/ContactProfile"
import ContactForm from "./components/CreateContact"

export default function App() {
    const username = "JHalvor"
    const url = `https://boolean-uk-api-server.fly.dev/${username}/contact`
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(url)
          const jsonData = await response.json()
          setContacts(jsonData)
        };
        fetchData()
      }, [])

    return (
        <div className="main-layout">
            <div className="menu">
                <h1>Menu</h1>
                <nav>
                    <ul>
                        <li><Link to="/contacts">Contacts List</Link></li>
                        <li><Link to="/newContact">Add New Contact</Link></li>
                    </ul>
                </nav>
            </div>
            <ContactContext.Provider
            value={{
                contacts: contacts,
                setContacts: setContacts
            }}>
                <Routes>
                    <Route path="/contacts" element={<ContactList />} />
                    <Route path="/newContact" element={<ContactForm />} />
                    <Route path="/contacts/:id" element={<ContactProfile />} />
                </Routes>
            </ContactContext.Provider>
        </div>
    );
}