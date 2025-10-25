import CartPage from './cartpage';
import cartData from '../../data/products.json';

export default function Cart() {
  return <CartPage initialCartData={cartData} />;
}
