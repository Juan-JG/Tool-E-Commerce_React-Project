import React, {useState, useEffect} from 'react'
import ItemList from '../components/ItemList';
import { useParams } from 'react-router-dom';

const tools = [
    {
        "id": 1,
        "img": "/assets/images/1.jpg",
        "name": "Taladro Percutor",
        "brand": "DeWalt",
        "price": 360000,
        "description":
          "Taladro Percutor 20V DCD985L2-B2 Dewalt",
        "stock": 10,
        "category": "electricas"
      },
      {
        "id": 2,
        "img": "/assets/images/2.jpg",
        "name": "Pala telescopica",
        "brand": "Stanley",
        "price": 9990,
        "description":
          "Pala punta huevo mango telescopico",
        "stock": 20,
        "category": "manuales"
      },
      {
        "id": 3,
        "img": "/assets/images/3.jpg",
        "name": "Sierra banco",
        "brand": "DeWalt",
        "price": 409990,
        "description":
          "Sierra banco 1800W DWE7470 + sierra caladora 500W DW300 Dewalt.",
        "stock": 5,
        "category": "electricas"
      },
      {
        "id": 4,
        "img": "/assets/images/4.jpg",
        "name": "Mascarilla respirador",
        "brand": "Karson",
        "price": 26900,
        "description":
          "Mascarilla respirador filtro doble",
        "stock": 40,
        "category": "epp"
      },
      {
        "id": 5,
        "img": "/assets/images/5.jpg",
        "name": "Picota",
        "brand": "Redline",
        "price": 28900,
        "description":
          "Picota de acero mango fibra de vidrio",
        "stock": 20,
        "category": "manuales"
      },
      {
        "id": 6,
        "img": "/assets/images/6.jpg",
        "name": "Overol",
        "brand": "Redline",
        "price": 52900,
        "description":
          "Overol Azul Talla M Canvas Redline",
        "stock": 50,
        "category": "epp"
      }
    ];

export const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([]);

    const {categoriaId} = useParams();

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(tools);
            },1000);
        });
        if (categoriaId) {
            getData.then(res => setData(res.filter(tools => tools.category === categoriaId)));
        } else {
            getData.then(res => setData(res));
        }
        

    },[categoriaId])

    const onAdd = (quantity) => {
        console.log(`Compraste ${quantity} unidades`)

    }
    return (
        <>
        <section>
            <p>{greeting}</p>
        </section>
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;