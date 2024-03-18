import ItemList from "./itemList/ItemList"
import Footer from "../../Layout/Layout"
import ItemDetail from "./itemDetail/ItemDetail"

const Home = ({edad}) => {
  console.log("el componente se monto!")


  return (
    <>
      {/* <NavBar /> */}
      <ItemList nombre='JS'/>
      <h2>La edad es{edad}</h2>
      <ItemDetail/>
      <Footer />

    </>
  )
}

export default Home