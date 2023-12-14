import CeoCard from './ceoCard'


function CeoListCard() {
  return (
    <section className='grid grid-cols-2 gap-4 p-3 mt-32 '>
        <CeoCard name={"Isabella García"} title={"CEO and Co-Fundadora"} description={"Isabella, co-fundadora y CEO de Ñude, es una visionaria de la moda con un enfoque único. Su pasión por la creatividad y la individualidad ha dado forma a la identidad de Ñude. Con una visión clara de la moda como una forma de expresión personal, Isabella impulsa a Ñude hacia la innovación y la autenticidad."}
        image={"https://images.pexels.com/photos/5669603/pexels-photo-5669603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        <CeoCard name={"Alejandro Mendoza"} title={"CEO and Co-Fundador"} description={"Alejandro, co-fundador y CEO de Ñude, es un líder apasionado con un compromiso inquebrantable con la sostenibilidad. Su visión para un futuro de moda consciente del medio ambiente ha llevado a Ñude a adoptar prácticas responsables. Alejandro impulsa el equilibrio entre la moda excepcional y el respeto por nuestro planeta."}
        image={"https://media.istockphoto.com/id/1300512215/es/foto/retrato-de-un-empresario-%C3%A9tnico-sonriente-en-el-cargo.jpg?s=612x612&w=0&k=20&c=BJYdx-ePO83HLpzPAsOkYaurN0MI8LdgA4lu1tVToBU="}/>
    </section>
  )
}

export default CeoListCard