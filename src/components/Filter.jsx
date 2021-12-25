
import PropTypes from'prop-types';


export const Filter = ({value, onChange}) => {
return (
    <>
    <label>Find contacts by name</label>

<input
  type="text"
value={value}
onChange={onChange}

/>
</>
)

}

Filter.prototype={
    value: PropTypes.string.isRequired,
 onChange: PropTypes.func.isRequired,

}

