import "./CreateBill.scss";

const CreateBill = () => {
    return (
        <div className="overlay">
            <form className="form">
                <label for="name">Nombre de la factura: </label>
                <input className="form__input" type="text" placeholder="Nombre de tu factura" id="name" />
                <label for="price">Valor de la factura: </label>
                <input className="form__input" type="number" placeholder="Valor de tu factura" id="price" />
                <label>Fecha límite de pago: </label>
                <input for="date" className="form__input" type="date" />
                <input className="form__input form__input--submit" type="submit" value="Crear factura" id="date"/>
            </form>
        </div>

    )
};

export default CreateBill;