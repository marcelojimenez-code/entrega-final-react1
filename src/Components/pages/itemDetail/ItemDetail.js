import CounterContainer from "../../common/counter/CounterContainer";
import ProductCard from "../../common/productCard/ProductCard";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ producto, totalQuantity, onAdd }) => {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Detalles del producto</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductCard item={producto} isInItemList={true} />
      </div>
      {totalQuantity === undefined || totalQuantity < producto.stock ? (
        producto.stock > 0 ? (
          <CounterContainer stock={producto.stock} onAdd={onAdd} initial={totalQuantity} />
        ) : (
          <h2>No hay stock disponible</h2>
        )
      ) : (
        <h2>Tienes el máximo de unidades en el carrito</h2>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default ItemDetail;
