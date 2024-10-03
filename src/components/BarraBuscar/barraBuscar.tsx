import { useState } from "react";
import { cars } from '../../utils/database/cars'
import CardCar from '../CardCars/cardCars'
import './style.css'



export const BarraBuscar: React.FC = () => {
    const [modelo, setModelo] = useState('');
  
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setModelo(event.target.value);
    };

    const carrosFiltrados = cars.filter(carro =>
        carro.modelo.toLowerCase().includes(modelo.toLowerCase())
    );
  
    return (
      <div className="container-content">
        <div className="barra-pesquisar">
            <input
            type="text"
            placeholder="Pesquisar..."
            value={modelo}
            onChange={handleSearchChange}
            style={{ padding: '8px', width: '200px', marginBottom: '20px' }} // Estilos inline
            />
        </div>
        <ul>
          {carrosFiltrados.map(carro => (
            <li key={carro.id}>
            <CardCar 
                fabricante={carro.fabricante}
                modelo={carro.modelo}
                detalhes={carro.detalhes}
                preco={carro.preco}
                ano={carro.ano}
                imgUrl={carro.imgUrl}
                id={carro.id}      
             />
            </li>
          ))}
        </ul>
      </div>
    );
  };
