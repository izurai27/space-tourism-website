

import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`


:root{
  /* ## Colors*/

  --dark: hsl(230, 35%, 7%);
  --medium: hsl(231, 77%, 90%);
  --light: (0,0%,100%);
	

	/* width:100vw; */
} 
 
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	/* font: inherit; */
	vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
	line-height: 1;
}

main{
	min-height: 100vh;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

/* *{
	border:1px solid greenyellow;
} */

body{
  /* ## Typography */
  /* ### Body Copy */
  
  color:white;
	
}

h1{
	font-family: 'Bellefair', serif;
	font-size: calc(80/16*1rem);

}

h2{
	font-family: 'Bellefair', serif;
	font-size: calc(56/16*1rem);
	text-transform: uppercase;
	line-height: 64px;
}

h3{
	font-family: 'Bellefair', serif;
	font-size: calc(56/16*1rem);
}

h4{
	font-family: 'Bellefair', serif;
	font-size: calc(32/16*1rem);
}

h5{
	font-family: 'Barlow Condensed', sans-serif;
	font-size: calc(16/16*1rem);
	letter-spacing: 2.7px;
	text-transform: uppercase;
}

nav{
	font-family: 'Barlow Condensed', sans-serif;
	font-size: calc(16/16*1rem);
	/* letter-spacing: 2.7em; */
}

p{
	font-size: calc(15/16*1rem);
	font-family: 'Barlow', sans-serif;
	line-height: calc(25/15*100%);
	color: hsla(231, 79%, 90%, 1);

}

.btnExplore{
	width:calc(150/16*1rem);
	aspect-ratio: 1/1;
	border-radius: 100%;
	background-color: #ffffff;
	font-family:'Bellefair', serif;
	font-size:calc(20/16*1rem);
	text-transform: uppercase;
	position:relative;
	border:none;
	/* z-index:1; */
	margin:0;
	padding:0;
	display:grid;
	place-items: center;
	cursor:pointer;
	/* color:black; */
}

.btnExplore::before{
	content:'';
	width:100%;
	aspect-ratio: 1/1;
	background-color: hsl(0,0%,100%, .15) ;
	position:absolute;
	/* z-index:-1; */
	border-radius: 100%;
}

.btnExplore:hover::before,.btnExplore:focus::before{
	/* background-color: #0B0D17; */
	transform: scale(calc(450/274*100%));
	/* transform: scale(1.5); */
}

	.numberDark{
		font-family: 'Barlow Condensed';
		font-style: normal;
		font-weight: 700;
		font-size: calc(16/16*1rem);
		line-height: 19px;
		letter-spacing: 2.7px;
		opacity: 0.25;
	}

	.h5heading{
		width:100%;
		display:flex;
		column-gap: calc(18/16*1rem);
		align-items: center;
	}


@media only screen and (min-width:768px){
	nav{
		font-family: 'Barlow Condensed', sans-serif;
		font-size: calc(14/16*1rem);
		letter-spacing: 2.36px;
		line-height: 16.8px;
	}

	p{
		font-size: calc(16/16*1rem);
		font-family: 'Barlow', sans-serif;
		line-height: calc(28/16*1rem);
		color: hsla(231, 79%, 90%, 1);
	}

	h1{
		font-family: 'Bellefair', serif;
		font-size: calc(150/16*1rem);

	}

	h5{
		font-family: 'Barlow Condensed', sans-serif;
		font-size: calc(20/16*1rem);
		letter-spacing: calc(3.38/16*1rem);
		line-height: calc(24/16*1rem);
	}

	.btnExplore{
		font-size:calc(32/16*1rem);
		width:calc(242/16*1rem);
	}


	.h5heading{
		display:flex;
		column-gap: calc(18/16*1rem);
		padding-inline: calc(38.5/16*1rem);
		align-items: flex-start;
		box-sizing: border-box;
	}

	.numberDark{
		
		font-size: calc(20/16*1rem);
		line-height: 24px;
		letter-spacing: 3.375px;
		opacity: 0.25;
	}

	h2{
		font-family: 'Bellefair';
		font-size: calc(80/16*1rem);;
		line-height: 92px;
	}
}

@media only screen and (min-width:1440px){
	h1{
		font-family: 'Bellefair', serif;
		font-size: calc(150/16*1rem);

	}

	h2{
		font-family: 'Bellefair', serif;
		font-size: calc(100/16*1rem);
		text-transform: uppercase;
	}

	h3{
		font-family: 'Bellefair', serif;
		font-size: calc(56/16*1rem);
	}

	h4{
		font-family: 'Bellefair', serif;
		font-size: calc(32/16*1rem);
	}

	h5{
		font-family: 'Barlow Condensed', sans-serif;
		font-size: calc(28/16*1rem);
		letter-spacing: 4.75px;
	}

	nav{
		font-family: 'Barlow Condensed', sans-serif;
		font-size: calc(16/16*1rem);
		line-height: 19px;
		letter-spacing: 2.7px;

	}

	p{
		font-size: calc(18/16*1rem);
		line-height: 2rem;
	}

	.btnExplore{
			font-size:calc(32/16*1rem);
			width:calc(274/16*1rem);
		}

	}

`