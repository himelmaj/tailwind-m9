import React from 'react'
import MainSections from '../components/mainSections'


export default function Home() {
  return (
    <main>
        <section>
            <h1 className='text text-9xl'>Ñude</h1>

            <MainSections title={"Explora la Moda con Personalidad"} description={"En Ñude, no seguimos las tendencias, las creamos. Sumérgete en un mundo donde tu estilo habla más fuerte que las palabras. Nuestra ropa refleja la individualidad, la confianza y la autenticidad. Descubre prendas que van más allá de la moda, expresando verdaderamente quién eres."} image={"https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-f6323d76-add3-4e2a-8861-d63f92f5b2d7-default_0.jpg?ts=1702491479378"} imgAlt={""}/>
            
            <MainSections title={"Colecciones Exclusivas"} description={"Explora nuestras colecciones cuidadosamente diseñadas para personas que buscan destacar. Desde la elegancia minimalista hasta la audacia vanguardista, cada prenda en Ñude cuenta una historia única. Nos enorgullece ofrecer moda que va más allá de las temporadas, creando un guardarropa atemporal."} image={"https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-join-life/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-38e97c71-fda1-43f5-96ab-dd381b561085-default_0.jpg?ts=1701423536654"} imgAlt={""}/>

            <MainSections title={"Sostenibilidad con Estilo"} description={"Nos preocupamos por el planeta tanto como tú. Nuestras prendas están diseñadas con materiales sostenibles y prácticas ecoamigables. Descubre cómo la moda puede ser hermosa y respetuosa con el medio ambiente en Ñude."} image={"https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-shoes-and-bags/subhome-xmedia-50-2//w/1920/IMAGE-landscape-fill-89ac5afa-ae1f-4fab-b95a-c5705b8d031b-default_0.jpg?ts=1702547700319"} imgAlt={""}/>
        </section>
    </main>
  )
}
