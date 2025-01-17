import React from 'react'
import { Link } from 'react-router-dom'
import "./Button.css";

function Button() {
  return (
<button>
  <Link className="svg-wrapper-1" to="/contactus">
    <div className="svg-wrapper">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
      >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path
          fill="#fff"
          d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
        ></path>
      </svg>
    </div>
  </Link>
  <span>Say Hello</span>
</button>

  )
}

export default Button
