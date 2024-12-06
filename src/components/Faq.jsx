import "../css/faq.css";
import { useState } from "react";

function Faq() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const faqs = [
    { question: "Proqram ödənişlidir?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Proqrama yalnız ADNSU tələbələri müraciət edə bilər?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Tədrisə kimlər qoşula bilər?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Necə qoşulmaq olar?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Qəbul üçün iş təcrübəsi lazımdır?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Tədris neçə müddət davam edəcək?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Dərslər hansı dildə keçiriləcək?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Dərslər online və ya offline şəkildə keçirilir?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "İşlə təmin edirsiniz?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
    { question: "Əsas qəbul şərtləri hansılardır?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque reiciendis quibusdam laboriosam quia in ullam omnis numquam adipisci iusto facilis dignissimos sed nesciunt vero, voluptatum laborum nisi. Consequatur, ducimus blanditiis?" },
  ];

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="faqs">
      <h2>Tez-tez soruşulan suallar</h2>
      <div className="container faqs_container">
        {faqs.map((faq, index) => (
          <article
            key={index}
            className={`faq ${openFaqIndex === index ? "open" : ""}`}
            onClick={() => toggleFaq(index)}
          >
            <div className="faq_icon">
              <i className={`fa-solid ${openFaqIndex === index ? "fa-minus" : "fa-plus"}`}></i>
            </div>
            <div className="question_answer">
              <h4>{faq.question}</h4>
              {openFaqIndex === index && <p>{faq.answer}</p>}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Faq;
