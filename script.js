let currentLanguage = 'javascript';

const languageKeywords = {
  javascript: {
    if: "Conditional statement that executes code if a condition is true",
    else: "Alternative code block when the if condition is false",
    for: "Loop that repeats code a specific number of times",
    while: "Loop that continues while a condition is true",
    function: "Declares a reusable block of code with optional parameters",
    return: "Exits a function and optionally returns a value",
    var: "Declares a variable with function scope",
    let: "Declares a variable with block scope",
    const: "Declares a constant variable that cannot be reassigned",
    "console.log": "Prints output to the browser's developer console",
    document: "Represents the HTML document in the browser",
    addEventListener: "Attaches an event handler to an element",
    getElementById: "Finds an HTML element by its ID attribute",
    querySelector: "Finds the first element matching a CSS selector",
    parseInt: "Converts a string to an integer number",
    parseFloat: "Converts a string to a floating-point number",
    Array: "Built-in object for creating and working with arrays",
    Object: "Built-in object for creating and working with objects",
    Math: "Built-in object containing mathematical functions",
    Date: "Built-in object for working with dates and times",
    JSON: "Built-in object for parsing and stringifying JSON data",
    setTimeout: "Executes a function after a specified delay",
    setInterval: "Repeatedly executes a function at specified intervals",
    try: "Begins a block of code to test for errors",
    catch: "Handles errors that occur in a try block",
    throw: "Creates a custom error",
    async: "Declares an asynchronous function",
    await: "Pauses execution until a promise resolves",
    Promise: "Object representing eventual completion of an async operation",
    class: "Declares a class (template for creating objects)",
    extends: "Creates a class that inherits from another class",
    import: "Imports functions, objects, or primitives from another module",
    export: "Exports functions, objects, or primitives from a module",
    switch: "Compares a value against multiple cases",
    case: "Defines a case in a switch statement",
    break: "Exits a loop or switch statement",
    continue: "Skips to the next iteration of a loop",
    typeof: "Returns the type of a variable or expression",
    instanceof: "Tests if an object is an instance of a specific class",
    new: "Creates a new instance of an object or class",
    this: "Refers to the current object context",
    null: "Represents intentional absence of any object value",
    undefined: "Value assigned to variables that have been declared but not assigned",
    true: "Boolean value representing logical truth",
    false: "Boolean value representing logical falsehood"
  },
  python: {
    if: "Conditional statement that executes code if a condition is true",
    elif: "Alternative condition check (else if)",
    else: "Alternative code block when conditions are false",
    for: "Loop that iterates over a sequence",
    while: "Loop that continues while a condition is true",
    def: "Declares a function",
    return: "Exits a function and optionally returns a value",
    class: "Declares a class (template for creating objects)",
    import: "Imports modules or functions from other files",
    from: "Specifies the module to import from",
    as: "Creates an alias for imported modules",
    try: "Begins a block of code to test for errors",
    except: "Handles specific exceptions",
    finally: "Code that always executes after try/except",
    with: "Context manager for resource management",
    lambda: "Creates anonymous functions",
    yield: "Creates generator functions",
    global: "Declares a variable as global",
    nonlocal: "Declares a variable as nonlocal",
    pass: "Placeholder statement that does nothing",
    break: "Exits a loop",
    continue: "Skips to the next iteration of a loop",
    and: "Logical AND operator",
    or: "Logical OR operator",
    not: "Logical NOT operator",
    in: "Membership operator",
    is: "Identity operator",
    None: "Represents the absence of a value",
    True: "Boolean value representing logical truth",
    False: "Boolean value representing logical falsehood",
    print: "Outputs text to the console",
    len: "Returns the length of an object",
    range: "Generates a sequence of numbers",
    str: "String data type or converts to string",
    int: "Integer data type or converts to integer",
    float: "Floating-point data type or converts to float",
    list: "List data type or converts to list",
    dict: "Dictionary data type or converts to dictionary",
    set: "Set data type or converts to set",
    tuple: "Tuple data type or converts to tuple"
  },
  java: {
    class: "Declares a class",
    public: "Access modifier - accessible from anywhere",
    private: "Access modifier - accessible only within the same class",
    protected: "Access modifier - accessible within package and subclasses",
    static: "Belongs to the class rather than instance",
    final: "Cannot be changed or overridden",
    abstract: "Cannot be instantiated, must be subclassed",
    interface: "Declares an interface",
    extends: "Inherits from a superclass",
    implements: "Implements an interface",
    if: "Conditional statement",
    else: "Alternative code block",
    for: "Loop statement",
    while: "Loop that continues while condition is true",
    do: "Do-while loop",
    switch: "Multi-way branch statement",
    case: "Case in a switch statement",
    break: "Exits a loop or switch",
    continue: "Skips to next iteration",
    return: "Returns a value from method",
    void: "Method returns no value",
    int: "Integer data type",
    double: "Double-precision floating-point",
    float: "Single-precision floating-point",
    char: "Character data type",
    boolean: "Boolean data type",
    String: "String class",
    new: "Creates a new object",
    this: "Refers to current object",
    super: "Refers to parent class",
    try: "Exception handling block",
    catch: "Catches exceptions",
    finally: "Always executes after try/catch",
    throw: "Throws an exception",
    throws: "Declares that method may throw exceptions",
    import: "Imports classes or packages",
    package: "Declares package",
    null: "Represents no value"
  },
  cpp: {
    "#include": "Includes header files",
    "#define": "Defines macros",
    "using": "Brings namespace into scope",
    "namespace": "Declares a namespace",
    "class": "Declares a class",
    "struct": "Declares a structure",
    "public": "Public access specifier",
    "private": "Private access specifier",
    "protected": "Protected access specifier",
    "virtual": "Enables polymorphism",
    "static": "Static storage duration",
    "const": "Constant qualifier",
    "if": "Conditional statement",
    "else": "Alternative code block",
    "for": "For loop",
    "while": "While loop",
    "do": "Do-while loop",
    "switch": "Switch statement",
    "case": "Case in switch",
    "break": "Exits loop or switch",
    "continue": "Skips to next iteration",
    "return": "Returns from function",
    "void": "No return type",
    "int": "Integer type",
    "double": "Double precision float",
    "float": "Single precision float",
    "char": "Character type",
    "bool": "Boolean type",
    "string": "String type",
    "new": "Dynamic memory allocation",
    "delete": "Deallocates memory",
    "this": "Pointer to current object",
    "try": "Exception handling",
    "catch": "Catches exceptions",
    "throw": "Throws exception",
    "template": "Generic programming",
    "typename": "Template parameter",
    "std": "Standard namespace",
    "cout": "Console output stream",
    "cin": "Console input stream",
    "endl": "End line manipulator"
  },
  csharp: {
    "class": "Declares a class",
    "public": "Public access modifier",
    "private": "Private access modifier",
    "protected": "Protected access modifier",
    "internal": "Internal access modifier",
    "static": "Static member",
    "readonly": "Read-only field",
    "const": "Constant field",
    "virtual": "Virtual method",
    "override": "Overrides virtual method",
    "abstract": "Abstract class or method",
    "sealed": "Sealed class",
    "interface": "Declares interface",
    "namespace": "Declares namespace",
    "using": "Using directive",
    "if": "Conditional statement",
    "else": "Alternative code block",
    "for": "For loop",
    "foreach": "Foreach loop",
    "while": "While loop",
    "do": "Do-while loop",
    "switch": "Switch statement",
    "case": "Case in switch",
    "break": "Exits loop or switch",
    "continue": "Skips to next iteration",
    "return": "Returns from method",
    "void": "No return type",
    "int": "Integer type",
    "double": "Double precision float",
    "float": "Single precision float",
    "decimal": "Decimal type",
    "char": "Character type",
    "bool": "Boolean type",
    "string": "String type",
    "var": "Implicitly typed variable",
    "new": "Creates new instance",
    "this": "Current instance reference",
    "base": "Base class reference",
    "try": "Exception handling",
    "catch": "Catches exceptions",
    "finally": "Always executes",
    "throw": "Throws exception",
    "null": "Null reference",
    "true": "Boolean true",
    "false": "Boolean false",
    "Console": "Console class",
    "WriteLine": "Writes line to console"
  },
  html: {
    "<!DOCTYPE>": "Declares document type",
    "html": "Root element of HTML document",
    "head": "Contains metadata about the document",
    "title": "Sets the title of the document",
    "meta": "Provides metadata about HTML document",
    "link": "Links external resources like CSS files",
    "script": "Contains or references JavaScript code",
    "style": "Contains CSS styling information",
    "body": "Contains the visible content of the document",
    "div": "Generic container element",
    "span": "Inline container element",
    "h1": "Main heading (largest)",
    "h2": "Secondary heading",
    "h3": "Third-level heading",
    "h4": "Fourth-level heading",
    "h5": "Fifth-level heading",
    "h6": "Sixth-level heading (smallest)",
    "p": "Paragraph element",
    "a": "Anchor/link element",
    "img": "Image element",
    "ul": "Unordered list",
    "ol": "Ordered list",
    "li": "List item",
    "table": "Table element",
    "tr": "Table row",
    "td": "Table data cell",
    "th": "Table header cell",
    "form": "Form element for user input",
    "input": "Input field",
    "button": "Button element",
    "textarea": "Multi-line text input",
    "select": "Dropdown selection",
    "option": "Option in a select element",
    "nav": "Navigation section",
    "header": "Header section",
    "footer": "Footer section",
    "main": "Main content area",
    "section": "Document section",
    "article": "Article content",
    "aside": "Sidebar content",
    "br": "Line break",
    "hr": "Horizontal rule",
    "strong": "Strong importance (bold)",
    "em": "Emphasis (italic)",
    "code": "Inline code",
    "pre": "Preformatted text"
  },
  css: {
    "color": "Sets text color",
    "background": "Sets background properties",
    "background-color": "Sets background color",
    "font-size": "Sets font size",
    "font-family": "Sets font family",
    "font-weight": "Sets font weight (bold, normal, etc.)",
    "text-align": "Sets text alignment",
    "margin": "Sets outer spacing",
    "padding": "Sets inner spacing",
    "border": "Sets border properties",
    "width": "Sets element width",
    "height": "Sets element height",
    "display": "Sets display type (block, inline, flex, etc.)",
    "position": "Sets positioning method",
    "top": "Sets top position",
    "left": "Sets left position",
    "right": "Sets right position",
    "bottom": "Sets bottom position",
    "float": "Sets element floating",
    "clear": "Clears floating elements",
    "overflow": "Sets overflow behavior",
    "z-index": "Sets stacking order",
    "opacity": "Sets transparency level",
    "transform": "Applies 2D/3D transformations",
    "transition": "Sets transition effects",
    "animation": "Sets animation properties",
    "flex": "Sets flexible box properties",
    "grid": "Sets grid layout properties",
    "justify-content": "Sets horizontal alignment in flex/grid",
    "align-items": "Sets vertical alignment in flex/grid",
    "box-shadow": "Sets shadow effects",
    "text-shadow": "Sets text shadow",
    "border-radius": "Sets rounded corners",
    "line-height": "Sets line height",
    "letter-spacing": "Sets letter spacing",
    "word-spacing": "Sets word spacing",
    "text-decoration": "Sets text decoration (underline, etc.)",
    "list-style": "Sets list styling",
    "cursor": "Sets cursor appearance",
    "visibility": "Sets element visibility",
    "min-width": "Sets minimum width",
    "max-width": "Sets maximum width",
    "min-height": "Sets minimum height",
    "max-height": "Sets maximum height"
  },
  sql: {
    "SELECT": "Retrieves data from database tables",
    "FROM": "Specifies the table to query",
    "WHERE": "Filters records based on conditions",
    "INSERT": "Adds new records to a table",
    "UPDATE": "Modifies existing records",
    "DELETE": "Removes records from a table",
    "CREATE": "Creates database objects (tables, indexes, etc.)",
    "DROP": "Removes database objects",
    "ALTER": "Modifies database objects",
    "JOIN": "Combines records from multiple tables",
    "INNER JOIN": "Returns matching records from both tables",
    "LEFT JOIN": "Returns all records from left table",
    "RIGHT JOIN": "Returns all records from right table",
    "FULL JOIN": "Returns all records from both tables",
    "GROUP BY": "Groups records by specified columns",
    "ORDER BY": "Sorts the result set",
    "HAVING": "Filters grouped records",
    "DISTINCT": "Returns unique values only",
    "COUNT": "Counts number of records",
    "SUM": "Calculates sum of values",
    "AVG": "Calculates average of values",
    "MIN": "Finds minimum value",
    "MAX": "Finds maximum value",
    "LIKE": "Searches for patterns in text",
    "IN": "Checks if value exists in a list",
    "BETWEEN": "Checks if value is within a range",
    "IS NULL": "Checks for null values",
    "IS NOT NULL": "Checks for non-null values",
    "AND": "Logical AND operator",
    "OR": "Logical OR operator",
    "NOT": "Logical NOT operator",
    "AS": "Creates column or table aliases",
    "UNION": "Combines results from multiple queries",
    "LIMIT": "Limits number of returned records",
    "OFFSET": "Skips specified number of records",
    "INDEX": "Creates database index for faster queries",
    "PRIMARY KEY": "Defines primary key constraint",
    "FOREIGN KEY": "Defines foreign key constraint",
    "UNIQUE": "Ensures unique values in column",
    "NOT NULL": "Ensures column cannot be null",
    "DEFAULT": "Sets default value for column"
  }
};

