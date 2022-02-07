import { currencyFormat } from "../utils/utils";
import "./Bill.scss";

const Bill = (props) => {
    const { id, name, price, deadline, url, status, handleStatusChange } = props;

    const onChangeStatus = (id) => {
        handleStatusChange(id);
    }

    return (
        <div className={`bill bill--${status}`}>
            <header className="bill__header">
                <h2 className="bill__name">{name}</h2>
                <h3 className="bill__price">{currencyFormat(price)}</h3>
            </header>
            <p className="bill__deadline">💰 {`Día ${deadline} de cada mes`}</p>
            {
                status !== 'paid' ?
                <div className="bill__info">
                        <a className="bill__link" href={url} target="_blank" rel="noreferrer">¡Pagar ahora!</a>
                        <button
                            className="bill__link bill__link--green"
                            onClick={() => onChangeStatus(id)}
                        >¡Ya pagué!</button>
                </div>
                : ""
            }
        </div>
    )
};

export default Bill;