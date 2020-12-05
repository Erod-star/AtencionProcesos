class Procesador {
    constructor(){
        this.ciclos=ciclosAsimular;
        this.patendidos
        this.ciclosvacios
        this.memoria = new ListaCircular()
    }

    simular(ciclosAsimular){
        let memoria = new ListaCircular()
        for(let i=0;i<ciclosAsimular;i++){
            numero = Math.ceil(Math.random() * 100);

            if (numero<=39){ //nuevo proceso
                let nuevo=new Proceso()
                memoria.agregar(nuevo)
            } 

            if (memoria.inicio != null){ //
                memoria.inicio.ciclos--;
            }
            if (memoria.inicio.ciclos==0){
                this.patendidos++;
                memoria.eliminarInicio(); //elimina y en automatico va al sig
            }else{
                 memoria.avanza()
            }
        }   
    }
}