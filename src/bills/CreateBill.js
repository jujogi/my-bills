import { useState } from "react";
import "./CreateBill.scss";

const CreateBill = (props) => {

    const [name, setName] = useState("🌴 Factura de prueba");
    const [price, setPrice] = useState("");
    const [deadline, setDeadline] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const { handleBill } = props;

        handleBill({
            name,
            price,
            deadline
        });

    }

    return (
        <div className="overlay">
            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre de la factura: </label>
                <input
                    className="form__input"
                    type="text"
                    placeholder="Nombre de tu factura"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="price">Valor de la factura: </label>
                <input
                    className="form__input"
                    type="number"
                    placeholder="Valor de tu factura"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <label>Día límite de pago: </label>
                <input
                    htmlFor="date"
                    className="form__input"
                    type="number"
                    placeholder="Día de pago"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                />
                <input className="form__input form__input--submit" type="submit" value="Crear factura" id="date"/>
            </form>
        </div>

    )
};

export default CreateBill;