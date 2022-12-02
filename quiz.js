document.getElementById("grading").addEventListener("click", Grading);

document.getElementById(`Q1`);
document.getElementById(`Q2`);
document.getElementById(`Q3`);
document.getElementById(`Q4`);
document.getElementById(`Q5`);
document.getElementById(`Q6`);

function Grading() {
  alert("Click");
  let Q1G = document.getElementById(`Q1`);
  let Q2G = document.getElementById(`Q2`);
  let Q3G = document.getElementById(`Q3`);
  let Q4G = document.getElementById(`Q4`);
  let Q5G = document.getElementById(`Q5`);
  let Q6G = document.getElementById(`Q6`);
  let GPAG = (Q1G + Q2G + Q3G + Q4G + Q5G + Q6G) / 5;

  if (Q1G === "Parital Lobes" || Q1G === "The Parital Lobes") {
    alert("Ding");
  }
}
let GPAG = GPA;
document.getElementById("GPA").innerHTML = `Grade: ${GPA}`;
