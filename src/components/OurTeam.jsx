import "../css/ourteam.css";


function OurTeam() {
  const teamMembers = [
    {
      name: "Sevinc Bayramova",
      role: "Qrafik Dizayner",
      img: "https://img.freepik.com/free-photo/portrait-female-teacher-holding-notepad-green_140725-149620.jpg?size=626&ext=jpg&ga=GA1.1.2082370165.1716681600&semt=sph",
    },
    {
      name: "Etibar Rzayev",
      role: "Back-End Developer",
      img: "https://d3sujgifhk94se.cloudfront.net/wp-content/uploads/2022/12/05175055/teacher-coding-elementary.jpg",
    },
    {
      name: "Emin Oruclu",
      role: "Front-End Developer",
      img: "https://classful.com/wp-content/uploads/2019/09/This-is-Whats-its-Like-Being-a-Male-Teacher.jpg",
    },
    {
      name: "Ləman Quliyeva",
      role: "Data Analitik",
      img: "https://s.udemycdn.com/teaching/billboard-mobile-v3.jpg",
    },
    {
      name: "Nigar Adıgözəlova",
      role: "QA mütəxəssis",
      img: "https://s3.envato.com/files/365124037/109_E39A5711.jpg",
    },
    {
      name: "Elçin Cəfərzadə",
      role: "İnteryer Dizayner",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSnCxhQE3UoI4ONa3eT626VUPNYRmFCNqToCYA-dLnT-RmFyMUOeJQQzDg226zgHrDGa8&usqp=CAU",
    },
    {
      name: "Gülnar Salahova",
      role: "Uİ/UX Dizayner",
      img: "https://t3.ftcdn.net/jpg/07/23/32/88/360_F_723328813_Kr6x2nB23zbUGmLZ2dC3cEqxkIsV2SEh.jpg",
    },
    {
      name: "Murad Babayev",
      role: "Back-End Developer",
      img: "https://img.freepik.com/free-photo/elegant-young-teacher-with-brunette-hair-stylish-light-shirt-black-striped-suit-glasses-holding-writings-pen-giving-lecture_197531-24666.jpg?size=626&ext=jpg&ga=GA1.1.87170709.1707782400&semt=ais",
    },
  ];

  return (
    <section className="team">
      <h2>Komandamızla Tanış Olun</h2>
      <div className="container team_container">
        {teamMembers.map((member, index) => (
          <article key={index} className="team_member">
            <div className="team_member_img">
              <img src={member.img} alt={member.name} />
            </div>
            <div className="team_member_info">
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
            <div className="team_member_socials">
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default OurTeam;
