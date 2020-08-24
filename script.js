const handleClick = (e) => {
  if (window.innerWidth > 900) {
    document.querySelector('#share-tooltip').classList.toggle('active');
    document.querySelector(".share-icon").classList.toggle('button-active');
  }
  else {
    document.querySelector("#article-meta-noshare").classList.toggle("nodisplay");
    document.querySelector(".share-tooltip-mobile").classList.toggle("nodisplay");
  }
}