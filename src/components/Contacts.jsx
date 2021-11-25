import React, {useState} from "react";
import './Contacts.css';

const contacts = [{
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
  }, {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];

const Contacts = () => {

    const [items, setItems] = useState(contacts);

    const handleSearchChange = (event) => {
        const filteredContacts = contacts.filter((contact) => {
          return contact.firstName.toLowerCase().indexOf(event.target.value) !== -1 || 
          contact.firstName.indexOf(event.target.value) !== -1 || 
          contact.lastName.toLowerCase().indexOf(event.target.value) !== -1 || 
          contact.lastName.indexOf(event.target.value) !== -1 || 
          contact.phone.indexOf(event.target.value) !== -1;
    
        });
        setItems(filteredContacts);
        console.log(event.target.value);
    }


    const handleMaleChecked = (event) => {
        const filteredMaleContacts = contacts.filter((contact) => {
            return contact.gender === "male";
        });
        setItems(filteredMaleContacts);
    }

    const handleFemaleChecked = (event) => {
        const filteredFemaleContacts = contacts.filter((contact) => {
            return contact.gender === "female";
        });
        setItems(filteredFemaleContacts);
    }

    const handleNogenderChecked = (gender) => {
        const filteredNogenderContacts = contacts.filter((contact) => {
            return contact.gender == undefined;
        });
        setItems(filteredNogenderContacts);
    }

    return (
        <div>
            <input type="text" onChange={handleSearchChange} placeholder="Search contact" className="Search"/>
            <input type="checkbox" onChange={handleMaleChecked} id="male"/>
            <label for="male">M</label>
            <input type="checkbox" onChange={handleFemaleChecked} id="female"/>
            <label for="female">Ж</label>
            <input type="checkbox" onChange={handleNogenderChecked} id="nogender"/>
            <label for="nogender">Стать не вказана</label>

            <ul className="ContactsList" >
                {
                    items.map(({firstName, lastName, phone, gender}) => (
                        <li className="ContactItem">
                            <p className="FirstName">
                                <span>{firstName} {lastName}</span>
                                </p>
                            <p className="Phone">{phone}</p>
                            <p className="Gender">{gender}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Contacts;
