import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

interface Client {
  clientName: string;
  email: string;
  adress: string;
}

const Clients: React.FC = () => {
  const history = useHistory();

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");

  const saveClient = () => {
    let clients: Array<Client> =
      JSON.parse(localStorage.getItem("clients") || "[]") || [];
    if (!clientName || !email || !adress) return;
    const client: Client = { clientName, email, adress };
    clients.push(client);
    const clientString: string = JSON.stringify(clients);
    localStorage.setItem("clients", clientString);

    history.push("/clients");
  };

  const [data, setData] = useState<Client[]>([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("clients") || "[]");
    setData(data);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <form>
          <h1>Cadastro de Clientes</h1>

          <label htmlFor="clientName">Nome</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />

          <label htmlFor="clientName">E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="Endereço">Endereço</label>
          <input
            type="text"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />

          <br />
          <button onClick={saveClient}>Cadastrar</button>
        </form>
      </Container>

      <Container>
        <section>
          {data.map((cli: Client, index: number) => (
            <div className="product-content" key={index}>
              <h4>{cli.clientName}</h4>
              <p>{cli.email}</p>
              <p>{cli.adress}</p>
            </div>
          ))}
        </section>
      </Container>
    </>
  );
};

export default Clients;
