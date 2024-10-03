import React from 'react';
import './style.css';


interface CarProps {
    id: number,
    fabricante: string,
    modelo: string,
    detalhes: string,
    ano: number,
    preco:number,
    disponivel?: boolean
    imgUrl: string
}
  
  const CardCar: React.FC<CarProps> = ({ fabricante, modelo, ano, preco, imgUrl }) => {
    return (
      <div className='container-carros' >
        <img className='img-carro' src={imgUrl} alt={`${fabricante} ${modelo}`} />
        <div className='container-detalhes' >
          <span  >{`${fabricante} | ${modelo} | ${ano}`}</span>
          <span>{`Preço R$ ${preco.toFixed(2)}`}</span>
        </div>
      </div>
    );
  };

  export default CardCar;