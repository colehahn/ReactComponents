import React from "react";
import "./Modal.css";

export const Modal: React.FC<{
  isOpen: boolean;
  closeModal: (e: any) => void;
  children: React.JSX.Element[];
}> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const fadeOut = (e: any) => {
    ref.current?.classList.add("closed");
    // hackey: we need this timeout duration to be the same as the opacity fadeout
    const seconds = Number.parseFloat(
      window
        .getComputedStyle(ref.current!)
        .getPropertyValue("animation-duration")
    );
    setTimeout(() => props.closeModal(e), seconds * 1000);
  };

  return (
    props.isOpen && (
      <div className="modal" ref={ref}>
        <div
          className="overlay"
          onClick={(e) => {
            if (
              //hackey: only close if fully opened
              window
                .getComputedStyle(ref.current!)
                .getPropertyValue("opacity") === "1"
            ) {
              fadeOut(e);
            }
          }}
        >
          <div className="modal-popup" onClick={(e) => e.stopPropagation()}>
            <div className="close-button" onClick={(e) => fadeOut(e)}>
              ✖
            </div>
            {props.children}
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
