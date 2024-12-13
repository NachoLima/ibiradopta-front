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
            Sé parte de la diferencia y unite a nuestra misión de dar vida a un
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

function OpinionsSection() {
  const opinions = [
    {
      name: "Violeta",
      comment:
        "Adoptar un árbol con IBIRADOPTÁ fue una experiencia increíble. Me encanta saber que estoy ayudando al planeta.",
      image: "/Josefina.jpg",
    },
    {
      name: "Fernando",
      comment:
        "Gracias a IBIRADOPTÁ, mi familia y yo hemos podido contribuir a la reforestación de nuestra región. ¡Gran iniciativa!",
      image: "/Leo.jpg",
    },
    {
      name: "George",
      comment:
        "Ver el impacto positivo de mi contribución es emocionante. Recomiendo 100% a IBIRADOPTÁ.",
      image: "/George.jpg",
    },
    {
      name: "Diego",
      comment:
        "Me siento parte de un cambio global. Plantar árboles nunca fue tan fácil y significativo.",
      image: "/me.jpg",
    },
    {
      name: "Pablo",
      comment:
        "Estoy feliz de formar parte de esta misión. Adoptar un árbol es una manera hermosa de cuidar nuestro planeta.",
      image: "/Jona.jpg",
    },
    {
      name: "Luciano",
      comment:
        "Con IBIRADOPTÁ, siento que estoy aportando un granito de arena para construir un mundo mejor. ¡Gracias por hacerlo posible!",
      image: "/Profe.jpg",
    },
  ];

  return (
    <section
      id="Opinions"
      className="flex flex-col h-auto bg-white py-10 font-Poppins"
    >
      <div className="px-6 lg:px-20 pt-10 space-y-10">
        <h1 className="text-black text-3xl lg:text-4xl font-bold text-center">
          Opiniones de quienes confían en nosotros
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {opinions.map((opinion, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 relative mb-4">
                <Image
                  src={opinion.image}
                  alt={`Perfil de ${opinion.name}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <h2 className="text-moss-black text-lg font-semibold mb-2">
                {opinion.name}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {opinion.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <AboutSection />
      <OpinionsSection />
    </>
  );
}
