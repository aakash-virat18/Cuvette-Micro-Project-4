let expression = "";

document.querySelector(".zero").addEventListener("click", (e) => {
//   if (expression.length > 0) {
    expression += "0";
    document.querySelector(".display").innerHTML = expression;
//   }
});

document.querySelector(".one").addEventListener("click", (e) => {
  expression += "1";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".two").addEventListener("click", (e) => {
  expression += "2";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".three").addEventListener("click", (e) => {
  expression += "3";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".four").addEventListener("click", (e) => {
  expression += "4";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".five").addEventListener("click", (e) => {
  expression += "5";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".six").addEventListener("click", (e) => {
  expression += "6";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".seven").addEventListener("click", (e) => {
  expression += "7";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".eight").addEventListener("click", (e) => {
  expression += "8";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".nine").addEventListener("click", (e) => {
  expression += "9";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".point").addEventListener("click", (e) => {
  const check = checkOperatorAtLast();
  const check2 = checkMultiplePoint();
  if (!check && !check2) {
    expression += ".";
    document.querySelector(".display").innerHTML = expression;
  } else {
    alert("Please Enter Valid Expression");
  }
});

document.querySelector(".plus").addEventListener("click", (e) => {
  const check = checkOperatorAtLast();
  if (!check) {
    expression += "+";
    document.querySelector(".display").innerHTML = expression;
  } else {
    alert("Please Enter Valid Expression");
  }
});

document.querySelector(".minus").addEventListener("click", (e) => {
  const check = checkOperatorAtLast();
  if (!check) {
    expression += "-";
    document.querySelector(".display").innerHTML = expression;
  } else {
    alert("Please Enter Valid Expression");
  }
});

document.querySelector(".multiply").addEventListener("click", (e) => {
  console.log(expression);
  const check = checkOperatorAtLast();
  if (!check) {
    expression += "*";
    document.querySelector(".display").innerHTML = expression;
  } else {
    alert("Please Enter Valid Expression");
  }
});

document.querySelector(".divide").addEventListener("click", (e) => {
  const check = checkOperatorAtLast();
  if (!check) {
    expression += "/";
    document.querySelector(".display").innerHTML = expression;
  } else {
    alert("Please Enter Valid Expression");
  }
});

document.querySelector(".delete").addEventListener("click", (e) => {
  if (expression.length > 0) {
    expression = expression.substring(0, expression.length - 1);
    document.querySelector(".display").innerHTML = expression;
  }
});

document.querySelector(".reset").addEventListener("click", (e) => {
  expression = "";
  document.querySelector(".display").innerHTML = expression;
});

document.querySelector(".equal").addEventListener("click", (e) => {
  const check = checkOperatorAtLast();
  if (!check) {
    expression = eval(expression);
    if (!Number.isInteger(expression)) {
      expression = expression.toFixed(2);
    }
    document.querySelector(".display").innerHTML = expression;
    expression = expression.toString();
  } else {
    alert("Please Enter Valid Expression.");
  }
});

const checkOperatorAtLast = () => {
  let len = expression.length;
  if (
    len == 0 ||
    expression.charAt(len - 1) === "+" ||
    expression.charAt(len - 1) === "-" ||
    expression.charAt(len - 1) === "*" ||
    expression.charAt(len - 1) === "/" ||
    expression.charAt(len - 1) === "."
  ) {
    return true;
  }
  return false;
};

const checkMultiplePoint = () => {
  let len = expression.length;
  while (
    len >= 0 &&
    (expression.charAt(len - 1) !== "+" ||
    expression.charAt(len - 1) !== "-" ||
    expression.charAt(len - 1) !== "*" ||
    expression.charAt(len - 1) !== "/" ||
    expression.charAt(len - 1) !== ".")
  ) {
    len--;
    if(expression.charAt(len-1)===".")
    {
        return true;
    }
    else
    {
        return false;
    }
  }
};
