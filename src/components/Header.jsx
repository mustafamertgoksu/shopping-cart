import { AiFillShopping } from 'react-icons/ai';
import { useSelector } from 'react-redux';


function Header() {
  const { amount } = useSelector((store) => store.cart)
  return (
    <header>
      <h1>Shopping Cart</h1>
      <div>
        <AiFillShopping className='shopping-icon' />
        <span className="amount">{amount}</span>
      </div>
    </header>
  )
}

export default Header;