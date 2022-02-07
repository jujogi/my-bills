import { currencyFormat, groupBy } from "../utils/utils";

import "./BudgetAnalyzer.scss";

const MY_MONEY = 3000000;

const sumBills = (bills = []) => {
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
    const { totalToPay, filteredBills } = filterBillsByStatus(bills);
    const availableMoney = MY_MONEY - totalToPay;
    const pendingToPay = sumBills(filteredBills.pending) + sumBills(filteredBills.expired)

    return (
        <section className="budget">
            <div>
                <span className="pill pill__primary">🤑 Presupuesto: {currencyFormat(MY_MONEY)}</span>
                <span className="pill pill__available">💸 Disponible: {currencyFormat(availableMoney)}</span>
            </div>

            <div>
                <span className="pill pill__warning">💰 Total por pagar: {currencyFormat(totalToPay)}</span>
                <span className="pill pill__pending">⌛️ Pendiente por pagar: {currencyFormat(pendingToPay)}</span>
                <span className="pill pill__info">💵 Pagado: {currencyFormat(sumBills(filteredBills.paid))}</span>
            </div>

        
            
        </section>
    );

};

export default BudgetAnalyzer;