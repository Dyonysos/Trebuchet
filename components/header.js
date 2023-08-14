
const headerTemplate = document.createElement('template');

headerTemplate.innerHTML = `
	<style>
   
	header ul{
		list-style: none;
		margin:0;
		padding:0;
	}
	header li{
		margin:0;
		padding:0;
	}
	header a{
		text-decoration:none;
	}


	.hamburger{
		cursor: pointer;
		float: right;
		padding: 22px 20px;
	}

	.hamburger-line {
		background: white;
		display: block;
		height: 2px;
		position: relative;
		width: 24px;
	}

	.hamburger-line::before,
	.hamburger-line::after{
		background: white;
		content: '';
		display: block;
		height: 100%;
		position: absolute;
		transition: all .2s ease-out;
		width: 100%;
	}
	.hamburger-line::before{
		top: 5px;
	}
	.hamburger-line::after{
		top: -5px;
	}

	.side-menu:checked ~ nav{
		max-height: 100%;
	}
	.side-menu:checked ~ .hamburger .hamburger-line {
		background: transparent;
	}
	.side-menu:checked ~ .hamburger .hamburger-line::before {
		transform: rotate(-45deg);
		top:0;
	}
	.side-menu:checked ~ .hamburger .hamburger-line::after {
		transform: rotate(45deg);
		top:0;
	}
	#side-menu{
		display : none;
	}

	header{
		background:rgb(51, 51, 51);
		color:white;
		height:46px;
		position: sticky;
		top: 0;
		width: 100%;
	}
	.nav{
		width: 100%;
		height: 100%;
		position: fixed;
		background-color: rgb(51, 51, 51);
		overflow: hidden;
	
	}
	.menu a{
		display: block;
		padding: 30px;
		color: white;
	}

	.nav{
		max-height: 0;
		transition: max-height .5s ease-out;
	}
	.logo{
		color:white;

	}
	.logo-image{
		filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(87deg) brightness(119%) contrast(119%);

	}
	.logo{
		line-height:46px;
		height:100%;
		padding-left:70px;
		position:relative;
	}
	.logo-image{
		position:absolute;
		left:10px;
	}
	@media (min-width: 768px) {


		header{
			display: flex;
			flex-direction: row;
			align-items:stretch;
			gap:20px;
		}
		.menu{
			display: flex;
			flex-direction: row;
	
			align-items:stretch;
			height:100%;
			gap:10px;
		}

		.menu li a{
			padding:0;
			line-height:46px;
			height:100%;
		}
		.nav{
			max-height: none;
			top: 0;
			position: relative;

			width: fit-content;
			background-color: transparent;
		}


		.hamburger{
			display:none
		}
	}
  </style>
  <header>
	<input class="side-menu" type="checkbox" id="side-menu"/>
	<label class="hamburger" for="side-menu"><span class="hamburger-line"></span></label>
	<a class="logo" href="./index.html"><img class="logo-image" height="40px" src="./trebuchet.svg"> The trebuchet buffs</a>
    <nav class="nav">
		<ul class="menu">
			
			<li>
				<a href="./pictures.html">Pictures</a>

			</li>
			<li>
				<a href="./videos.html">Videos</a>
			</li>

			<li>
				<a href="">Simulations</a>
			</li>
			<li>
				<a href="mailto:trebuchetdubulbe@gmail.com ?subject=Trebuchet">Contact</a>
			</li>
		</ul>
      
    </nav>
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