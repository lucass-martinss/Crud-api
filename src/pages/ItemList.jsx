import { useEffect, useState } from "react";
import api from "../services/api";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonAddClient from "../components/ButtonAddClient/Buttons";
import DeleteButton from "../components/ButtonDelete/ButtonDelete";
import EditButton from "../components/ButtonEdit/ButtonEdit";

function ItemList() {
  const [clients, setClients] = useState([]);

  async function getClients() {
    const clientsAllDatas = await api.get("/clients");
    setClients(clientsAllDatas.data)
  }
  useEffect(() => {
    getClients();
  }, []);
  async function deleteClient(id) {
    await api.delete(`/clients/${id}`);
    getClients();
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">client List</h2>
      <ButtonAddClient Path={'/add'}/>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.telefone}</td>
              <td>{client.email}</td>
              <td>{client.cpf}</td>
              <td>
                <EditButton Path={`/edit/${client.id}`}/>
              </td>

              <td>
                <DeleteButton
                  onDelete={() => deleteClient(client.id)}/>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ItemList;
