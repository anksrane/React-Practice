import React from 'react';
import styled from 'styled-components';

const DownloadButton = () => {
    const handleDownload = () => {
        const resumeUrl = "/files/Resume_Ankit_Rane.pdf"; 
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.setAttribute('download', 'Resume_Ankit_Rane.pdf'); 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };    
  return (
    <StyledWrapper>
      <div className="button" onClick={handleDownload}>
        <div className="button-wrapper">
          <div className="text">Download</div>
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="2em" height="2em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17" /></svg>
          </span>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .button {
    --width: 150px;
    --height: 40px;
    --tooltip-height: 35px;
    --tooltip-width: 90px;
    --gap-between-tooltip-to-button: 18px;
    --button-color: #00bcd4;
    --tooltip-color: #fff;
    width: var(--width);
    height: var(--height);
    background: var(--button-color);
    position: relative;
    text-align: center;
    border-radius: 0.45em;
    border: 1px solid #212121;
    transition: background 0.3s;
    cursor:pointer;
  }

  .button::after,.button::before {
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s;
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    color:#212121 !important;
  }

  .button-wrapper,.text,.icon {
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    color: #212121 !important;
  }

  .text {
    top: 0
  }

  .text,.icon {
    transition: top 0.5s;
  }

  .icon {
    color: #fff;
    top: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon svg {
    width: 24px;
    height: 24px;
  }

  .button:hover {
    background: #00bcd4;
  }

  .button:hover .text {
    top: -100%;
  }

  .button:hover .icon {
    top: 0;
  }

  .button:hover:before,.button:hover:after {
    opacity: 1;
    visibility: visible;
  }

  .button:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
  }

  .button:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }
  
@media (max-width: 768px) {
    .button {margin: 15px auto 15px auto;}
  }
  
  `;

export default DownloadButton;