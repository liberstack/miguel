fetch("content.md")
  .then(function (response) {
    return response.text();
  })
  .then(function (text) {
    document.getElementById("content").innerHTML = marked.parse(text);
  })
  .catch(function (err) {
    document.getElementById("content").innerHTML =
      "<p>Erro ao carregar o conteúdo.</p>";
    console.error(err);
  });
