import { useState } from "react";

import Bill from "./bills/Bill";
import fakeBills from "./bills/__fixtures__/bills";
import BudgetAnalyzer from "./budget/BudgetAnalyzer";

import "./App.css";



const App = () => {

  const [billList, setBillList] = useState(fakeBills);

  const updateBillStatus = (id) => {
    
    const bill = billList.find(bill => bill.id === id);
    bill.status = "paid";

    setBillList([
      ...billList,
    ]);
  };

  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">💸 My bills</h1>
      </header>

      <main className="bills">
      {billList.map((bill, index) => (
          <Bill
            key={index}
            id={bill.id}
            name={bill.name}
            price={bill.price}
            deadline={bill.deadline}
            url={bill.url}
            status={bill.status}
            handleStatusChange={updateBillStatus}
          />
      ))}
      </main>

      <BudgetAnalyzer
        bills={billList}
      />
    </div>
  );
};

export default App;