const exampleCode = {
  javascript: `// JavaScript Example
function calculateSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log("Sum:", calculateSum(numbers));`,
  
  python: `# Python Example
def calculate_sum(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

numbers = [1, 2, 3, 4, 5]
print(f"Sum: {calculate_sum(numbers)}")`,
  
  java: `// Java Example
public class Calculator {
    public static int calculateSum(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
    
    public static void main(String[] args) {
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println("Sum: " + calculateSum(numbers));
    }
}`,
  
  cpp: `// C++ Example
#include <iostream>
#include <vector>

int calculateSum(const std::vector<int>& numbers) {
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }
    return sum;
}

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5};
    std::cout << "Sum: " << calculateSum(numbers) << std::endl;
    return 0;
}`,
  
  csharp: `// C# Example
using System;

class Calculator {
    static int CalculateSum(int[] numbers) {
        int sum = 0;
        foreach (int num in numbers) {
            sum += num;
        }
        return sum;
    }
    
    static void Main() {
        int[] numbers = {1, 2, 3, 4, 5};
        Console.WriteLine($"Sum: {CalculateSum(numbers)}");
    }
}`,
  
  html: `<!-- HTML Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Website</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <header>
        <h1>Welcome to My Site</h1>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    <main>
        <section id="home">
            <h2>Home Section</h2>
            <p>This is the home section content.</p>
        </section>
    </main>
</body>
</html>`,
  
  css: `/* CSS Example */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 20px;
    text-align: center;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
}

nav a {
    color: white;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}`,
  
  sql: `-- SQL Example
SELECT 
    customers.name,
    orders.order_date,
    SUM(order_items.quantity * products.price) AS total_amount
FROM customers
INNER JOIN orders ON customers.id = orders.customer_id
INNER JOIN order_items ON orders.id = order_items.order_id
INNER JOIN products ON order_items.product_id = products.id
WHERE orders.order_date >= '2023-01-01'
GROUP BY customers.id, orders.id
HAVING total_amount > 100
ORDER BY total_amount DESC
LIMIT 10;`
};

