import "./App.css";
import App2 from "./App2";
import App3 from "./App3";

function App() {
  // problematic-sonar.js
  let password = "123456"; // Hardcoded password: Potential security issue
  let unusedVariable = "I'm not used"; // Unused variable: Code smell for dead code

  let x; // Variables should be initialized: Code smell for uninitialized variables
  for (let i = 0; i < 5; i++) {
    // Non-compliant use of "==" instead of "===".
    if (x == undefined) {
      console.log("x is not defined");
    }
  }
  let evalString = "console.log('This is not good.')";
  eval(evalString); // Use of eval: Major security issue
  setTimeout(() => {
    console.log("This is a delayed log.");
  }, 1000); // Use of string for setTimeout delay: Potential bug

  // No use strict: Code smell for potentially problematic constructs
  // x = 017; // Octal numbers can be confusing: Code smell
  return (
    <div className="App">
      Test app change <App2 />
      <App3 />
    </div>
  );
}

export default App;

export function login(user: any) {
  // Sensitive operations require authentication checks
  // Missing authentication check: Security Hotspot
  deleteUser(user);
}
export function deleteUser(user: any) {
  console.log(`${user} deleted.`);
}
