import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config/firebase";
import { getDoc, collection, doc } from "firebase/firestore";
import ItemDetail from "./ItemDetail";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const totalQuantity = getQuantityById(id);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    getDoc(productRef).then(res => {
      setProducto({ ...res.data(), id: res.id });
    });
  }, [id]);

  const onAdd = (cantidad) => {
    let productCart = { ...producto, quantity: cantidad };
    addToCart(productCart);
    toast.success('Producto agregado correctamente');
  };

  return (
    <ItemDetail producto={producto} totalQuantity={totalQuantity} onAdd={onAdd} />
  );
};

export default ItemDetailContainer;






















// const ItemDetailContainer = () => {

//     const { addToCart,getQuantityById } = useContext(CartContext)

//     const [producto, setProducto] = useState({})
    

//     const { id } = useParams()
//     const navigate = useNavigate()
//     const totalQuantity = getQuantityById(id)

//     useEffect(() => {
//         let productoSeleccionado = products.find(elemento => elemento.id === +id)
//         // eslint-disable-next-line no-unused-vars
//         const tarea = new Promise((res, rej) => {
//             res(productoSeleccionado)
//         })
//         tarea.then(res => setProducto(res))
//     }, [id])

    // import Swal from 'sweetalert2'
    // const onAdd = (cantidad) => {
    //     let productCart = { ...producto, quantity: cantidad }
    //     addToCart(productCart)
    //     // Swal.fire({
    //     //     position: 'center',
    //     //     icon: 'success',
    //     //     title: 'Producto agregado al carrito',
    //     //     showConfirmButton: false,
    //     //     timer: 1500,
    //     //   })
    //     toast.success('Producto agregado correctamente');
    // }