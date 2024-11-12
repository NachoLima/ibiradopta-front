import FAQList from "./FAQList";

function FAQSection() {
    return (
      <section id="FAQ" className="h-screen bg-gray-100 py-10">
        
        <h1 className="text-moss-green text-4xl text-center font-Poppins font-bold pb-8">Preguntas Frecuentes</h1>
        <FAQList />
      </section>
    );
  }

  export default FAQSection;