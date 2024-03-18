import { Button, Typography } from "@mui/material";

const Counter = ({ count, sumar, restar, onAdd }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        backgroundColor: "#f0f0f0",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Button
        variant="contained"
        color="primary"
        onClick={restar}
        disabled={count <= 1}
      >
        -
      </Button>
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        {count}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={sumar}
        disabled={count >= 10}
      >
        +
      </Button>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => onAdd(count)}
        disabled={count <= 0}
      >
        Agregar al carrito
      </Button>
    </div>
  );
};

export default Counter;