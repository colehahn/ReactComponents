import React from "react";
import styled from "styled-components";
import { BiCopy } from "react-icons/bi";

const borderRadius = "1em";

const Wrapper = styled.div`
  background: var(--transparent);
  font-family: monospace;
  //max-width: fit-content;
  width: 100%;
  position: relative;
  border: 2px solid;
  border-radius: ${borderRadius};
  min-height: 60px;

  .copied {
    animation: 0.7s flash;
  }
  @keyframes flash {
    from {
      background-color: auto;
    }

    10% {
      background-color: rgba(255, 255, 255, 0.7);
    }

    to {
      background-color: auto;
    }
  }
`;

const TitleWrapper = styled.div`
  background: var(--transparent);
  padding-left: 2em;
  border: 1px solid transparent; //hmmm.. this definitely isn't right
  border-radius: ${borderRadius};
`;

const ContentWrapper = styled.div`
  padding: 1em;
  padding-right: 3em;
  overflow-x: auto;
`;

const ScrollbarHider = styled.div`
  overflow: hidden;
  border-radius: ${borderRadius};
`;

const AtRight = styled.div`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`;

const IconWrapper = styled.div`
  font-size: 2.5em;
  &:hover {
    cursor: pointer;
  }
  border: 2px solid;
  border-radius: 0.2em;
  padding: 0.1em;
  position: absolute;
  top: 0;
  right: 0;
`;

const StyledIcon = styled(BiCopy)`
  display: block;
`;

const CopiedLabel = styled.label`
  border: 1px solid;
  background-color: var(--background);
  position: relative;
  top: 1em;
`;

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
    <Wrapper>
      {props.title && (
        <TitleWrapper>
          <h3>{props.title}:</h3>
        </TitleWrapper>
      )}
      <AtRight>
        <IconWrapper onClick={(e: any) => CopyToClipboard()}>
          <StyledIcon />
        </IconWrapper>
        {copied && <CopiedLabel>copied to clipboard!</CopiedLabel>}
      </AtRight>
      <ScrollbarHider>
        <ContentWrapper ref={ref}>{props.content}</ContentWrapper>
      </ScrollbarHider>
    </Wrapper>
  );
};

export default CopyCode;
