import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Button, Container, Grid, Typography, Card, CardContent, CardActions } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const CartContainer = () => {
  const { cart, clearCart, deleteById, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();

  const limpiar = () => {
    Swal.fire({
      title: "¿Seguro que quieres eliminar el carrito?",
      showDenyButton: true,
      confirmButtonText: "Aceptar",
      denyButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("El carrito se ha eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Tus productos se mantuvieron en el carrito", "", "info");
      }
    });
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Carrito
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" align="center" style={{ margin: "20px 0" }}>
          El carrito está vacío
        </Typography>
      ) : (
        cart.map((elemento) => (
          <Card key={elemento.id} sx={{ marginBottom: "10px" }}>
            <CardContent>
              <Typography variant="h6">{elemento.title}</Typography>
              <Typography variant="subtitle1">Precio: ${elemento.price}</Typography>
              <Typography variant="subtitle1">Cantidad: {elemento.quantity}</Typography>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => deleteById(elemento.id)}>
                Eliminar
              </Button>
            </CardActions>
          </Card>
        ))
      )}
      {cart.length > 0 && (
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" color="secondary" onClick={limpiar}>
              Vaciar Carrito
            </Button>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item>
                <Link to={"/checkout"} style={{ textDecoration: "none" }}>
                  <Button variant="contained" color="primary">
                    Finalizar Compra
                  </Button>
                </Link>
              </Grid>
              <Grid item>
                <Typography variant="h5" gutterBottom>
                  Total: ${total}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default CartContainer;
