import React from "react";

function StatsDate({ Month }) {
  return (
    <div
      class="flot-x-axis flot-x1-axis xAxis x1Axis"
      style={{ position: "absolute", inset: "0px;" }}
    >
      <div
        class="flot-tick-label tickLabel"
        style={{
          position: "absolute",
          maxWidth: "34px",
          top: "180px",
          left: " 27px",
          textAlign: "center",
        }}
      >
        Jan
      </div>
    </div>
  );
}

export default StatsDate;
