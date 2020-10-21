import React from 'react'
import "./subtotal.css"

import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider/StateProvider';
import { getBasketTotal } from '../Reducer/Reducer';
const Subtotal = () => {

    const [{basket}, dispatch] = useStateValue();
    console.log(basket);





    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal