import Image from "next/image";

function AboutSection() {
  return (
    <section
      id="About"
      className="flex flex-col h-auto bg-gray-100 py-10 font-Poppins bg-cover"
      style={{ backgroundImage: "url('/fondo-hojas.png')" }}
    >
      <div className="flex flex-col px-6 lg:px-20 pt-10 space-y-10">
        <h1 className="text-moss-black text-3xl lg:text-4xl font-bold text-center">
          Sobre nosotros
        </h1>
        <p
          className="text-base sm:text-lg lg:text-2xl text-moss-black px-6 sm:px-10 lg:px-16"
          style={{ lineHeight: "1.8" }}
        >
          En IBIRADOPTÁ, creemos que cada árbol cuenta para un futuro más verde
          y saludable. Somos un grupo de personas apasionadas por la naturaleza,
          unidos por la misión de restaurar nuestro planeta, árbol por árbol.
          Facilitamos a individuos, empresas y comunidades la oportunidad de
          adoptar y plantar árboles en diversas regiones, promoviendo la
          biodiversidad, mejorando la calidad del aire y ayudando a combatir el
          cambio climático.
          <br />
          Creemos que proteger la Tierra no es solo una opción, sino una
          responsabilidad compartida. Al unirnos en esta misión, creamos un
          impacto positivo que trasciende generaciones. Nuestro compromiso es
          acompañarte en cada paso, ofreciendo transparencia sobre los proyectos,
          el seguimiento de cada árbol plantado y el impacto ambiental que juntos
          estamos generando.
          <br />
          <br />
          <b>
            Sé parte de la diferencia y únete a nuestra misión de dar vida a un
            planeta más verde.
          </b>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10 lg:mt-20">
        <Image
          src="/logo.svg"
          alt="logo"
          width={300}
          height={200}
          className="w-48 sm:w-64 lg:w-80 opacity-90"
        />
        <div className="text-moss-green text-3xl sm:text-4xl lg:text-5xl font-Righteous mt-4 text-center">
          IBIRADOPTÁ
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
