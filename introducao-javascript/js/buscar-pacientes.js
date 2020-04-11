var botaAdicionar = document.querySelector("#buscar-pacientes");

botaAdicionar.addEventListener("click", function(){
    console.log("Vou buscar os clientes")

    var xhr = new XMLHttpRequest();

    xhr.open("GET" , "https://api-pacientes.herokuapp.com/pacintes");

    xhr.addEventListener("load" , function(){

        if(xhr.status == 200){
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
        
            pacientes.forEach(function(paciente){
                AdicionaPacienteNaTabla(paciente);
            });
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel");
        }

       

    });

    xhr.send();
});