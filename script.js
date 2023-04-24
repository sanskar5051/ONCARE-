document.getElementById("name-question").style.display = "block";

function showagequestion() {
  document.getElementById("name-question").style.display = "none";
  document.getElementById("age-question").style.display = "block";
}
function showheightquestion() {
  document.getElementById("age-question").style.display = "none";
  document.getElementById("height-question").style.display = "block";
}
function showweightquestion() {
  document.getElementById("height-question").style.display = "none";
  document.getElementById("weight-question").style.display = "block";
}
function showpreexistingquestion() {
  document.getElementById("weight-question").style.display = "none";
  document.getElementById("pre-existing-question").style.display = "block";
}
function showconcernquestion() {
  document.getElementById("pre-existing-question").style.display = "none";
  document.getElementById("concern-question").style.display = "block";
}

// set of questions

function fq1() {
  document.getElementById("concern-question").style.display = "none";
  document.getElementById("qq1").style.display = "block";
}

function fq2() {
  document.getElementById("qq1").style.display = "none";
  document.getElementById("qq2").style.display = "block";
}
function fq3() {
  document.getElementById("qq2").style.display = "none";
  document.getElementById("qq3").style.display = "block";
}
function fq4() {
  document.getElementById("qq3").style.display = "none";
  document.getElementById("qq4").style.display = "block";
}
function fq5() {
  document.getElementById("qq4").style.display = "none";
  document.getElementById("qq5").style.display = "block";
}
function fq6() {
  document.getElementById("qq5").style.display = "none";
  document.getElementById("qq6").style.display = "block";
}
function fq7() {
  document.getElementById("qq6").style.display = "none";
  document.getElementById("qq7").style.display = "block";
}
function fq8() {
  document.getElementById("qq7").style.display = "none";
  document.getElementById("qq8").style.display = "block";
}
function fq9() {
  document.getElementById("qq8").style.display = "none";
  document.getElementById("qq9").style.display = "block";
}
function fq10() {
  document.getElementById("qq9").style.display = "none";
  document.getElementById("qq10").style.display = "block";
}
function fq11() {
  document.getElementById("qq10").style.display = "none";
  document.getElementById("qq11").style.display = "block";
}
function fq12() {
  document.getElementById("qq11").style.display = "none";
  document.getElementById("qq12").style.display = "block";
}
function fq13() {
  document.getElementById("qq12").style.display = "none";
  document.getElementById("qq13").style.display = "block";
}
function fq14() {
  document.getElementById("qq13").style.display = "none";
  document.getElementById("qq14").style.display = "block";
}
function fq15() {
  document.getElementById("qq14").style.display = "none";
  document.getElementById("qq15").style.display = "block";
}
function fq16() {
  document.getElementById("qq15").style.display = "none";
  document.getElementById("qq16").style.display = "block";
}
function fq17() {
  document.getElementById("qq16").style.display = "none";
  document.getElementById("qq17").style.display = "block";
}
function fq18() {
  document.getElementById("qq17").style.display = "none";
  document.getElementById("qq18").style.display = "block";
}
function fq19() {
  document.getElementById("qq18").style.display = "none";
  document.getElementById("qq19").style.display = "block";
}
function fq20() {
  document.getElementById("qq19").style.display = "none";
  document.getElementById("qq20").style.display = "block";
}
function fq21() {
  document.getElementById("qq20").style.display = "none";
  document.getElementById("qq21").style.display = "block";
}
function fq22() {
  document.getElementById("qq21").style.display = "none";
  document.getElementById("qq22").style.display = "block";
}
function fq23() {
  document.getElementById("qq22").style.display = "none";
  document.getElementById("qq23").style.display = "block";
}
function fq24() {
  document.getElementById("qq23").style.display = "none";
  document.getElementById("qq24").style.display = "block";
}
function fq25() {
  document.getElementById("qq24").style.display = "none";
  document.getElementById("qq25").style.display = "block";
}
function fq26() {
  document.getElementById("qq25").style.display = "none";
  document.getElementById("qq26").style.display = "block";
}
function fq27() {
  document.getElementById("qq26").style.display = "none";
  document.getElementById("qq27").style.display = "block";
}
function fq28() {
  document.getElementById("qq27").style.display = "none";
  document.getElementById("qq28").style.display = "block";
}
function fq29() {
  document.getElementById("qq28").style.display = "none";
  document.getElementById("qq29").style.display = "block";
}
function fq30() {
  document.getElementById("qq29").style.display = "none";
  document.getElementById("qq30").style.display = "block";
}
function fq31() {
  document.getElementById("qq30").style.display = "none";
  document.getElementById("qq31").style.display = "block";
}
function fq32() {
  document.getElementById("qq31").style.display = "none";
  document.getElementById("qq32").style.display = "block";
}
function fq33() {
  document.getElementById("qq32").style.display = "none";
  document.getElementById("qq33").style.display = "block";
}
function fq34() {
  document.getElementById("qq33").style.display = "none";
  document.getElementById("qq34").style.display = "block";
}
function thankyou() {
  document.getElementById("qq34").style.display = "none";
  document.getElementById("tq").style.display = "block";
}
// output

