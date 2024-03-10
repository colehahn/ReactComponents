import CopyCode from "./components/CopyCode";

function App() {
  return (
    <div className="App">
      <p>
        The purpose of this website is to show off some custom React components,
        and make them available for use in other projects. This has been done
        many times before. For example, I could use `react-bootstrap`
        components. My main reason for making my own is that I didn't want to
        have to import all of the stylesheet. So that's why these components all
        come pre-styled.
      </p>
      <p>
        I will make all of these components display match the color scheme
        provided by the following css custom properties:
      </p>
      <ul>
        <li>--primary</li>
        <li>--secondary</li>
        <li>--background</li>
        <li>--transparent</li>
        <li>...</li>
      </ul>
      <h2>CopyCode:</h2>
      <CopyCode content="copy this code okay);" />
    </div>
  );
}

export default App;
