import React from "react";

function Statistics() {
  return (
    <div>
      <section class="card">
        <header class="card-header">
          <div class="card-actions">
            <a
              href="#"
              class="card-action card-action-toggle"
              data-card-toggle=""
            ></a>
            <a
              href="#"
              class="card-action card-action-dismiss"
              data-card-dismiss=""
            ></a>
          </div>

          <h2 class="card-title">Khurasani Line Chart</h2>
          <p class="card-subtitle">
            A style of chart that is created by connecting a series of data
            points together with a line.
          </p>
        </header>
        <div class="card-body" style={{ display: " block" }}>
          <div
            class="chart chart-md"
            id="morrisLine"
            style={{ position: "relative" }}
          >
            <svg
              height="350"
              version="1.1"
              width="430"
              style={{
                overflow: "hidden",
                position: "relative",
                top: "-0.9375px",
              }}
            >
              <desc>Created with Raphaël 2.3.0</desc>
              <defs></defs>
              <text
                x="32.84765625"
                y="311"
                text-anchor="end"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: " end",
                  fontFamily: "sans-serif",
                  fontSize: " 12px",
                  fontWeight: " normal",
                }}
              >
                <tspan dy="4">0</tspan>
              </text>
              <path
                fill="none"
                stroke="#aaaaaa"
                d="M45.34765625,311H405"
                stroke-width="0.5"
              ></path>
              <text
                x="32.84765625"
                y="239.5"
                text-anchor="end"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: " end",
                  fontFamily: " sans-serif",
                  fontSize: " 12px",
                  fontWeight: " normal",
                }}
              >
                <tspan dy="4">25</tspan>
              </text>
              <path
                fill="none"
                stroke="#aaaaaa"
                d="M45.34765625,239.5H405"
                stroke-width="0.5"
              ></path>
              <text
                x="32.84765625"
                y="168"
                text-anchor="end"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: "end",
                  fontFamily: "sans-serif",
                  fontSize: " 12px",
                  fontWeight: "normal",
                }}
                font-weight="normal"
              >
                <tspan dy="4">50</tspan>
              </text>
              <path
                fill="none"
                stroke="#aaaaaa"
                d="M45.34765625,168H405"
                stroke-width="0.5"
              ></path>
              <text
                x="32.84765625"
                y="96.5"
                text-anchor="end"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: "end",
                  fontFamily: "sans-serif",
                  fontSize: " 12px",
                  fontWeight: "normal",
                }}
                font-weight="normal"
              >
                <tspan dy="4">75</tspan>
              </text>
              <path
                fill="none"
                stroke="#aaaaaa"
                d="M45.34765625,96.5H405"
                stroke-width="0.5"
              ></path>
              <text
                x="32.84765625"
                y="25"
                text-anchor="end"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: " end",
                  fontFamily: " sans-serif",
                  fontSize: " 12px",
                  fontWeight: " normal",
                }}
                font-weight="normal"
              >
                <tspan dy="4">100</tspan>
              </text>
              <path
                fill="none"
                stroke="#aaaaaa"
                d="M45.34765625,25H405"
                stroke-width="0.5"
              ></path>
              <text
                x="380.975039639989"
                y="323.5"
                text-anchor="middle"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: " middle",
                  fontFamily: "sans-serif",
                  fontSize: " 12px",
                  fontWeight: " normal",
                }}
                font-weight="normal"
                transform="matrix(1,0,0,1,0,7)"
              >
                <tspan dy="4">2020</tspan>
              </text>
              <text
                x="141.25057178545353"
                y="323.5"
                text-anchor="middle"
                font-family="sans-serif"
                font-size="12px"
                stroke="none"
                fill="#888888"
                style={{
                  textAnchor: "middle",
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  fontWeight: "normal",
                }}
                transform="matrix(1,0,0,1,0,7)"
              >
                <tspan dy="4">2010</tspan>
              </text>
              <path
                fill="none"
                stroke="#734ba9"
                d="M45.34765625,53.60000000000002C51.337485847953545,71.47500000000002,63.31714504386065,107.225,69.3069746418142,125.1C75.29680423976774,142.975,87.27646343567484,196.60000000000002,93.26629303362839,196.60000000000002C99.27253312363112,196.60000000000002,111.28501330363662,125.1,117.29125339363935,125.1C123.2810829915929,125.1,135.2607421875,196.60000000000002,141.25057178545353,196.60000000000002C147.2404013834071,196.60000000000002,159.22006057931418,142.975,165.20989017726774,125.1C171.1997197752213,107.225,183.1793789711284,53.60000000000002,189.16920856908195,53.60000000000002C243.12690642681144,53.60000000000002,351.0423021422705,125.1,405,125.1"
                stroke-width="3"
              ></path>
              <path
                fill="none"
                stroke="#0088cc"
                d="M45.34765625,25C51.337485847953545,42.875,63.31714504386065,78.625,69.3069746418142,96.5C75.29680423976774,114.375,87.27646343567484,168,93.26629303362839,168C99.27253312363112,168,111.28501330363662,96.5,117.29125339363935,96.5C123.2810829915929,96.5,135.2607421875,168,141.25057178545353,168C147.2404013834071,168,159.22006057931418,114.375,165.20989017726774,96.5C171.1997197752213,78.625,183.1793789711284,25,189.16920856908195,25C243.12690642681144,25,351.0423021422705,96.5,405,96.5"
                stroke-width="3"
              ></path>
              <circle
                cx="45.34765625"
                cy="53.60000000000002"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="69.3069746418142"
                cy="125.1"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="93.26629303362839"
                cy="196.60000000000002"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="117.29125339363935"
                cy="125.1"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="141.25057178545353"
                cy="196.60000000000002"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="165.20989017726774"
                cy="125.1"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="189.16920856908195"
                cy="53.60000000000002"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="405"
                cy="125.1"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="405"
                cy="53.60000000000002"
                r="4"
                fill="#734ba9"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="45.34765625"
                cy="25"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="69.3069746418142"
                cy="96.5"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="93.26629303362839"
                cy="168"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="117.29125339363935"
                cy="96.5"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="141.25057178545353"
                cy="168"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="165.20989017726774"
                cy="96.5"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="189.16920856908195"
                cy="25"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="405"
                cy="96.5"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
              <circle
                cx="405"
                cy="25"
                r="4"
                fill="#0088cc"
                stroke="#ffffff"
                stroke-width="1"
              ></circle>
            </svg>
            <div
              class="morris-hover morris-default-style"
              style={{ left: " 342.609px", top: " 35px", display: "none" }}
            >
              <div class="morris-hover-row-label">2021</div>
              <div class="morris-hover-point" style={{ color: "#0088cc" }}>
                Series A: 100
              </div>
              <div class="morris-hover-point" style={{ color: "#734ba9" }}>
                Series B: 90
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Statistics;
