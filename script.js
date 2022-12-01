/* --------------- Spin Wheel  --------------------- */
const spinWheel = document.getElementById("spinWheel");
const spinBtn = document.getElementById("spin_btn");
const text = document.getElementById("text");
/* --------------- Minimum And Maximum Angle For A value  --------------------- */
const spinValues = [
  {
    minDegree: 61,
    maxDegree: 90,
    value: `<ul>
              <li>eutanasia por parte de tus compañeras, que te veía sufrir demasiado programando</li>
              <li><h3>Natalia</h3></li>
              <li><img src="/avatares/natalia.png"/></li>
            </ul> `,
  },
  {
    minDegree: 31,
    maxDegree: 60,
    value: `<ul>
              <li>Tania te ha quitado la carne de la dieta y no te llegan nutrientes al cerebro</li>
              <li><h3>Georgette</h3></li>
              <li><img src="/avatares/georgette.png"/></li>
              </ul> `,
  },
  {
    minDegree: 0,
    maxDegree: 30,
    value: `<ul>
              <li>latigazo de Manu</li>
              <li><h3>Ana G</h3></li>
              <li><img src="/avatares/anag.png"/></li>
            </ul>`,
  },
  {
    minDegree: 331,
    maxDegree: 360,
    value: `<ul>
              <li>del susto por un borrado sorpresivo en github</li>
              <li><h3>Adria</h3></li>
              <li><img src="/avatares/adria.png"/></li>
            </ul>`,
  },
  {
    minDegree: 301,
    maxDegree: 330,
    value: `<ul>
              <li>sobredosis de información durante una píldora</li>
              <li><h3>Ana V</h3></li>
              <li><img src="/avatares/anav.png"/></li>
            </ul>`,
  },
  {
    minDegree: 271,
    maxDegree: 300,
    value: `<ul>
              <li>envenenamiento por mirada de Gabi teacher</li>
              <li><h3>Arancha</h3></li>
              <li><img src="/avatares/arancha.png"/></li>
            </ul>`,
  },
  {
    minDegree: 241,
    maxDegree: 270,
    value: `<ul>
              <li>desnucamiento durante una pausa activa</li>
              <li><h3>Gabriela</h3></li>
              <li><img src= "/avatares/gabriela.png"/></li>
            </ul>`,
  },
  {
    minDegree: 211,
    maxDegree: 240,
    value: `<ul>
              <li>ataque de ira homicida ante problema sin solución</li>
              <li><h3>Irene</h3></li>
              <li><img src= "/avatares/irene.png"/></li>
            </ul>`,
  },
  {
    minDegree: 181,
    maxDegree: 210,
    value: `<ul>
              <li>electrocución intentando arreglar el ordenador Nuevo</li>
              <li><h3>Iris</h3></li>
              <li><img src="/avatares/iris.png"/></li>
            </ul>`,
  },
  {
    minDegree: 151,
    maxDegree: 180,
    value: `<ul>
              <li>atragantada por comer rápido durante la pausa</li>
              <li><h3>Jéssica</h3></li>
              <li><img src="/avatares/jessica.png"/></li>
            </ul>`,
  },
  {
    minDegree: 121,
    maxDegree: 150,
    value: `<ul>
              <li>ataque al corazón por probar algo en código y que funcione al fin</li>
              <li><h3>Mariela</h3></li>
              <li><img src="/avatares/mariela.png"/></li>
            </ul>`,
  },
  {
    minDegree: 91,
    maxDegree: 120,
    value: `<ul>
              <li>golpes contra el teclado</li>
              <li><h3>Tania</h3></li>
              <li><img src="/avatares/tania.png"/></li>
            </ul>`,
  },
];
/* --------------- Size Of Each Piece  --------------------- */
const size = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
/* --------------- Background Colors  --------------------- */
let spinColors = [
  "#0a6d4c",
  "#912d45",
  "#1F312E",
  "#481117",
  "#0e0004",
  "1e4c3d",
  "#2e282b",
  "#1e4c3d",
  "#38251C",
  "#050600",
  "#6e292d",
  "#050600",
];
/* --------------- Chart --------------------- */
/* --------------- Guide : https://chartjs-plugin-datalabels.netlify.app/guide/getting-started.html --------------------- */
let spinChart = new Chart(spinWheel, {
  plugins: [ChartDataLabels],
  type: "pie",
  data: {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    datasets: [
      {
        backgroundColor: spinColors,
        data: size,
      },
    ],
  },
  options: {
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      tooltip: false,
      legend: {
        display: false,
      },
      datalabels: {
        rotation: 180,
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 15 },
      },
    },
  },
});
/* --------------- Display Value Based On The Angle --------------------- */
const generateValue = (angleValue) => {
  for (let i of spinValues) {
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      text.innerHTML = `<p>Muerte por ${i.value} ! </p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};
/* --------------- Spinning Code --------------------- */
let count = 0;
let resultValue = 101;
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  text.innerHTML = `<p>Best Of Dead!</p>`;
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  let rotationInterval = window.setInterval(() => {
    spinChart.options.rotation = spinChart.options.rotation + resultValue;
    spinChart.update();
    if (spinChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      spinChart.options.rotation = 0;
    } else if (count > 15 && spinChart.options.rotation == randomDegree) {
      generateValue(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});
/* --------------- End Spin Wheel  --------------------- */
