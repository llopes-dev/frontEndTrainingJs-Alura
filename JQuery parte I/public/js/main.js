var frase = $(".frase").text();

var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

var campo = $(".campo-digitacao");
campo.on("input" , function(){

   var conteudo = campo.val();
   
   var qtdPalavras = conteudo.split(/\S+/).length -1; // expressão regular
   $("#contador-palavras").text(qtdPalavras);

   var qtdCaracteres = conteudo.length;
   $("#contator-caracteres").text(qtdCaracteres);
});