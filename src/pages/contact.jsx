import React from "react";
import Section from "../components/section";
function Contact() {
  return (
    <main>
      <section>
        <h1 className="text text-9xl">Acerca de Ñude</h1>

        <Section title={"Nuestra Misión"} description={"En Ñude, nuestra misión es empoderarte para que te expreses sin restricciones a través de la moda. Creemos que la ropa es una forma de arte personal, una declaración de quién eres y quién aspiras ser. Queremos que descubras y abraces tu estilo único con prendas que resalten tu autenticidad."} image={"https://static.bershka.net/4/static/itxwebstandard/images/test/company/company01.jpg?20231214022006"}/>


        <Section title={"Compromiso con la Sostenibilidad"} description={"Estamos comprometidos con la sostenibilidad y la responsabilidad ambiental. En Ñude, adoptamos prácticas de fabricación éticas y utilizamos materiales sostenibles para reducir nuestro impacto en el planeta. Creemos que la moda y la responsabilidad ambiental pueden coexistir, y nos esforzamos por liderar el camino hacia un futuro más sostenible."}
        image={"https://static.bershka.net/4/static/itxwebstandard/images/test/company/company03.jpg?20231214022006"}/>
        <Section title={"Diseño Exclusivo"} description={"Nuestras colecciones son cuidadosamente diseñadas por un equipo creativo apasionado. Desde la concepción hasta la producción, cada prenda pasa por un proceso meticuloso para garantizar calidad y singularidad. Explora nuestras colecciones para descubrir piezas que no solo siguen las tendencias, sino que las establecen."}
        image={"https://static.bershka.net/4/static/itxwebstandard/images/test/company/company05.jpg?20231214022006"}/>
        <Section title={"Personalización para Ti"} description={"En Ñude, reconocemos que tu estilo es único. Ofrecemos opciones de personalización para que puedas adaptar nuestras prendas a tu gusto personal. Desde ajustes específicos hasta la posibilidad de elegir detalles personalizados, queremos que cada prenda se sienta hecha especialmente para ti."}
        image={"https://static.bershka.net/4/static/itxwebstandard/images/test/company/company10.jpg?20231214022006"}/>

      </section>
    </main>
  );
}

export default Contact;
