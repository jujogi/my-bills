import { useState, useEffect } from "react";

import Bill from "./bills/Bill";
import CreateBill from "./bills/CreateBill";
import { getBillsProvider, addBillProvider } from "./providers/bills.provider";
import BudgetAnalyzer from "./budget/BudgetAnalyzer";
import billMapper from "./mappers/bills.mapper";

import "./App.css";



const App = () => {

  const [billList, setBillList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getBills();
  },[]);

  const getBills = async () => {
    const bills = await getBillsProvider();
    setBillList(billMapper(bills));
  }

  const addBill = async (bill) => {
    
    await addBillProvider(bill);

    setBillList([
      bill,
      ...billList,
    ]);

    setShowModal(!showModal);

  }

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
        <button className="createBill" onClick={(e) => setShowModal(!showModal)}>
          { !showModal ? "➕" : "✖️" }
        </button>
      </header>

    { showModal ? 
      <CreateBill
        handleBill={addBill}
      />
      : ""
    }
    
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
