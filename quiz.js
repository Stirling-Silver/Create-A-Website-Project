document.getElementById("Gbtn").addEventListener("click", Grading);

document.getElementById(`Q1`);
document.getElementById(`Q2`);
document.getElementById(`Q3`);
document.getElementById(`Q4`);
document.getElementById(`Q5`);
document.getElementById(`Q6`);

function Grading() {
  let Q1G = document.getElementById(`Q1`).value;
  let Q2G = document.getElementById(`Q2`).value;
  let Q3G = document.getElementById(`Q3`).value;
  let Q4G = document.getElementById(`Q4`).value;
  let Q5G = document.getElementById(`Q5`).value;
  let Q6G = document.getElementById(`Q6`).value;
  if (Q1G === "Parital Lobes" || Q1G === "The Parital Lobes") {
    console.log;
    GPAm++;
  } else {
    GPAm + 0;
  }
  if (Q2G === "" || Q2G === "") {
    console.log;
    GPAG++;
  } else {
    GPAG = 0;
  }
  if (Q3G === "" || Q3G === "") {
    console.log;
    GPAG++;
  } else {
    GPAG + 0;
  }
  if (Q4G === "Parital Lobes" || Q4G === "The Parital Lobes") {
    console.log;
    GPAG++;
  } else {
    GPAG + 0;
  }
  if (Q5G === "Parital Lobes" || Q5G === "The Parital Lobes") {
    console.log;
    GPAG++;
  } else {
    GPAG + 0;
  }
  if (Q6G === "Parital Lobes" || Q6G === "The Parital Lobes") {
    alert(GPAG);
    GPAG++;
  } else {
    GPAG + 0;
  }
}
alert(GPAG);
document.getElementById("GPA").innerHTML = `Grade: ${GPAG}`;
