import { iExpenseData } from "../../interfaces";
import Chart from "../chart/Chart.component";
import "./ChartBody.styles.scss";

interface ChartBodyProps {
  data: iExpenseData[];
}
function ChartBody({ data }: ChartBodyProps) {
  return (
    <div className="chart-body">
      <h2>Spending - Last 7 days</h2>

      <Chart data={data} />

      <div className="total">
        <div className="">
          <span className="text">Total this month</span>
          <h2>$478.33</h2>
        </div>
        <div className="">
          <span className="percent">+2.4%</span>
          <span className="text">from last month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBody;
