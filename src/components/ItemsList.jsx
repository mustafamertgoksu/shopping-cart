import { useSelector, useDispatch } from "react-redux"
import Item from "./Item"
import { clearCart } from "../features/cartSlice";

const ItemsList = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <p>Your bag is empty</p>
    )
  }
  return (
    <>
      <h1 className='main-title'>Your Bag</h1>
      <ul>
        {cartItems.map((item) => (
          <Item key={item.id} {...item} />
        ))}
        <h3 className="total-price">Total {total}$</h3>
        <button className="clear-cart" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </ul>
    </>
  )
}

export default ItemsList