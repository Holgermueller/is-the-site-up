function pingSite(e) {
  e.preventDefault();

  let URLVal = document.getElementById("urlInput").value;

  console.log(URLVal);
}

document.getElementById("submit").addEventListener("click", pingSite);
