
function Lista ({series}){

    return <div className="series">
        {series.map(serie =>( 
            <div className="serie">
                <h2>{serie.titulo}</h2>
                <p>{serie.protagonista}</p>
                <img src={serie.imagen} alt=""/>
            </div>))}
       
        </div>
}
export default Lista;