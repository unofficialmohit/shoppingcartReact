import React from 'react'
import {Button} from "@mui/material";
import CartLogo from "@mui/icons-material/ShoppingCart"
function Header(props) {
  return (
    <div>

   <nav>    
        <div className='site-name'>INDIA STORE</div>
        <Button variant='contained' startIcon={<CartLogo/>} onClick={()=>props.setDisplayCart(prevData=>!prevData)}>CART</Button>
   </nav>
    </div>
  )
}

export default Header