class PersonaController < ApplicationController
  def findbyname
  	person = Persona.select("id, name, lasname,adress,email, age").where(:name => params[:name]);

      #Devuelve un json como salida al navegador.
      render :json => person[0]
   / else
      render :json => '{"Error":"No se encontraron datos"}'/

  end

  def findall

  	puts "Entra";
  	person = Persona.all
  	if person.size>0
      #Devuelve un json como salida al navegador.
      render :json => person
    else
      render :json => '{"Error":"No se encontraron datos"}'
    end
  end

  def param
  	params.require(:persona).permit(:name)
  end
end
