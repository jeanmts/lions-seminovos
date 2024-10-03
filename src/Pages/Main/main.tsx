import { Header } from '../../components/Header/header'
import fotoMain from '../../assets/fotoMain.jpg'
import { GoogleMap } from '../../components/GoogleMaps/maps'
import { cars } from '../../utils/database/cars'
import CardCar from '../../components/CardCars/cardCars'
import './style.css'
import { Link } from 'react-router-dom'
import { Footer } from '../../components/Footer/footer'



function Main() {
return (
 <>
    <Header aparecerBotao={false}/>
<main className='container-main'>
  <div className='container-info'>
    <div className='titulo-subT'>
      <h1>Seu Próximo Carro Está Aqui: Seminovos de Qualidade, Preços Imbatíveis</h1>
      <h2>Mais do que carros, oferecemos oportunidades de mudança com os melhores seminovos do mercado.</h2>
      <a href="https://api.whatsapp.com/send?phone=5521970951262&text=Ol%C3%A1,%20gostaria%20de%20entrar%20em%20contato."target='Blank' >
        <button className='botao-contato'>Fale com um de nossos consultores</button>
      </a>
    </div>
  <div className='container-img'>
    <img src={fotoMain} alt='Foto de um funcionario segurando uma chave automotica com a logo da lions seminovos'/>
  </div>
  </div>
  <section className='secao-card'>
    <div className='card-mapa'>
      <div>
        <h1>Horário de atendimento</h1>
        <h2>Segunda a sexta das 9:00 às 22:00, Sábado das 9:00 às 19:00 e aos Domingos das 9:00 às 18:00</h2>
      </div>
    <GoogleMap/>     
    </div>
  </section>
  <section className='secao-carros'>
      {cars.map((carro)=> {
          return (
            <Link key={carro.id} to={'/content'}>
                <div >
                 <CardCar 
                    fabricante={carro.fabricante}
                    modelo={carro.modelo}
                    detalhes={carro.detalhes}
                    preco={carro.preco}
                    ano={carro.ano}
                    imgUrl={carro.imgUrl}
                    id={carro.id}      
                    />
                </div>
             </Link>
        )
    })}
  </section>
</main>
<Footer/>
    </>
)
}

export {Main}