// Initialize language selector
// Update the existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Load saved theme
  loadTheme();
  
  // Existing language selector code...
  const langButtons = document.querySelectorAll('.lang-btn');
  langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      langButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentLanguage = this.dataset.lang;
      document.getElementById('currentLang').textContent = this.textContent;
      explainCode();
    });
  });
  
  explainCode();
});

function highlightAndExplain(line) {
  let explained = line;
  const keywords = languageKeywords[currentLanguage] || {};
  
  // Sort keywords by length (longest first) to avoid partial matches
  const sortedKeywords = Object.keys(keywords).sort((a, b) => b.length - a.length);
  
  for (let keyword of sortedKeywords) {
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    if (regex.test(line)) {
      const tooltip = `<span class="explanation-keyword">${keyword}<span class="tooltip">${keywords[keyword]}</span></span>`;
      explained = explained.replace(regex, tooltip);
    }
  }
  
  return explained;
}

function applySyntaxHighlighting(code) {
  if (!code.trim()) return code;

  const lang = currentLanguage;
  let highlighted = escapeHtml(code);

  // Core patterns per language
  const syntaxPatterns = {
    javascript: [
      { type: "comment", regex: /\/\/.*/g },
      { type: "comment", regex: /\/\*[\s\S]*?\*\//g },
      { type: "string", regex: /(['"`])(?:\\[\s\S]|(?!\1)[^\\])*\1/g },
      { type: "number", regex: /\b\d+(\.\d+)?\b/g },
      { type: "keyword", regex: new RegExp(`\\b(${Object.keys(languageKeywords.javascript).join('|')})\\b`, 'g') }
    ],
    python: [
      { type: "comment", regex: /#.*/g },
      { type: "string", regex: /(['\"]{3})([\s\S]*?)\1/g },
      { type: "string", regex: /(['\"])(?:\\.|(?!\1).)*\1/g },
      { type: "number", regex: /\b\d+(\.\d+)?\b/g },
      { type: "keyword", regex: new RegExp(`\\b(${Object.keys(languageKeywords.python).join('|')})\\b`, 'g') }
    ],
    java: [
      { type: "comment", regex: /\/\/.*/g },
      { type: "comment", regex: /\/\*[\s\S]*?\*\//g },
      { type: "string", regex: /(['"])(?:\\.|(?!\1).)*\1/g },
      { type: "number", regex: /\b\d+(\.\d+)?\b/g },
      { type: "keyword", regex: new RegExp(`\\b(${Object.keys(languageKeywords.java).join('|')})\\b`, 'g') }
    ],
    cpp: [
      { type: "comment", regex: /\/\/.*/g },
      { type: "comment", regex: /\/\*[\s\S]*?\*\//g },
      { type: "string", regex: /(['"])(?:\\.|(?!\1).)*\1/g },
      { type: "number", regex: /\b\d+(\.\d+)?\b/g },
      { type: "keyword", regex: new RegExp(`\\b(${Object.keys(languageKeywords.cpp).map(k=>escapeRegex(k)).join('|')})\\b`, 'g') }
    ],
    csharp: [
      { type: "comment", regex: /\/\/.*/g },
      { type: "comment", regex: /\/\*[\s\S]*?\*\//g },
      { type: "string", regex: /(['"])(?:\\.|(?!\1).)*\1/g },
      { type: "number", regex: /\b\d+(\.\d+)?\b/g },
      { type: "keyword", regex: new RegExp(`\\b(${Object.keys(languageKeywords.csharp).join('|')})\\b`, 'g') }
    ],
    html: [
      { type: "comment", regex: /<!--[\s\S]*?-->/g },
      { type: "string", regex: /"[^"]*"|'[^']*'/g },
      { type: "tag", regex: /<\/?[a-zA-Z][^>]*>/g }
    ],
    css: [
      { type: "comment", regex: /\/\*[\s\S]*?\*\//g },
      { type: "number", regex: /\b\d+(\.\d+)?\b/g },
      { type: "selector", regex: /\.[\w-]+|#[\w-]+/g },
      { type: "property", regex: new RegExp(`\\b(${Object.keys(languageKeywords.css).join('|')})\\b(?=\\s*:)`, 'g') },
      { type: "value", regex: /:[^;]+(?=;)/g }
    ],
    sql: [
      { type: "comment", regex: /--.*/g },
      { type: "string", regex: /'[^']*'/g },
      // Multi-word SQL keywords handled below
    ]
  };

  // HTML escape utility
  function escapeHtml(str) {
    return str.replace(/[&<>"]/g, tag => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'
    })[tag]);
  }
  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Multi-word SQL and HTML tags
  if (lang === "sql") {
    const sqlWords = Object.keys(languageKeywords.sql).sort((a, b) => b.length - a.length).map(escapeRegex);
    highlighted = highlighted.replace(
      new RegExp(`\\b(${sqlWords.join('|')})\\b`, 'gi'),
      '<span class="keyword">$1</span>'
    );
  }

  // For all other languages/tokens, do a layered replace
  (syntaxPatterns[lang] || []).forEach(({type, regex}) => {
    highlighted = highlighted.replace(regex, match => `<span class="${type}">${match}</span>`);
  });
  return highlighted;
}


function calculateComplexity(code) {
  if (!code.trim()) return 0;
  
  const complexityIndicators = [
    /\b(if|else|elif|switch|case)\b/g,  // Conditionals
    /\b(for|while|do|foreach)\b/g,      // Loops
    /\b(try|catch|except|finally)\b/g,  // Error handling
    /\b(function|def|class|interface)\b/g,  // Functions/classes
    /\b(&&|\|\||and|or)\b/g,            // Logical operators
    /[{}]/g                             // Nesting
  ];
  
  let complexity = 0;
  for (let regex of complexityIndicators) {
    const matches = code.match(regex);
    if (matches) {
      complexity += matches.length;
    }
  }
  
  return Math.min(complexity, 20); // Cap at 20 for the indicator
}

function explainCode() {
  const codeInput = document.getElementById("codeInput");
  const code = codeInput.value;
  const explanationOutput = document.getElementById("explanationOutput");
  const syntaxOutput = document.getElementById("syntaxOutput");
  const statsDiv = document.getElementById("stats");
  const complexityIndicator = document.getElementById("complexityIndicator");
  
  if (!code.trim()) {
    explanationOutput.innerHTML = '<div class="empty-state">Select a language and start typing code to see detailed explanations!</div>';
    syntaxOutput.innerHTML = '<div class="empty-state">Your code will appear here with syntax highlighting</div>';
    statsDiv.style.display = 'none';
    complexityIndicator.style.display = 'none';
    return;
  }
  
  const lines = code.split("\n");
  let explanationHTML = "";
  let keywordCount = 0;
  let functionCount = 0;
  let commentCount = 0;
  
  // Count various elements
  const keywords = languageKeywords[currentLanguage] || {};
  Object.keys(keywords).forEach(keyword => {
    const regex = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    const matches = code.match(regex);
    if (matches) {
      keywordCount += matches.length;
    }
  });
  
  // Count functions
  const functionPatterns = [
    /\bfunction\s+\w+/g,      // JavaScript functions
    /\bdef\s+\w+/g,           // Python functions
    /\b\w+\s*\(/g             // General function calls
  ];
  
  functionPatterns.forEach(pattern => {
    const matches = code.match(pattern);
    if (matches) {
      functionCount += matches.length;
    }
  });
  
  // Count comments
  const commentPatterns = [
    /\/\/.*$/gm,              // Single line comments
    /\/\*[\s\S]*?\*\//g,      // Multi-line comments
    /#.*$/gm,                 // Python/Shell comments
    /<!--[\s\S]*?-->/g        // HTML comments
  ];
  
  commentPatterns.forEach(pattern => {
    const matches = code.match(pattern);
    if (matches) {
      commentCount += matches.length;
    }
  });
  
  // Generate explanations
  lines.forEach((line, index) => {
    if (line.trim()) {
      const highlightedLine = highlightAndExplain(line.trim());
      explanationHTML += `<div class="code-line">
        <span class="line-number">${index + 1}</span>
        <span class="code-content">${highlightedLine}</span>
      </div>`;
    }
  });
  
  explanationOutput.innerHTML = explanationHTML;
  syntaxOutput.innerHTML = `<pre><code>${applySyntaxHighlighting(code)}</code></pre>`;
  
  // Update stats
  document.getElementById("lineCount").textContent = lines.filter(line => line.trim()).length;
  document.getElementById("keywordCount").textContent = keywordCount;
  document.getElementById("charCount").textContent = code.length;
  document.getElementById("functionCount").textContent = functionCount;
  document.getElementById("commentCount").textContent = commentCount;
  
  // Calculate and display complexity
  const codeForComplexity = removeComments(code, currentLanguage);
  const complexity = calculateComplexity(codeForComplexity);
  const complexityPercentage = (complexity / 20) * 100;
  const complexityFill = document.getElementById("complexityFill");
  const complexityText = document.getElementById("complexityText");
  
  complexityFill.style.width = `${complexityPercentage}%`;
  
  if (complexity <= 5) {
    complexityFill.className = "complexity-fill complexity-low";
    complexityText.textContent = "Low";
  } else if (complexity <= 12) {
    complexityFill.className = "complexity-fill complexity-medium";
    complexityText.textContent = "Medium";
  } else {
    complexityFill.className = "complexity-fill complexity-high";
    complexityText.textContent = "High";
  }
  
  statsDiv.style.display = 'grid';
  complexityIndicator.style.display = 'flex';
}

function loadExample() {
  const codeInput = document.getElementById("codeInput");
  codeInput.value = exampleCode[currentLanguage] || "";
  explainCode();
}

function formatCode() {
  const codeInput = document.getElementById("codeInput");
  let code = codeInput.value;
  
  // Basic formatting - add proper indentation
  const lines = code.split('\n');
  let indentLevel = 0;
  const indentSize = 2;
  
  const formatted = lines.map(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return '';
    
    // Decrease indent for closing braces/brackets
    if (trimmedLine.match(/^[}\]]/)) {
      indentLevel = Math.max(0, indentLevel - 1);
    }
    
    const indentedLine = ' '.repeat(indentLevel * indentSize) + trimmedLine;
    
    // Increase indent for opening braces/brackets
    if (trimmedLine.match(/[{\[]$/)) {
      indentLevel++;
    }
    
    return indentedLine;
  }).join('\n');
  
  codeInput.value = formatted;
  explainCode();
}

function clearCode() {
  const codeInput = document.getElementById("codeInput");
  codeInput.value = '';
  codeInput.focus();
  explainCode();
}
// Dark Mode Functionality
function toggleTheme() {
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  
  body.classList.toggle('dark-mode');
  
  if (body.classList.contains('dark-mode')) {
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark';
    localStorage.setItem('theme', 'light');
  }
}

// Load saved theme on page load
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const themeIcon = document.getElementById('theme-icon');
  const themeText = document.getElementById('theme-text');
  
  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeIcon.textContent = '☀️';
    themeText.textContent = 'Light';
  } else {
    themeIcon.textContent = '🌙';
    themeText.textContent = 'Dark';
  }
}

// Guide Modal Functions
function openGuide() {
  const modal = document.getElementById('guideModal');
  modal.style.display = 'block';
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeGuide() {
  const modal = document.getElementById('guideModal');
  modal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking outside
window.onclick = function(event) {
  const modal = document.getElementById('guideModal');
  if (event.target === modal) {
    closeGuide();
  }
}

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
  // Close guide with Escape key
  if (event.key === 'Escape') {
    closeGuide();
  }
  
  // Toggle theme with Ctrl+Shift+T
  if (event.ctrlKey && event.shiftKey && event.key === 'T') {
    event.preventDefault();
    toggleTheme();
  }
  
  // Open guide with Ctrl+H
  if (event.ctrlKey && event.key === 'h') {
    event.preventDefault();
    openGuide();
  }
});
function removeComments(code, lang = currentLanguage) {
  if (lang === "python") return code.replace(/#.*$/gm, "");
  if (lang === "sql") return code.replace(/--.*$/gm, "");
  if (lang === "html") return code.replace(/<!--[\s\S]*?-->/g, "");
  // For C-style:
  return code.replace(/\/\/.*$/gm, "")
             .replace(/\/\*[\s\S]*?\*\//g, "");
}
