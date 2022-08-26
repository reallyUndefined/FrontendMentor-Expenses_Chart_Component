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

  return (
    <div className="chart">
      {chartData.map(({ amount, day, percent }) => (
        <div key={day} className="bar-grid">
          <div className="bar-container">
            <div
              className="bar"
              style={{
                height: percent + "%",
                backgroundColor:
                  amount === maxAmt
                    ? "var(--color-cyan)"
                    : "var(--color-soft-red)",
              }}
            ></div>
          </div>
          <span className="legend">{day}</span>
        </div>
      ))}
    </div>
  );
}

export default Chart;
