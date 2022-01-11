
import './App.css';
import {useState} from 'react';
import Lista from './components/Lista';
import Formulario from './components/Formulario';

function App() {
  const [items, setItems] = useState([
    {titulo: 'Medico de familia', protagonista: 'Emilio Aragon', imagen:'https://cloudfront-eu-central-1.images.arcpublishing.com/diarioas/T2CKZ5IIJNMGVJGLUFX5BUKLVQ.jpg'},
    {titulo:'Upa dance', protagonista:'Monica Cruz', imagen:'https://brendaforever.files.wordpress.com/2019/08/upa0.jpg'}
  ]);
  const onNuevaSerie = (nuevaSerie) =>{
     setItems([
       ...items,
       nuevaSerie
     ])
  
  }

  return (
    <div className="App">
     <h1>Series de televisión</h1>
     <Formulario nuevaSerie = {onNuevaSerie}/>
     <Lista series = {items}/>
    </div>
  );
}

export default App;
