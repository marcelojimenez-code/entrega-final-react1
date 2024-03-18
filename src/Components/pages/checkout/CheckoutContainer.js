import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../config/firebase";
import { addDoc, collection, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import { Button, Container, Typography, TextField, Grid } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState('');

  let total = getTotalPrice();

  const handleSubmit = (values) => {
    let order = {
      buyer: values,
      items: cart,
      total: total,
      date: serverTimestamp()
    };

    console.log(order);

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(res => {
      setOrderId(res.id);
      clearCart(); // Vaciar el carrito después de enviar el formulario
    });

    cart.forEach((product) => {
      updateDoc(doc(db, 'products', product.id), { stock: product.stock - product.quantity });
    });
  }

  const formik = useFormik({
    initialValues: {
      nombre: '',
      phone: '',
      email: '',
      reenterEmail: ''
    },
    onSubmit: handleSubmit,
    validationSchema: Yup.object({
      nombre: Yup.string().required("Este campo es obligatorio"),
      phone: Yup.string().required("Este campo es obligatorio"),
      email: Yup.string().email("Correo inválido").required("Este campo es obligatorio"),
      reenterEmail: Yup.string().oneOf([Yup.ref('email'), null], "Los correos deben coincidir").required("Este campo es obligatorio")
    })
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        CheckOut
      </Typography>
      {orderId ? (
        <Grid container spacing={2} direction="column" alignItems="center">
          <Grid item>
            <Typography variant="h6" gutterBottom>
              Gracias por su compra
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" gutterBottom>
              Su número de compra es:
            </Typography>
            <Typography variant="h5" color="primary">
              #{orderId}
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/">
              <Button variant="contained" color="primary">
                Volver a comprar
              </Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <form onSubmit={formik.handleSubmit}>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            error={formik.touched.nombre && formik.errors.nombre ? true : false}
            helperText={formik.touched.nombre && formik.errors.nombre}
            {...formik.getFieldProps('nombre')}
          />
          <TextField
            label="Teléfono"
            variant="outlined"
            fullWidth
            error={formik.touched.phone && formik.errors.phone ? true : false}
            helperText={formik.touched.phone && formik.errors.phone}
            {...formik.getFieldProps('phone')}
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            error={formik.touched.email && formik.errors.email ? true : false}
            helperText={formik.touched.email && formik.errors.email}
            {...formik.getFieldProps('email')}
          />
          <TextField
            label="Reingresar Correo"
            variant="outlined"
            fullWidth
            type="email"
            error={formik.touched.reenterEmail && formik.errors.reenterEmail ? true : false}
            helperText={formik.touched.reenterEmail && formik.errors.reenterEmail}
            {...formik.getFieldProps('reenterEmail')}
          />
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: "10px" }}>
            Enviar
          </Button>
        </form>
      )}
    </Container>
  );
};

export default CheckoutContainer;


/* 
  const [itemList, setItemList] = useState([]);
  const [newItemNombre , setNewItemNombre ] = useState("");
  const [newItemPrecio , setNewItemPrecio ] = useState(0);
  const [newItemStock, setNewItemStock ] = useState(0);
  const [updatedNombre, setUptatedNombre ] = useState("");


  const itemsCollecionRef = collection(db, "item");
  
  const getItemList = async ()=>{
    const data = await getDocs(itemsCollecionRef);

    const filteredData = data.docs.map( (doc)=>({
      ...doc.data(),
      id:doc.id
    }))

    setItemList(filteredData);
  }

  useEffect(()=>{    
    getItemList();
  },[])

  const onSubmitItem = async ()=>{

    if(newItemNombre != "" ){
        await addDoc(itemsCollectionRef, {Nombre:newItemNombre,
                                    Precio:newItemPrecio,
                                    Stock:newItemStock});         
        
    }

    getItemList();
  }



const deleteItem = async (id)=>{

    const itemDoc = doc( db , "item",  id);
    await deleteDoc( itemDoc);

    getItemList();

}


const uptatedItemNombre = async (id)=>{

    const itemDoc = doc(db , "item" , id);
    await updateDoc(itemDoc, {Nombre:updatedNombre});

    getItemList();

}
*/