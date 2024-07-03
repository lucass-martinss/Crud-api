/* eslint-disable react/prop-types */
import {Link} from'react-router-dom'
import './ButtonAddClient.css'
const ButtonAddClient = ({Path}) => {

    return( <Link to={Path} className="btn">Add client</Link> )

}

export default ButtonAddClient;