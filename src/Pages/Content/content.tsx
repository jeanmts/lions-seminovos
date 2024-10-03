import { Header } from "../../components/Header/header"
import { BarraBuscar } from "../../components/BarraBuscar/barraBuscar"
import './style.css'
import { Footer } from "../../components/Footer/footer"


function Content () {
    return (
        <>
          <Header aparecerBotao= {true}/>
          <main className="containerContent">
            <BarraBuscar/>            
          </main>
        <Footer/>
        </>
    )
}


export {Content}