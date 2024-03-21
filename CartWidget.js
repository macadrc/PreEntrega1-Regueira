import React from 'react';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <i className="fa fa-shopping-cart"></i>
      <span className="badge badge-pill badge-primary">5</span> {/* Número hardcodeado */}
    </div>
  );
}

export default CartWidget;
