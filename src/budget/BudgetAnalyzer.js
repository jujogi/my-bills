import { currencyFormat, groupBy } from "../utils/utils";

import "./BudgetAnalyzer.css";

const MY_MONEY = 3000000;

const sumBills = (bills) => {
    return bills.reduce(function (acc, obj) { return acc + obj.price; }, 0);
}

const filterBillsByStatus = (bills) => {
    const filteredBills = groupBy(bills, "status");
    const totalToPay = sumBills(bills);

    return {
        filteredBills,
        totalToPay
    }
};


const BudgetAnalyzer = (props) => {

    const { bills } = props;
    const { totalToPay, filteredBills } =filterBillsByStatus(bills);
    const availableMoney = MY_MONEY - totalToPay;

    console.log(filteredBills);


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