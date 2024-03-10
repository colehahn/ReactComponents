import React from "react";
import CopyCode from "./components/CopyCode/CopyCode";
import Modal from "./components/Modal/Modal";

function App() {
  const [modalOpen, setModalOpen] = React.useState(false);

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
        provided by the css custom properties found in index.css.
      </p>

      <h2>CopyCode:</h2>
      <CopyCode content="copy this code okay);" />

      <h2>Modal:</h2>
      <button onClick={(e) => setModalOpen(true)}>Open Modal</button>
      <Modal isOpen={modalOpen} closeModal={(e) => setModalOpen(!modalOpen)}>
        <p>some modal content</p>
        <p>some modal content</p>
        <CopyCode content={"hi"} />
      </Modal>
    </div>
  );
}

export default App;
