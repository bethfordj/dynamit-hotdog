import "./styles.css";

/* Images are in a single line to remove space between them (margin 0 and padding zero did not take care of vertical line between them) */

document.getElementById("header").innerHTML = `
<header>
  <div class="header-image-collage">
		<div class="image-row1">
			<img id="header-images" src="/src/IMG/Header Photos/dirty-dog-and-fries.png" alt="dirty dog and fries"><img id="header-images" src="/src/IMG/Header Photos/bubble-dogs.png" alt="bubble dogs wood background"><img id="header-images" src="/src/IMG/Header Photos/dirty-franks-with-fries.png" alt="dirty franks hot dog with fries and drink"><img id="header-images" src="/src/IMG/Header Photos/hot-dogs-and-mike.png" alt="hot dogs with horseradish sauce"><img id="header-images" src="/src/IMG/Header Photos/dirty-dog-and-fries.png" alt="dirty dog and fries"><img id="header-images" src="/src/IMG/Header Photos/bubble-dogs.png" alt="bubble dogs wood background">
		</div>
    	<div class="image-row2">
			<img id="header-images" src="/src/IMG/Header Photos/bacon-dog.png" alt="bacon smothered hot dog"><img id="header-images" src="/src/IMG/Header Photos/mac-n-cheese-dog.png" alt="mac n cheese hot dog"><img id="header-images" src="/src/IMG/Header Photos/hot-dog-and-cocktail.png" alt="hot dog cocktail happy hour"><img id="header-images" src="/src/IMG/Header Photos/artisan-hot-dogs.png" alt="artisan-hot-dogs"><img id="header-images" src="/src/IMG/Header Photos/bacon-dog.png" alt="bacon smothered hot dog"><img id="header-images" src="/src/IMG/Header Photos/mac-n-cheese-dog.png" alt="mac n cheese hot dog">
		</div>
		<div class="transparent-layer"></div>
	</div>
  <nav>
   	<a id="nav-link" href="/menu">MENU</a>
    	<a id="nav-link" href="/catering">CATERING</a>
    	<a id="nav-link" href="/about-us">ABOUT US</a>	
	<a id="nav-link" href="/contact-us">CONTACT</a>
  </nav>
</header>`;
