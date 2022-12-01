document.getElementById("btn").addEventListener("click", grading);

function grading() {
  alert("Click");
  let Q1G = Q1;
  let Q2G = Q2;
  let Q3G = Q3;
  let Q4G = Q4;
  let Q5G = Q5;
  let Q6G = Q6;
  let GPAG = (Q1G + Q2G + Q3G + Q4G + Q5G + Q6G) / 5;
}

let GPAG = GPA;
document.getElementById("GPA").innerHTML = `Grade: ${GPA}`;
