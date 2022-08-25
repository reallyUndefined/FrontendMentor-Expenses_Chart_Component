import ExpenseChart from "./components/expense_chart/ExpenseChart.component";
import "./App.styles.scss";

import data from "./data.json";

function App() {
  return (
    <div className="app">
      <ExpenseChart data={data} />
    </div>
  );
}

export default App;
