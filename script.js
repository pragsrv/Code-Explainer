function explainCode() {
  const code = document.getElementById("codeInput").value;
  const lines = code.split("\n");
  let output = "";

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (trimmed.startsWith("if")) {
      output += `Line ${index + 1}: This is an if condition that checks a certain logic.\n`;
    } else if (trimmed.startsWith("for")) {
      output += `Line ${index + 1}: This is a for loop, used for repeating a block of code.\n`;
    } else if (trimmed.startsWith("function")) {
      output += `Line ${index + 1}: This defines a function — a reusable block of code.\n`;
    } else if (trimmed.includes("console.log")) {
      output += `Line ${index + 1}: This prints something to the console.\n`;
    } else if (trimmed.includes("=") && !trimmed.includes("==")) {
      output += `Line ${index + 1}: This assigns a value to a variable.\n`;
    } else {
      output += `Line ${index + 1}: [No explanation available]\n`;
    }
  });

  document.getElementById("output").innerText = output;
}
