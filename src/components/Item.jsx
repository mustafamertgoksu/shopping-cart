import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../features/cartSlice";

const Item = ({ id, image, name, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <li>
      <div className="left">
        <img src={image} alt="" />
        <h3>{name} <strong>{price}$</strong></h3>
        <button onClick={() => dispatch(removeItem(id))}>Remove</button>
      </div>
      <div>
        <FiChevronUp style={{ display: 'block', fontSize: '24px', cursor: 'pointer' }} onClick={() => dispatch(increase({id}))} />
        <p>{amount}</p>
        <FiChevronDown style={{ display: 'block', fontSize: '24px', cursor: 'pointer' }} onClick={() => dispatch(decrease({id}))} />
      </div>
    </li>
  )
}

export default Item;