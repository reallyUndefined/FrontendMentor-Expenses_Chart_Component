import "./ChartBody.styles.scss";

function ChartBody() {
  return (
    <div className="chart-body">
      <h2>Spending - Last 7 days</h2>
      <div className="total">
        <div className="">
          <span>Total this month</span>
          <h2>$478.33</h2>
        </div>
        <div className="">
          <span className="percent">+2.4%</span>
          <span>from last month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBody;
