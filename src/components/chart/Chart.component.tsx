import { iExpenseData } from "../../interfaces";
import "./Chart.styles.scss";

interface ChartProps {
  data: iExpenseData[];
}
function Chart({ data }: ChartProps) {
  const maxAmt = Math.max(...data.map((exp) => exp.amount));
  const chartData = data.map((expData) => ({
    ...expData,
    percent: (expData.amount / maxAmt) * 100,
  }));
  const today = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"][
    new Date().getDay()
  ];

  return (
    <div className="chart">
      {chartData.map(({ amount, day, percent }) => (
        <div key={day} className="bar-grid">
          <div className="bar-container">
            <div
              className={`bar ${day === today && "today"}`}
              style={{ height: percent + "%" }}
            >
              <span>{`$${amount}`}</span>
            </div>
          </div>
          <span className="legend">{day}</span>
        </div>
      ))}
    </div>
  );
}

export default Chart;
