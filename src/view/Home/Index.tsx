import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header/Header";

interface Products {
  id: string;
  photo: string;
  name: string;
  description: string;
  price: string;
}

const Home: React.FC = () => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const saveProduct = () => {
    let products: Array<Products> =
      JSON.parse(localStorage.getItem("products") || "[]") || [];
    if (!id || !photo || !name || !description || !price) return;
    const product: Products = { id, photo, name, description, price };
    products.push(product);
    const productString: string = JSON.stringify(products);
    localStorage.setItem("products", productString);

    history.push("/");
  };

  const [data, setData] = useState<Products[]>([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("products") || "[]");
    setData(data);
  }, []);

  return (
    <>
      <Header />
      <Container>
        <form>
          <h1>Inventário de Produtos</h1>

          <label htmlFor="Id">Id</label>
          <input
            type="number"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="Nome">Nome</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <label htmlFor="Nome">Preço</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="urlimg">Url da imagem(Opcional)</label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <br />
          <button onClick={saveProduct}>Cadastrar</button>
        </form>
      </Container>

      <Container>
        <section>
          {data.map((prod: Products, index: number) => (
            <div className="product-content" key={index}>
              <img
                src={prod.photo}
                alt={prod.name}
                width="200px"
                height="auto"
              />
              <h4>{prod.name}</h4>
              <span>{prod.description}</span>
              <h4>{`R$ ${prod.price}`}</h4>
            </div>
          ))}
        </section>
      </Container>
    </>
  );
};

export default Home;
