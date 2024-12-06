import "../css/feedbacks.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Feedbacks() {
  const feedbacks = [
    {
      name: "Leyla Hümmətova",
      title: "Front-End Developer",
      avatar:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTAzL2ZyZWVpbWFnZXNjb21wYW55X3Bob3RvX29mX3lvdW5nX2luZGlhbl9naXJsX2hvbGRpbmdfc3R1ZGVudF9iYV8zN2QyNjU4Yi0yOWIwLTQyZmQtODhmYy04OGU3ZTcxYmVlNDcucG5n.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ut sunt reiciendis minima dolorem officiis nam eos, deserunt voluptatibus deleniti! Eligendi nostrum ratione maxime.",
    },
    {
      name: "Əli Hüseynov",
      title: "UX/Uİ Dizayner",
      avatar:
        "https://e7.pngegg.com/pngimages/815/685/png-clipart-ugc-net-student-education-university-school-student-tshirt-blue-thumbnail.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ut sunt reiciendis minima dolorem officiis nam eos, deserunt voluptatibus deleniti! Eligendi nostrum ratione maxime.",
    },
    {
      name: "Babək Musayev",
      title: "QA mühəndisi",
      avatar:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEwL3Jhd3BpeGVsb2ZmaWNlMTlfcGhvdG9fb2ZfdGVlbl9naXJsX3NtaWxpbmdfc2hvd2luZ19iaWNlcHNfd2hpbF80ZmFlOWVhOS1lN2NiLTQ5YjctYjRiNC1hOGZmOTYzNTFlZmYucG5n.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ut sunt reiciendis minima dolorem officiis nam eos, deserunt voluptatibus deleniti! Eligendi nostrum ratione maxime.",
    },
    {
      name: "Xəyalə Əliyeva",
      title: "Memar",
      avatar:
        "https://i.pinimg.com/736x/09/3b/26/093b262241153209a982ea0e6bb891da.jpg",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ut sunt reiciendis minima dolorem officiis nam eos, deserunt voluptatibus deleniti! Eligendi nostrum ratione maxime.",
    },
    {
      name: "Suzan Cəfərova",
      title: "Kiber Təhlükəsizlik Mütəxəssisi",
      avatar:
        "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3Jhd3BpeGVsX29mZmljZV8yMV9waG90b19vZl9oYXBweV9hZnJpY2FuX2FtZXJpY2FuX3N0dWRlbnRfZ2lybF8xYTIzMTAxMi0zYmVjLTQ3ZDEtOWI0OC0xZWMwZDI5ZjYwYWYucG5n.png",
      feedback:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate ut sunt reiciendis minima dolorem officiis nam eos, deserunt voluptatibus deleniti! Eligendi nostrum ratione maxime.",
    },
  ];

  return (
    <section className="container testimonials_container mySwiper">
      <h2>Məzunlarımızın rəyləri</h2>
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        breakpoints={{
          600: {
            slidesPerView: 2,
          },
        }}
      >
        {feedbacks.map((feedback, index) => (
          <SwiperSlide key={index}>
            <article className="testimonial swiper-slide">
              <div className="avatar">
                <img src={feedback.avatar} alt={feedback.name} />
              </div>
              <div className="testimonial_info">
                <h5>{feedback.name}</h5>
                <small>{feedback.title}</small>
              </div>
              <div className="testimonial_body">
                <p>{feedback.feedback}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
    </section>
  );
}

export default Feedbacks;
