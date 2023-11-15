var listaLivros = ["https://m.media-amazon.com/images/I/7158aW38zxL._AC_UF894,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/71LJ4k-k9hL._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/51tKaR664xS.jpg", "https://m.media-amazon.com/images/I/51pNmTP7BRL.jpg", "https://m.media-amazon.com/images/I/81GGqzDlwoL._AC_UF1000,1000_QL80_.jpg", "https://m.media-amazon.com/images/I/41KJlaAzJjL.jpg", "https://site.taglivros.com/static/dd75a7d24d609cc6c066f7de68737ac7/fad2e/ine_2022_02_cover_aed8303284.jpg", "https://www.martinclaret.com.br/wp-content/uploads/2017/04/81EoqRgtXKL.jpg"];

var i = 0;

var listaNomes = ["O leão, a feiticeira e o guarda-roupa - C. S. Lewis", "O pequeno príncipe - Antoine de Saint-Exupéry", "Os sofrimentos do jovem Werther - Goethe", "Um estudo em vermelho - Arthur Conan Doyle", "Peter Pan - J. M. Barrie", "A moreninha - Joaquim Manuel de Macedo", "Verônica e os pinguins - Hazel Prior", "Memórias póstumas de Brás Cubas - Machado de Assis"];

var i2 = 0;

while (i < listaLivros.length) {
    document.write('<h2>' + listaNomes[i2] + '</h2>');
  document.write('<img src=' + listaLivros[i] + '>');
  i++;
}