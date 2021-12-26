
import PropTypes from "prop-types"

import { ElementContacts } from "./ElementContacts"




export const Contacts = ({contacts, onDeleteContacts}) => {
    return (
        <ul>
       {contacts.map(({ name, id, number }) => (<li key={id}><ElementContacts name={name} number={number} id={id} func={onDeleteContacts}/></li>) )}
        </ul>
    )
}


Contacts.prototype={
    contacts: PropTypes.arrayOf(
PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
)

    ),


}


