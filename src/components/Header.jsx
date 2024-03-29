import React from 'react'
import {Badge, Button} from "@mui/material";
import CartLogo from "@mui/icons-material/ShoppingCart"
import {  useSelector } from 'react-redux';
function Header(props) {
const itemCount=useSelector(state=>state.cart.length);
  return (
    <div>

   <nav>    
        <div className='site-name'>INDIA STORE</div>
        <Badge badgeContent={itemCount} color='success'>
            <Button variant='contained' startIcon={<CartLogo/>} onClick={()=>props.setDisplayCart(prevData=>!prevData)}>CART</Button>
        </Badge>
   </nav>
    </div>
  )
}

export default Header