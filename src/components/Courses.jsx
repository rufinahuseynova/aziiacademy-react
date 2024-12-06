
import "../css/courses.css";
import { useState } from "react";

const coursesData = [
  {
    id: 1,
    title: "Front-End Proqramlaşdırma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://bairesdev.mo.cloudinary.net/blog/2022/01/programming-languages-1.jpg",
  },
  {
    id: 2,
    title: "UX/UI Dizayn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://media.licdn.com/dms/image/D5612AQEzgFfwTwtHvg/article-cover_image-shrink_720_1280/0/1687170761242?e=2147483647&v=beta&t=XugdoHfGUgUrREn8MqUN5OhVb5S8lnohcvtSqokoUGM",
  },
  {
    id: 3,
    title: "Kiber Təhlükəsizlik",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://www.cgtechnologies.com/wp-content/uploads/2023/01/what-is-cyber-security.jpg",
  },
  {
    id: 4,
    title: "Back-End Proqramlaşdırma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://cdn.shopify.com/s/files/1/0070/5901/3716/files/coding_background.jpg?v=1688538955",
  },
  {
    id: 5,
    title: "2D Motion Dizayn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://images.squarespace-cdn.com/content/v1/5497ab83e4b02e9f5e5cec35/1582071694207-TRSUSW16UX8RA8I4N24H/motion+graphics+animation+nyc",
  },
  {
    id: 6,
    title: "Qrafik Dizayn",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://cdn.logojoy.com/wp-content/uploads/20231122153748/what-is-graphic-design-header.jpg",
  },
  {
    id: 7,
    title: "Digital Memarlıq və 3D",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://www.digiarc.aist.go.jp/img/main.png",
  },
  {
    id: 8,
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image:
      "https://hakimisolutions.com/wp-content/uploads/trends-in-digital-marketing.png",
  },
  {
    id: 9,
    title: "SMM",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit suscipit sint.",
    detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://www.interactivemedia.az/wp-content/uploads/2020/02/smm.jpg",
  },
];

const Courses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleSearch = () => {
    const filtered = coursesData.filter((course) =>
      course.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  const handleMoreInfo = (course) => {
    setSelectedCourse(course); // Modalı açmaq üçün kursu seçirik
  };

  const closeModal = () => {
    setSelectedCourse(null); // Modalı bağlamaq üçün seçilmiş kursu null edirik
  };

  return (
    <section className="courses">
      <h2>Populyar Kurslarımız</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Kurs axtar..."
          className="search-bar"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleSearch();
          }}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Axtar
        </button>
      </div>
      <div className="container courses_container">
        {filteredCourses.map((course) => (
          <article className="course" key={course.id}>
            <div className="course_image">
              <img src={course.image} alt={course.title} />
            </div>
            <div className="course_info">
              <h4>{course.title}</h4>
              <p>{course.description}</p>
              <button className="btn btn-primary" onClick={() => handleMoreInfo(course)}>
                Daha çox
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal açılması */}
      {selectedCourse && (
        <div className="modal" style={{ display: selectedCourse ? "block" : "none" }}>
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedCourse.title}</h3>
            <p>{selectedCourse.detail}</p>
            <p>{selectedCourse.description}</p> {/* Modalda göstəriləcək mətn */}
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa dolores porro vitae odio obcaecati, cumque possimus? Dicta dolorum recusandae aspernatur, amet facere quae autem distinctio eveniet! Sunt repellendus obcaecati corporis.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
