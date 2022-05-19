import React, {useState, useContext} from 'react'
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  // const ctx = useContext(CartContext)


  const [showCart, setShowCart] = useState(false)


  const showCartHandler = () => {
    setShowCart(true)
  }

  const hideCartHandler = () => {
    setShowCart(false)
  }




  return (
    <CartProvider>
      {showCart && <Cart onClose={hideCartHandler}/>}
      <Header
        onShowCart={showCartHandler}
        onHideCart={hideCartHandler}
      />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
