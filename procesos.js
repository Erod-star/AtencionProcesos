
function imprimir(){
    console.log(
        `
        ciclos vacios ${vacio},
        procesos atendidos ${atendido},
        procesos pendientes ${size}
        `
    );
    console.log(util.inspect(inicio,false, null, true));
}