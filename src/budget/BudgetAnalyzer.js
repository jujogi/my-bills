import { currencyFormat } from "../utils/utils";

import "./BudgetAnalyzer.css";

const MY_MONEY = 3000000;

const filterBillsByStatus = (bills) => {

    let totalToPay = 0;
    const filteredBills = bills.reduce((acc, bill) => {
        
        const { price, status } = bill;
        totalToPay += price;

        return {
            ...acc,
            [status]: {
                ...bill,
            }
        }
    }, {});

    return {
        filteredBills,
        totalToPay,
    }
};

const sumBills = (bills) => {
    return [bills].reduce(function (acc, obj) { return acc + obj.price; }, 0);
}

const BudgetAnalyzer = (props) => {

    const { bills } = props;
    const { totalToPay, filteredBills } = filterBillsByStatus(bills);
    const availableMoney = MY_MONEY - totalToPay;

    return (
        <section className="budget">

            Presupuesto: {currencyFormat(MY_MONEY)}
            Total por pagar: {currencyFormat(totalToPay)}
            Disponible: {currencyFormat(availableMoney)}

            Pagado: {currencyFormat(sumBills(filteredBills.paid))}
        </section>
    );

};

export default BudgetAnalyzer;