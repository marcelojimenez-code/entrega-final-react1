import { useState } from 'react';
import { AppBar, Badge, Button, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import CartWidget from "../../Common/cartwidget/CartWidget"
import { Link } from "react-router-dom";

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const categories = [
        { name: "Todas", link: "/" },
        { name: "PS5", link: "/category/PS5" },
        { name: "Xbox", link: "/category/xbox" },
        { name: "Switch", link: "/category/switch" },
    ];
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
                        <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Ecommerce JS</Link>
                    </Typography>
                    <Button color="inherit">
                        <Link to={'/'} style={{color:'white',textDecoration:'none'}}> Inicio </Link>
                    </Button>
                    <Button color="inherit" onClick={handleMenuOpen}>
                        Categorías
                    </Button>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        {categories.map((category) => (
                            <MenuItem key={category.name} onClick={handleMenuClose}>
                                <Link to={category.link}>{category.name}</Link>
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button color="inherit">
                        Login
                    </Button>

                    <Badge>
                        <CartWidget />
                    </Badge>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;
