import { currencyFormat } from "../utils/utils";
import "./Bill.css";

const Bill = (props) => {
    const { name, price, deadline, url, status } = props;

    return (
        <div className={`bill bill--${status}`}>
            <header className="bill__header">
                <h2 className="bill__name">{name}</h2>
                <h3 className="bill__price">{currencyFormat(price)}</h3>
            </header>
            <div className="bill__info">
                <a className="bill__link" href={url} target="_blank" rel="noreferrer">¡Pagar ahora!</a>
                <p className="bill__deadline">💰 {`Día ${deadline} de cada mes`}</p>
            </div>
        </div>
    )
};

export default Bill;