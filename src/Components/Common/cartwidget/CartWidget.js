import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';

const CartWidget = () => {
    const {getTotalQuantity } = useContext(CartContext);
    let total = getTotalQuantity();

    return (
        <>
            <Badge badgeContent={total} showZero color="warning">
            </Badge>
            <Link to='/cart' style={{ color: 'white', textDecoration: 'none' }}>
                <ShoppingCart style={{ color: 'white' }} />
            </Link>
        </>
    );
}

export default CartWidget;