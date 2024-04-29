import "./App.css";
import { data } from "./tabledata";
data;

function App() {
  // Set up the math operations

  const addValues = (input1, input2) => {
    // Find the objects
    const num1 = data.find((item) => item.title === input1);
    const num2 = data.find((item) => item.title === input2);

    if (num1 && num2) {
      const sum = num1.value + num2.value;
      return sum;
    } else {
      return "One or both inputs not found";
    }
  };

  const divideValues = (input1, input2) => {
    // Find the objects
    const num1 = data.find((item) => item.title === input1);
    const num2 = data.find((item) => item.title === input2);

    if (num1 && num2) {
      const division = num1.value / num2.value;
      return division;
    } else {
      return "One or both inputs not found";
    }
  };

  const multiplyValues = (input1, input2) => {
    // Find the objects
    const num1 = data.find((item) => item.title === input1);
    const num2 = data.find((item) => item.title === input2);

    if (num1 && num2) {
      const multiplication = num1.value * num2.value;
      return multiplication;
    } else {
      return "One or both inputs not found";
    }
  };

  return (
    <>
      {/* First table */}
      <div>
        <h1>Table 1</h1>
        <table>
          <thead>
            <th>Index#</th>
            <th>Value</th>
          </thead>

          {/* Map the table data  */}
          <tbody>
            {data.map((dataItem, index) => (
              <tr key={index}>
                <td>{dataItem.title}</td>
                <td>{dataItem.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Second table */}
      <div>
        <h1>Table 2</h1>
        <table>
          <thead>
            <th>Index#</th>
            <th>Value</th>
          </thead>
          {/* Render math operations */}
          <tbody>
            <tr>
              <td>Alpha</td>
              <td>{addValues("A5", "A20")}</td>
            </tr>
            <tr>
              <td>Beta</td>
              <td>{divideValues("A15", "A7")}</td>
            </tr>
            <tr>
              <td>Charlie</td>
              <td>{multiplyValues("A13", "A12")}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
