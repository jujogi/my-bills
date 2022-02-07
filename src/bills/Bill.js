import { currencyFormat } from "../utils/utils";
import "./Bill.scss";


const updateStatusToPaid = (bill) => {
    console.log(bill);
  };

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
            <div className="bill__info">
                <a className="bill__link" href={url} target="_blank" rel="noreferrer">¡Pagar ahora!</a>
                {
                status !== 'paid' ?
                <button
                    className="bill__link bill__link--green"
                    onClick={() => onChangeStatus(id)}
                >¡Ya pagué!</button> : ""
                }
            </div>
        </div>
    )
};

export default Bill;