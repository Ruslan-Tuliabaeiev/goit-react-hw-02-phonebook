
import PropTypes from'prop-types';


export const ElementContacts = ({name, number, id, func}) => {

    return( 
<>
<i>{name}:</i>
<b>{number}</b>
<button onClick={() => func(id)}  >Delete</button>


</>

    )
} 


ElementContacts.prototype={
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    // func: PropTypes.func.isRequired,

 

}


