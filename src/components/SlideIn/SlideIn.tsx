import React from "react";
import "./SlideIn.css";
import "../common/overlay.css";
import "../common/close-button.css";

export const Modal: React.FC<{
  isOpen: boolean;
  closeSlideIn: (e: any) => void;
  children: React.JSX.Element[] | React.JSX.Element;
}> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const slideOut = (e: any) => {
    ref.current?.classList.add("closed");
    // hackey: we need this timeout duration to be the same as the animation duration
    const seconds = Number.parseFloat(
      window.getComputedStyle(ref.current!).getPropertyValue("--duration")
    );
    console.log(seconds);
    setTimeout(() => props.closeSlideIn(e), seconds * 1000);
  };

  return (
    props.isOpen && (
      <div className="slide-in" ref={ref}>
        <div
          className="overlay"
          onClick={(e) => {
            if (
              //hackey: only close if fully opened
              window
                .getComputedStyle(e.target as Element)
                .getPropertyValue("opacity") === "1"
            ) {
              slideOut(e);
            }
          }}
        >
          <div
            className="slide-in-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="close-button" onClick={(e) => slideOut(e)}>
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
