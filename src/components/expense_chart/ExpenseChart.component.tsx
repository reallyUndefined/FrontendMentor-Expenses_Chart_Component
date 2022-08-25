import { iExpenseData } from "../../interfaces";
import ChartBody from "../chart_body/ChartBody.component";
import ChartHeader from "../chart_header/ChartHeader.component";
import "./ExpenseChart.styles.scss";

interface ExpenseChartProps {
  data: iExpenseData[];
}
function ExpenseChart({ data }: ExpenseChartProps) {
  return (
    <div className="expense-chart">
      <ChartHeader />
      <ChartBody data={data} />
    </div>
  );
}

export default ExpenseChart;
