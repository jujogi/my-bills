import Bill from "./bills/Bill";
import fakeBills from "./bills/__fixtures__/bills";
import BudgetAnalyzer from "./budget/BudgetAnalyzer";

import "./App.css";


const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">💸 My bills</h1>
      </header>

      <main className="bills">
      {fakeBills.map((bill, index) => (
          <Bill
            key={index}
            name={bill.name}
            price={bill.price}
            deadline={bill.deadline}
            url={bill.url}
            status={bill.status}
          />
      ))}
      </main>

      <BudgetAnalyzer
        bills={fakeBills}
      />
    </div>
  );
};

export default App;
