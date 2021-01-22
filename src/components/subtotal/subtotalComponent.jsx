import React from 'react';
import './subtotal.styles.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../provider/StateProvider';
const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const totalValue = basket?.reduce((total, {price}) => total + price, 0);
    return (
        <div className="subtotal">
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket.length} items):
                        <strong>{value}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox"/> This order
                    </small>
                </>
            )}
                decimalScale={2}
                value={totalValue}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to CHeckout</button>
        </div>
    )   
}

export default Subtotal;