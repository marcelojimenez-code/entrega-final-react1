import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item, isInItemList }) => {
  return (
    <Card sx={{ width: 345, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item.img}
          alt={item.title}
          style={{ objectFit: "contain", height: "200px" }} // Ajusta el estilo para que la imagen se vea completa en el CardMedia
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: "bold" }}>
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ minHeight: "70px" }}>
            {item.description}
          </Typography>
          <Typography variant="h6" component="div" color="primary" sx={{ marginTop: "10px" }}>
            Precio: ${item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "center" }}>
        {isInItemList ? (
          <Button size="small" color="primary" component={Link} to={`/item/${item.id}`}>
            Ver detalle
          </Button>
        ) : (
          <Button size="small" color="primary">
            Eliminar del Carrito
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCard;
