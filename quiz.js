document.getElementById("Grading").addEventListener("click", Grading);
let T = 0;

function Grading() {
  let Q1G = document.getElementById("Q1").value;
  let Q2G = document.getElementById("Q2").value;
  let Q3G = document.getElementById("Q3").value;
  let Q4G = document.getElementById("Q4").value;
  let Q5G = document.getElementById("Q5").value;
  let Q6G = document.getElementById("Q6").value;

  if (Q1G === "Parital Lobes" || Q1G === "The Parital Lobes") {
    document.getElementById("Q1R").innerHTML = "Correct";
    console.log((T += 1));
  } else {
    document.getElementById("Q1R").innerHTML = "Incorrect";
  }
  if (Q2G === "Nervous System" || Q2G === "The Nervous System") {
    document.getElementById("Q2R").innerHTML = "Correct";
    console.log((T += 1));
  } else {
    document.getElementById("Q2R").innerHTML = "Incorrect";
  }
  if (Q3G === "Optical Nerve" || Q3G === "The Optical Nerve") {
    document.getElementById("Q3R").innerHTML = "Correct";
    console.log((T += 1));
  } else {
    document.getElementById("Q3R").innerHTML = "Incorrect";
  }
  if (Q4G === "Hippocampus" || Q4G === "The Hippocampus") {
    document.getElementById("Q4R").innerHTML = "Correct";
    console.log((T += 1));
  } else {
    document.getElementById("Q4R").innerHTML = "Incorrect";
  }
  if (Q5G === "Pre-Frontal Lobe" || Q5G === "The Pre-Frontal Lobe") {
    document.getElementById("Q5R").innerHTML = "Correct";
    console.log((T += 1));
  } else {
    document.getElementById("Q5R").innerHTML = "Incorrect";
  }
  if (Q6G === "Heart" || Q6G === "The Heart") {
    document.getElementById("Q6R").innerHTML = "Correct";
    console.log((T += 1));
  } else {
    document.getElementById("Q6R").innerHTML = "Incorrect";
  }
  if (T > 6) T = 6;
  let FT = (T / 6) * 100;
  document.getElementById("GPA").innerHTML = `Final Grade: ${T}/6 (${FT}%)`;

  if (T === 0) {
    document.getElementById("R").innerHTML = "This is a massive skill issue.";
  } else if (T === 1) {
    document.getElementById("R").innerHTML = "This is a big skill issue.";
  } else if (T === 2) {
    document.getElementById("R").innerHTML = "This is a medium skill issue.";
  } else if (T === 3) {
    document.getElementById("R").innerHTML = "This is a small skill issue.";
  } else if (T === 4) {
    document.getElementById("R").innerHTML = "You barely passed.";
  } else if (T === 5) {
    document.getElementById("R").innerHTML =
      "1 right answer short of a gold star.";
  } else if (T === 6) {
    document.getElementById("R").innerHTML =
      "You got an A! It stands for average.";
  } else {
    document.getElementById("R").innerHTML =
      "STOP BREAKING MY CODE! JUST PRESS THE BUTTON ONCE PER ATTEMPT!";
  }
}
//Need 6 if statments
