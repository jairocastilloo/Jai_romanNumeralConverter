const convertBtn = document.getElementById("convert-btn");
const numberInput = document.getElementById("number");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
  if (numberInput.value === "") {
    if (output.classList.contains("bg-success")) {
      output.classList.remove("bg-success");
    }
    output.classList.add("bg-danger");

    output.innerText = "Please enter a valid number";
  } else if (numberInput.value < 1) {
    if (output.classList.contains("bg-success")) {
      output.classList.remove("bg-success");
    }
    output.classList.add("bg-danger");

    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numberInput.value >= 4000) {
    if (output.classList.contains("bg-success")) {
      output.classList.remove("bg-success");
    }
    output.classList.add("bg-danger");

    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    if (output.classList.contains("bg-danger")) {
      output.classList.remove("bg-danger");
    }
    output.classList.add("bg-success");
    output.innerText = convertNumber(parseInt(numberInput.value));
  }
});

const convertNumber = (input) => {
  const romanNumerals = [
    { value: 1000, numerals: "M" },
    { value: 900, numerals: "CM" },
    { value: 500, numerals: "D" },
    { value: 400, numerals: "CD" },
    { value: 100, numerals: "C" },
    { value: 90, numerals: "XC" },
    { value: 50, numerals: "L" },
    { value: 40, numerals: "XL" },
    { value: 10, numerals: "X" },
    { value: 9, numerals: "IX" },
    { value: 5, numerals: "V" },
    { value: 4, numerals: "IV" },
    { value: 1, numerals: "I" },
  ];
  let roman = "";
  for (let x = 0; x < romanNumerals.length; x++) {
    const { value, numerals } = romanNumerals[x];
    while (input >= value) {
      roman += numerals;
      input -= value;
    }
  }
  return roman;
};
