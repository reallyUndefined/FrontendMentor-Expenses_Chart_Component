import { ReactComponent as Logo } from "../../logo.svg";
import "./ChartHeader.styles.scss";

function ChartHeader() {
  return (
    <div className="chart-header">
      <div>
        <span>My balance</span>
        <h1>$921.48</h1>
      </div>
      <Logo />
    </div>
  );
}

export default ChartHeader;
