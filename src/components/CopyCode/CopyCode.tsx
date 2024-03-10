import React from "react";
import { BiCopy } from "react-icons/bi";
import "./CopyCode.css";

export const CopyCode: React.FC<{
  content: any;
  toCopy?: any;
  title?: string;
}> = (props) => {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  const CopyToClipboard = () => {
    if (ref !== null && ref.current !== null) {
      navigator.clipboard.writeText(props.toCopy ?? ref.current.innerText);
      setCopied(true);
      ref.current.className = ref.current.classList.contains("copied")
        ? ref.current.className
        : ref.current.className + " copied";
      setTimeout(() => {
        setCopied(false);
        ref.current?.classList.remove("copied");
      }, 2000);
    }
  };

  return (
    <div className="copycode">
      {props.title && (
        <div className="title">
          <h3>{props.title}:</h3>
        </div>
      )}
      <div className="at-right">
        <div className="icon-wrapper" onClick={(e: any) => CopyToClipboard()}>
          <BiCopy className="styled-icon" />
        </div>
        {copied && <div className="copied-label">copied to clipboard!</div>}
      </div>
      <div className="scrollbar-hi der">
        <div className="content-wrapper" ref={ref}>
          {props.content}
        </div>
      </div>
    </div>
  );
};

export default CopyCode;
