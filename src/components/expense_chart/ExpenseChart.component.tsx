import ChartBody from "../chart_body/ChartBody.component";
import ChartHeader from "../chart_header/ChartHeader.component";
import "./ExpenseChart.styles.scss";

function ExpenseChart() {
  return (
    <div className="expense-chart">
      <ChartHeader />
      <ChartBody />
    </div>
  );
}

export default ExpenseChart;
