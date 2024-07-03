import  { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
const EditProduct = () => {
const {id} = useParams()
const [client, setClient] = useState([])
const inputName = useRef()
const inputTelefone = useRef()
const inputEmail = useRef()
const inputCpf = useRef()
const navigate = useNavigate()

async function getClient() {
  const client = await api.get(`/clients?id=${id}`)
  setClient(client.data)
}
useEffect(()=> {
  getClient()
  
},[])
 

async function clientUpdate() {
  if (inputCpf.current.value === "") {
  alert("O campo cpf é obrigatório")
  } else {
    await api.put(`/clients/${id}`,{
      name: inputName.current.value,
      telefone: inputTelefone.current.value,
      email: inputEmail.current.value,
      cpf: inputCpf.current.value
    }).then(navigate('/')).then(location.reload())
  }

 
}

  return (
    
    <div className="container mt-5">
      <h2 className="mb-4">Edit Client</h2>

      {client.map(data => (

      <form key={data.id}>
          
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            ref={inputName}
            defaultValue={data.name}
            required
          />
        </div>
        <div className="form-group">
          <label>Telefone</label>
          <input
            type="text"
            className="form-control"
            ref={inputTelefone}
            defaultValue={data.telefone}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            defaultValue={data.email}
            ref={inputEmail}
            required
          />
        </div>
        <div className="form-group">
          <label>Cpf</label>
          <input
            type="text"
            className="form-control"
            defaultValue={data.cpf}
            ref={inputCpf}
            required
          />
        </div>
          <button type="submit" onClick={clientUpdate} className="btn btn-primary">Update Client</button>

      </form>

))}
    </div>
  );
};

export default EditProduct;
