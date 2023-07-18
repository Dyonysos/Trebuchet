
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<style>
    .navbar {
	  overflow: hidden;
	  background-color: #333;
	  font-family: "Times New Roman", Times, serif;
	}

	.navbar a {
	  float: left;
	  font-size: 16px;
	  color: white;
	  text-align: center;
	  padding: 14px 80px;
	  width: 15%;
	  text-decoration: none;
	}


	.subnav {
	  float: left;
	  overflow: hidden;
	}

	.subnav .subnavbtn {
	  font-size: 16px;  
	  border: none;
	  outline: none;
	  color: white;
	  padding: 14px 175px;
	  background-color: inherit;
	  font-family: inherit;
	  margin: 0;
	}


	.navbar a:hover, .subnav:hover .subnavbtn {
	  background-color: black;
	}

	.subnav-content {
	  display: none;
	  position: absolute;
	  left: 0;
	  background-color: black;
	  width: 100%;
	  z-index: 1;
	}

	.subnav-content a {
	  float: left;
	  color: white;
	  text-decoration: none;
	}

	.subnav-content a:hover {
	  background-color: #333;
	  color: white;
	}

	.subnav:hover .subnav-content {
	  display: block;
	}
  </style>
  <header>
    <div class="navbar">
      <a href="./index.html">Home</a>
      <div class="subnav">
        <button class="subnavbtn">Gallery <i class="fa fa-caret-down"></i></button>
        <div class="subnav-content">
          <a href="./pictures.html">Pictures</a>
          <a href="./videos.html">Videos</a>
        </div>
      </div> 
      <div class="subnav">
        <button class="subnavbtn">Simulation <i class="fa fa-caret-down"></i></button>
        <div class="subnav-content">
          <a href="#mathModel">Math Model</a>
          <a href="#trebuchetMotion">Trebuchet Motion</a>
        </div>
      </div> 
      <a href="mailto:trebuchetdubulbe@gmail.com ?subject=Trebuchet">Contact</a>
    </div>
  </header>
`;


class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
  	const shadowRoot = this.attachShadow({ mode: 'open' });
  	shadowRoot.appendChild(headerTemplate.content);
  }
}

customElements.define('header-component', Header);