import React from 'react';
import './components/CheckoutProduct/CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CheckoutProduct({ id, title, imageSrc, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={imageSrc} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {}
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
