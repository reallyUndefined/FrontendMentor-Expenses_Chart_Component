import ExpenseChart from "./components/expense_chart/ExpenseChart.component";
import "./App.styles.scss";

import data from "./data.json";

function App() {
  return (
    <main className="app">
      <ExpenseChart data={data} />
    </main>
  );
}

export default App;
