import Header from "./components/Header";
import Content from "./components/Content";
import { handleTotals } from "./features/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();
  const {cartItems} = useSelector((store) => store.cart);
  
  useEffect(() => {
    dispatch(handleTotals());
  }, [cartItems])
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}

export default App;