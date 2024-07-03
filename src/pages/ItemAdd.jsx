import { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import ButtonAddClient from '../components/ButtonAddClient/Buttons';
const AddProduct = () => {

  const navigate = useNavigate()
  const inputName = useRef()
  const inputTelefone = useRef()
  const inputEmail = useRef()
  const inputCpf = useRef()

  async function clientAdd() {
    if( inputCpf.current.value === "" ) {
      alert("O campo cpf deve conter algum valor")

 
    } else {
      await api.post('/clients',{
        name: inputName.current.value,
        telefone: inputTelefone.current.value,
        email: inputEmail.current.value,
        cpf: inputCpf.current.value
      }).then(() => navigate('/'))
    }



   
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add New Product</h2>
      <form>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            className="form-control"
            ref={inputName}
            required
          />
        </div>
        <div className="form-group">
          <label>Telefone</label>
          <input
            type="text"
            className="form-control"
            ref={inputTelefone}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            ref={inputEmail}
          />
        </div>
        <div className="form-group">
          <label>CPF</label>
          <input
            type="text"
            className="form-control"
            ref={inputCpf}
          />
        </div>
        <ButtonAddClient Path={'/'} onClick={clientAdd}/>
      </form>
    </div>
  );
};

export default AddProduct;
