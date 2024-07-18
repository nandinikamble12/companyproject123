import React, { useState } from 'react';
import '../App.css'; 

function Data() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', number: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact({ ...newContact, [name]: value });
  };

  const handleAddContact = () => {
    if (isEditing) {
      const updatedContacts = contacts.map((contact, index) =>
        index === currentIndex ? newContact : contact
      );
      setContacts(updatedContacts);
      setIsEditing(false);
    } else {
      setContacts([...contacts, newContact]);
    }
    setNewContact({ name: '', number: '', email: '' });
  };

  const handleEditContact = (index) => {
    setIsEditing(true);
    setCurrentIndex(index);
    setNewContact(contacts[index]);
  };

  const handleDeleteContact = (index) => {
    const filteredContacts = contacts.filter((_, i) => i !== index);
    setContacts(filteredContacts);
  };

  return (
    <div className="App">
      <h1>Data Management table</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newContact.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="number"
          placeholder="Contact Number"
          value={newContact.number}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newContact.email}
          onChange={handleInputChange}
        />
        <button onClick={handleAddContact}>{isEditing ? 'Update' : 'Add'}</button>
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.number}</td>
              <td>{contact.email}</td>
              <td>
                <button onClick={() => handleEditContact(index)}>Edit</button>
                <button onClick={() => handleDeleteContact(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Data;
