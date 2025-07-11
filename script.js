const keywordExplanations = {
  "if": "Conditional statement that executes code if a condition is true",
  "else": "Alternative code block when the if condition is false",
  "for": "Loop that repeats code a specific number of times",
  "while": "Loop that continues while a condition is true",
  "function": "Declares a reusable block of code with optional parameters",
  "return": "Exits a function and optionally returns a value",
  "var": "Declares a variable with function scope",
  "let": "Declares a variable with block scope",
  "const": "Declares a constant variable that cannot be reassigned",
  "console.log": "Prints output to the browser's developer console",
  "document": "Represents the HTML document in the browser",
  "addEventListener": "Attaches an event handler to an element",
  "getElementById": "Finds an HTML element by its ID attribute",
  "querySelector": "Finds the first element matching a CSS selector",
  "parseInt": "Converts a string to an integer number",
  "parseFloat": "Converts a string to a floating-point number",
  "Array": "Built-in object for creating and working with arrays",
  "Object": "Built-in object for creating and working with objects",
  "Math": "Built-in object containing mathematical functions",
  "Date": "Built-in object for working with dates and times",
  "JSON": "Built-in object for parsing and stringifying JSON data",
  "setTimeout": "Executes a function after a specified delay",
  "setInterval": "Repeatedly executes a function at specified intervals",
  "try": "Begins a block of code to test for errors",
  "catch": "Handles errors that occur in a try block",
  "throw": "Creates a custom error",
  "async": "Declares an asynchronous function",
  "await": "Pauses execution until a promise resolves",
  "Promise": "Object representing eventual completion of an async operation",
  "class": "Declares a class (template for creating objects)",
  "extends": "Creates a class that inherits from another class",
  "import": "Imports functions, objects, or primitives from another module",
  "export": "Exports functions, objects, or primitives from a module",
  "switch": "Compares a value against multiple cases",
  "case": "Defines a case in a switch statement",
  "break": "Exits a loop or switch statement",
  "continue": "Skips to the next iteration of a loop",
  "typeof": "Returns the type of a variable or expression",
  "instanceof": "Tests if an object is an instance of a specific class",
  "new": "Creates a new instance of an object or class",
  "this": "Refers to the current object context",
  "null": "Represents intentional absence of any object value",
  "undefined": "Value assigned to variables that have been declared but not assigned",
  "true": "Boolean value representing logical truth",
  "false": "Boolean value representing logical falsehood"
};

function highlightAndExplain(line) {
  let explained = line;
  
  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = Object.keys(keywordExplanations).sort((a, b) => b.length - a.length);
  
  for (let keyword of sortedKeywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    if (regex.test(line)) {
      const tooltip = `<span class="keyword">${keyword}<span class="tooltip">${keywordExplanations[keyword]}</span></span>`;
      explained = explained.replace(regex, tooltip);
    }
  }
  
  return explained;
}

function explainCode() {
  const codeInput = document.getElementById("codeInput");
  const code = codeInput.value;
  const outputDiv = document.getElementById("output");
  const clearBtn = document.getElementById("clearBtn");
  const statsDiv = document.getElementById("stats");
  
  // Show/hide clear button
  if (code.trim()) {
    clearBtn.classList.add("visible");
  } else {
    clearBtn.classList.remove("visible");
  }
  
  if (!code.trim()) {
    outputDiv.innerHTML = '<div class="empty-state">Start typing some JavaScript code above to see the explanation here!</div>';
    statsDiv.style.display = 'none';
    return;
  }
  
  const lines = code.split("\n");
  let outputHTML = "";
  let keywordCount = 0;
  
  lines.forEach((line, index) => {
    if (line.trim()) {
      const highlightedLine = highlightAndExplain(line);
      
      // Count keywords in this line
      Object.keys(keywordExplanations).forEach(keyword => {
        const regex = new RegExp(`\\b${keyword}\\b`, 'g');
        const matches = line.match(regex);
        if (matches) {
          keywordCount += matches.length;
        }
      });
      
      outputHTML += `<div class="code-line">
        <span class="line-number">${index + 1}</span>
        <span class="code-content">${highlightedLine}</span>
      </div>`;
    }
  });
  
  outputDiv.innerHTML = outputHTML;
  
  // Update stats
  document.getElementById("lineCount").textContent = lines.filter(line => line.trim()).length;
  document.getElementById("keywordCount").textContent = keywordCount;
  document.getElementById("charCount").textContent = code.length;
  statsDiv.style.display = 'flex';
}

function clearCode() {
  const codeInput = document.getElementById("codeInput");
  codeInput.value = '';
  codeInput.focus();
  explainCode();
}

// Initialize with empty state
document.addEventListener('DOMContentLoaded', function() {
  explainCode();
});