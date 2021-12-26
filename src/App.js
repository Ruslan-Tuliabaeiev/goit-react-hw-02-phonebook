
import React, { Component } from 'react';

import { nanoid } from 'nanoid'

import { Contacts } from './components/Contacts';

import { Form } from './components/Form';
import { Filter } from './components/Filter';
import style from './components/phonebook.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  
    };

    handleFilter = e => {


this.setState({filter: e.currentTarget.value})
    }

findContacts = () => { 
const {contacts, filter} = this.state
const normalizedFilter = filter.toLowerCase()
return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter) )

  
}

deleteContacts = (id) => {
  this.setState(prevState => ({ contacts: prevState.contacts.filter(contact => contact.id !== id) }))
}


handleSubmit = ({name, number}) => {
  const {contacts} = this.state
  const findName = contacts.find(contact => contact.name === name)
  if (findName){
    alert('This name is already in the phone book')
  } else { const contact = {id: nanoid(), name, number}
 this.setState(({contacts}) => ({contacts:  [contact, ...contacts]}) )}

}

 render() {
 const visibleContacts = this.findContacts()

   return (
     
<>

<Form 
onAddContacts={this.handleSubmit}
/>
 <h2 className={style.contact}>Contacts</h2>

<Filter 
value={this.state.filter}
onChange={this.handleFilter}
/>


 <Contacts 
contacts={visibleContacts}
onDeleteContacts = {this.deleteContacts}

/>   


</>
)
 
 }

}

 export default App;

