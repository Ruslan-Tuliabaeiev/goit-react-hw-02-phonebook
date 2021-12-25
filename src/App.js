
import React, { Component } from 'react';

 import shortid from 'shortid';
//import { nanoid } from 'nanoid'
 //import { NewContacts } from './components/NewContacts';
//import { Contacts } from './components/Contacts';
import style from './components/phonebook.module.css'


class App extends Component {
  state = {
    contacts: [

    ],
    name: '',
    number: '',
    };



    // const shortid = require('shortid');

    // console.log(shortid.generate());
    loginInputId = shortid.generate();

    handleChange  = e => {
const {name, value} = e.currentTarget;
this.setState({[name]: value});
    }



  handleNumberChange  = e => {
    this.setState({ number: e.target.value });
   
};

handleSubmit = e => {
  e.preventDefault();
  ///this.props.onSubmit({ ...this.state });

 console.log(this.state );
  this.reset();
}
 

reset = () => {
  this.setState({name: '', number: '' })
}

////////////
  

///////

/////////////
 render() {
 
   return (
     
<>
<h1>Phonebook</h1>
  <form  onSubmit={this.handleSubmit}>
 <div className={style.blockList}>
 <span className={style.span}>Neme:</span> 
   <label >
   <input
   type="text"
   name="name"
   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
   title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
   required
   id={this.loginInputId}
 value={this.state.name}

 onChange={this.handleChange }


/>

 </label>
  
 </div>
 <div className={style.blockList}>
 <span className={style.span}>Number:</span> 

 <label>
 <input
   type="tel"
   name="number"
   pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
   title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
   required
   value={this.state.number}
 onChange={this.handleChange}

 

 />
 </label> </div> <div> <button  className={style.buttonSudmit} type='submit' onClick={this.handleSubmit}>Add contact</button> </div>
 </form>
 <h2>Contacts</h2>




   {/* <Contacts 
contacts={this.handleSubmit()}
/>   */}


</>
)
 
 }

}








 export default App;

//==========<Form/>





