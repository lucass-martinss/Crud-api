/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './ButtonDelete.css'

const DeleteButton = ({onDelete}) => {

    return( <Link to="/" onClick={onDelete} className="btnDel">Delete</Link> )

}

export default DeleteButton;