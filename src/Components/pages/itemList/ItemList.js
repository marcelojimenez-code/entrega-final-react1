import ProductCard from "../../common/productCard/ProductCard";
import ClipLoader from "react-spinners/ClipLoader";

const ItemList = ({ items }) => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', paddingTop: '10px', paddingBottom: '10px' }}>
        Todos los productos
      </h1>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-evenly", flexWrap: "wrap" }}>
        {items.length > 0 ? (
          items.map((item) => (
            <div key={item.id} style={{ flex: "0 0 250px", margin: "10px" }}>
              <ProductCard item={item} isInItemList={true} />
            </div>
          ))
        ) : (
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}>
            <ClipLoader
              color="#007aff"
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;