import React from 'react'
import Header from './components/Header'
import {SnackbarProvider} from 'notistack';
import DisplayList from './components/DisplayList';
import DisplayCart from './components/DisplayCart';
function App() {
  const[displayCart,setDisplayCart]=React.useState(false);
  
  return (
    <div>
     <SnackbarProvider>
        <Header setDisplayCart={setDisplayCart}/>
        <DisplayCart displayCart={displayCart} setDisplayCart={setDisplayCart} />
        <DisplayList/>
     </SnackbarProvider>
    

    </div>
  )
}

export default App