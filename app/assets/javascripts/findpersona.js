function findbyname(){
   $("#boton_buscar").click(function(){

     var name = $("#name").val();
     $.ajax({
        url: "/persona/findbyname/"+name,
        type:"get",
        dataType: "json",
        beforeSend: function(){
           $("#respuesta").html("Cargando...");
        },
        error: function(){
           $("#respuesta").html("Error al intentar buscar a la Persona. Por favor intente más tarde.");
        },
        success: function(res){
          console.log(res);
          
           if(res){
              $("#respuesta").html('<tr><td>'+res.name+'</td><td>' + 
                                             res.lasname +'</td><td>'+ 
                                             res.adress + '</td><td>'+ 
                                             res.email + '</td><td>'+ 
                                             res.age + '</td></tr>');
           }else{
              $("#respuesta").html("No se encontro persona con este nombre.");
           }
        }
     })
  });
};
$(document).ready(function(){
   findbyname();
});