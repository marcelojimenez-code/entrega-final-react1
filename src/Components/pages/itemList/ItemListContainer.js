import { useEffect, useState } from "react"
// import products from "../../../productsMock"
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import {db} from '../../../firebaseConfig'
import { getDocs, collection, query, where } from 'firebase/firestore'


export const ItemListContainer = () => {
  const [items, setItems] = useState([])
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState({})

  const { categoryName } = useParams()

  useEffect(() => {

    let productsCollection = collection(db, 'products')
    let consulta
    if (categoryName) {

      consulta = query(productsCollection, where("category", "==", categoryName))
    } else {

      consulta = productsCollection
    }

    getDocs(consulta).then((res) => {
      let products = res.docs.map(doc => {
        return { id: doc.id, ...doc.data() }
      })
      setItems(products)
    })



  }, [categoryName])

  return (
    <div>
      <ItemList items={items} />

    </div>
  )
}














    // import ClipLoader from "react-spinners/ClipLoader";
    // import { Skeleton } from "@mui/material";
    // const stilosLoader = {
    //   display: "block",
    //   margin: "0 auto",
    // };
    // let productosFiltrados = products.filter((elemento) => elemento.category === categoryName)
    // // eslint-disable-next-line no-unused-vars
    // const tarea = new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res(categoryName === undefined ? products : productosFiltrados)
    //   }, 2000)
    // })
    // tarea
    //   .then((respuesta) => setItems(respuesta))
    //   .catch((error) => setError(error))
    // if (items.length === 0) {
    //   return (
    //     <div>
    //       <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
    //       <Skeleton variant="circular" width={40} height={40} />
    //       <Skeleton variant="rectangular" width={210} height={60} />
    //       <Skeleton variant="rounded" width={210} height={60} />
    //     </div>
    //   )
    // }