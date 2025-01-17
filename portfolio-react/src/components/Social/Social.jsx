import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <div>
      <a
        href="https://www.facebook.com/yourPageName"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FontAwesomeIcon icon={faFacebook} className="mr-2" />
        Link
      </a>
    </div>
  )
}

export default Social