function output() {
  document.getElementById("tq").style.display = "none";
  let smoking = document.querySelector('input[name="smoking"]:checked').value;

  if (smoking === "yes") {
    document.getElementById("smoking").style.display = "block";
  }
  let ex = document.querySelector('input[name="exercise"]:checked').value;
  if (ex === "no") {
    document.getElementById("exercise").style.display = "block";
  }
  let mc = document.querySelector(
    'input[name="medical_condition"]:checked'
  ).value;
  if (mc === "yes") {
    document.getElementById("medical-condition").style.display = "block";
  }
  document.getElementById("caution").style.display = "block";
  let q1 = document.querySelector('input[name="q1"]:checked').value;
  let q2 = document.querySelector('input[name="q2"]:checked').value;
  let q3 = document.querySelector('input[name="q3"]:checked').value;
  let q4 = document.querySelector('input[name="q4"]:checked').value;
  let q5 = document.querySelector('input[name="q5"]:checked').value;
  if (q1 === "yes") {
    if (q2 === "yes") {
      if (q3 === "yes") {
        if (q4 === "yes") {
          if (q5 === "yes") {
            document.getElementById("conj").style.display = "block";
          }
        }
      }
    }
  }
  let q6 = document.querySelector('input[name="q6"]:checked').value;
  let q7 = document.querySelector('input[name="q7"]:checked').value;
  let q8 = document.querySelector('input[name="q8"]:checked').value;
  let q9 = document.querySelector('input[name="q9"]:checked').value;
  if (q6 === "yes") {
    if (q7 === "yes") {
      if (q8 === "yes") {
        if (q9 === "yes") {
          document.getElementById("cnf").style.display = "block";
        }
      }
    }
  }
  let q10 = document.querySelector('input[name="q10"]:checked').value;
  let q11 = document.querySelector('input[name="q11"]:checked').value;
  let q12 = document.querySelector('input[name="q12"]:checked').value;
  let q13 = document.querySelector('input[name="q13"]:checked').value;
  if (q10 === "yes") {
    if (q11 === "yes") {
      if (q12 === "yes") {
        if (q13 === "yes") {
          document.getElementById("alergies").style.display = "block";
        }
      }
    }
  }
  let q14 = document.querySelector('input[name="q14"]:checked').value;
  let q15 = document.querySelector('input[name="q15"]:checked').value;
  let q16 = document.querySelector('input[name="q16"]:checked').value;
  if (q14 === "yes") {
    if (q15 === "yes") {
      if (q16 === "yes") {
        document.getElementById("diarrhea").style.display = "block";
      }
    }
  }
  let q17 = document.querySelector('input[name="q17"]:checked').value;
  let q18 = document.querySelector('input[name="q18"]:checked').value;
  let q19 = document.querySelector('input[name="q19"]:checked').value;
  if (q17 === "yes") {
    if (q18 === "yes") {
      if (q19 === "yes") {
        document.getElementById("migrain").style.display = "block";
      }
    }
  }
  let q20 = document.querySelector('input[name="q20"]:checked').value;
  let q21 = document.querySelector('input[name="q21"]:checked').value;
  let q22 = document.querySelector('input[name="q22"]:checked').value;
  if (q20 === "yes") {
    if (q21 === "yes") {
      if (q22 === "yes") {
        document.getElementById("sa").style.display = "block";
      }
    }
  }
  let q23 = document.querySelector('input[name="q23"]:checked').value;
  let q24 = document.querySelector('input[name="q24"]:checked').value;
  let q25 = document.querySelector('input[name="q25"]:checked').value;
  if (q23 === "yes") {
    if (q24 === "yes") {
      if (q25 === "yes") {
        document.getElementById("diabetes").style.display = "block";
      }
    }
  }
  let q26 = document.querySelector('input[name="q26"]:checked').value;
  let q27 = document.querySelector('input[name="q27"]:checked').value;
  let q28 = document.querySelector('input[name="q28"]:checked').value;
  let q29 = document.querySelector('input[name="q29"]:checked').value;
  let q30 = document.querySelector('input[name="q30"]:checked').value;
  if (q26 === "yes") {
    if (q27 === "yes") {
      if (q28 === "yes") {
        if (q29 === "yes") {
          if (q30 === "yes") {
            document.getElementById("anxiety").style.display = "block";
          }
        }
      }
    }
  }
  let q31 = document.querySelector('input[name="q31"]:checked').value;
  let q32 = document.querySelector('input[name="q32"]:checked').value;
  let q33 = document.querySelector('input[name="q33"]:checked').value;
  let q34 = document.querySelector('input[name="q34"]:checked').value;
  if (q31 === "yes") {
    if (q32 === "yes") {
      if (q33 === "yes") {
        if (q34 === "yes") {
          document.getElementById("asthama").style.display = "block";
        }
      }
    }
  }
}
/*

      function output() {
        let mc = document.querySelector(
          'input[name="medical-conditions"]:checked'
        ).value;
        let smoking = document.querySelector(
          'input[name="smoking"]:checked'
        ).value;
        let ex = document.querySelector('input[name="exercise"]:checked').value;

        let q1 = document.querySelector('input[name="q1"]:checked').value;
        let q2 = document.querySelector('input[name="q2"]:checked').value;
        let q3 = document.querySelector('input[name="q3"]:checked').value;
        let q4 = document.querySelector('input[name="q4"]:checked').value;
        let q5 = document.querySelector('input[name="q5"]:checked').value;
        let q6 = document.querySelector('input[name="q6"]:checked').value;
        let q7 = document.querySelector('input[name="q7"]:checked').value;
        let q8 = document.querySelector('input[name="q8"]:checked').value;
        let q9 = document.querySelector('input[name="q9"]:checked').value;
        let q10 = document.querySelector('input[name="q10"]:checked').value;
        let q11 = document.querySelector('input[name="q11"]:checked').value;
        let q12 = document.querySelector('input[name="q12"]:checked').value;
        let q13 = document.querySelector('input[name="q13"]:checked').value;
        let q14 = document.querySelector('input[name="q14"]:checked').value;
        let q15 = document.querySelector('input[name="q15"]:checked').value;
        let q16 = document.querySelector('input[name="q16"]:checked').value;
        let q17 = document.querySelector('input[name="q17"]:checked').value;
        let q18 = document.querySelector('input[name="q18"]:checked').value;
        let q19 = document.querySelector('input[name="q19"]:checked').value;
        let q20 = document.querySelector('input[name="q20"]:checked').value;
        let q21 = document.querySelector('input[name="q21"]:checked').value;
        let q22 = document.querySelector('input[name="q22"]:checked').value;
        let q23 = document.querySelector('input[name="q23"]:checked').value;
        let q24 = document.querySelector('input[name="q24"]:checked').value;
        let q25 = document.querySelector('input[name="q25"]:checked').value;
        let q26 = document.querySelector('input[name="q26"]:checked').value;
        let q27 = document.querySelector('input[name="q27"]:checked').value;
        let q28 = document.querySelector('input[name="q28"]:checked').value;
        let q29 = document.querySelector('input[name="q29"]:checked').value;
        let q30 = document.querySelector('input[name="q30"]:checked').value;
        let q31 = document.querySelector('input[name="q31"]:checked').value;
        let q32 = document.querySelector('input[name="q32"]:checked').value;
        let q33 = document.querySelector('input[name="q33"]:checked').value;
        let q34 = document.querySelector('input[name="q34"]:checked').value;
        document.getElementById("tq").style.display = "none";
        document.getElementById("smoking").style.display = "block";
        if (smoking === "yes") {
          smokingyes();
        }
        if (
          q1 === "yes" &&
          q2 === "yes" &&
          q3 === "yes" &&
          q4 === "yes" &&
          q5 === "yes"
        ) {
          con();
        } else if (
          q6 === "yes" &&
          q7 === "yes" &&
          q8 === "yes" &&
          q9 === "yes"
        ) {
          cnf();
        } else if (
          q10 === "yes" &&
          q11 === "yes" &&
          q12 === "yes" &&
          q13 === "yes"
        ) {
          aler();
        } else if (q14 === "yes" && q15 === "yes" && q16 === "yes") {
          diar();
        } else if (q17 === "yes" && q18 === "yes" && q19 === "yes") {
          mig();
        } else if (q20 === "yes" && q21 === "yes" && q22 === "yes") {
          stom();
        } else if (q23 === "yes" && q24 === "yes" && q25 === "yes") {
          diab();
        } else if (
          q26 === "yes" &&
          q27 === "yes" &&
          q28 === "yes" &&
          q29 === "yes" &&
          q30 === "yes"
        ) {
          anx();
        } else if (
          q31 === "yes" &&
          q32 === "yes" &&
          q33 === "yes" &&
          q34 === "yes"
        ) {
          asth();
        }
      }
      */
