document.getElementById("Grading").addEventListener("click", Grading);

function Grading() {
  let Q1G = document.getElementById("Q1").value;
  if (Q1G === "Parital Lobes" || Q1G === "The Parital Lobes") {
    document.getElementById("Q1R").innerHTML = "Correct";
  } else {
    document.getElementById(Q1R).innerHTML = "Incorrect";
  }
  if (Q2G === "Nervous System" || Q2G === "The Nervous System") {
    document.getElementById("Q2R").innerHTML = "Correct";
  } else {
    document.getElementById("Q2R").innerHTML = "Incorrect";
  }
  if (Q3G === "Optical Nerve" || Q3G === "The Optical Nerve") {
    document.getElementById("Q3R").innerHTML = "Correct";
  } else {
    document.getElementById("Q3R").innerHTML = "Incorrect";
  }
  if (Q4G === "Hippocampus" || Q4G === "The Hippocampus") {
    document.getElementById("Q4R").innerHTML = "Correct";
  } else {
    document.getElementById("Q4R").innerHTML = "Incorrect";
  }
  if (Q5G === "Pre-Frontal Lobe" || Q5G === "The Pre-Frontal Lobe") {
    document.getElementById("Q5R").innerHTML = "Correct";
  } else {
    document.getElementById("Q5R").innerHTML = "Inorrect";
  }
  if (Q6G === "Heart" || Q6G === "The Heart") {
    document.getElementById("Q6R").innerHTML = "Correct";
  } else {
    document.getElementById("Q6R").innerHTML = "incorrect";
  }
}
document.getElementById("GPA").innerHTML = `Final Grade: ${Gbtn}%`;
document.getElementById("GPA").addEventListener("click", Grading);
