/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ButtonEdit.css'
const EditButton = ({Path}) => {

    return( <Link to={Path} className="btnEdit">Edit</Link> )

}

export default EditButton;