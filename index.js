document.body.addEventListener("keydown", function (event) {
  let val = event.key;
  val =
    parseInt(val) || parseInt(val) === 0
      ? parseInt(val)
      : val === "/"
      ? "/"
      : val === "*"
      ? "*"
      : val === "+"
      ? "+"
      : val === "-"
      ? "-"
      : val === "c"
      ? "c"
      : val === "Enter" || val === "="
      ? "="
      : null;
  if (typeof val === "number") {
    if (calc_screen.innerText === current_op) calc_screen.innerText = "";
    if (current_op === "=") ClearScr();
    if (current_op) {
      val2 += val;
      calc_screen.innerText = val2;
    } else {
      val1 += val;
      calc_screen.innerText = val1;
    }
  }
  if (typeof val === "string") {
    if (val === "=") {
      equalOp();
    } else if (val === "c") {
      ClearScr();
    } else {
      if (val2) equalOp();
      current_op = val;
      calc_screen.innerText = current_op;
    }
  }
});

const calc_screen = document.getElementById("calc-screen");
const err_div = document.getElementById("err");
let val1 = "",
  val2 = "",
  current_op = null;
const num_btn = document.querySelectorAll(".num-btn");
const op_btn = document.querySelectorAll(".op-btn");

const ClearScr = () => {
  (val1 = ""), (val2 = "");
  calc_screen.innerText = "";
  current_op = null;
};
const getNum = (e) => {
  if (calc_screen.innerText === current_op) calc_screen.innerText = "";
  if (current_op === "=") ClearScr();
  if (current_op) {
    val2 += e.target.id;
    calc_screen.innerText = val2;
  } else {
    val1 += e.target.id;
    calc_screen.innerText = val1;
  }
};
const equalOp = () => {
  if (current_op && current_op != "=" && (!val1 || !val2)) {
    ClearScr();
    alert("Error, Please insert a value before/after operation");
    return;
  }
  val1 = parseInt(val1);
  val2 = parseInt(val2);
  val1 =
    current_op === "/"
      ? val1 / val2
      : current_op === "*"
      ? val1 * val2
      : current_op === "-"
      ? val1 - val2
      : current_op === "+"
      ? val1 + val2
      : val1;
  val2 = "";
  current_op = "=";
  calc_screen.innerText = val1;
};
const getOp = (e) => {
  if (e.target.id === "=") {
    equalOp();
  } else if (e.target.id === "c") {
    ClearScr();
  } else {
    if (val2) equalOp();
    current_op = e.target.id;
    calc_screen.innerText = current_op;
  }
};

num_btn.forEach((btn) => btn.addEventListener("click", getNum));

op_btn.forEach((btn) => btn.addEventListener("click", getOp));
