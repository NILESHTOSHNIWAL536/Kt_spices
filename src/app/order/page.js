import OrderReviewPage from '../order/OrderReviewPage';
// import orderData from '@/data/orderReview.json';
// import { deliveryAddress } from '@/data/orderReview.json';
import orderData from '../../data/products.json';

export default function OrderReview() {
  return (
    <OrderReviewPage 
      orderData={orderData}
      deliveryAddress={orderData.deliveryAddress}
    />
  );
}
