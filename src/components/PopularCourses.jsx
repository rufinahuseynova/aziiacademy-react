import "../css/popularcourses.css";

function PopularCourses() {
  return (
    <section className="courses">
      <h2>Bizim populyar kurslarımız</h2>

      <div className="container courses_container">
        <article className="course">
          <div className="course_image">
            <img
              src="https://bairesdev.mo.cloudinary.net/blog/2022/01/programming-languages-1.jpg"
              alt="Proqramlaşdırma"
            />
          </div>
          <div className="course_info">
            <h4>Proqramlaşdırma</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit
              suscipit sint.
            </p>
            <a href="courses.html" className="btn btn-primary">
              Daha çox
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course_image">
            <img
              src="https://media.licdn.com/dms/image/D5612AQEzgFfwTwtHvg/article-cover_image-shrink_720_1280/0/1687170761242?e=2147483647&v=beta&t=XugdoHfGUgUrREn8MqUN5OhVb5S8lnohcvtSqokoUGM"
              alt="UX/Uİ Dizayn"
            />
          </div>
          <div className="course_info">
            <h4>UX/Uİ Dizayn</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit
              suscipit sint.
            </p>
            <a  className="btn btn-primary">
              Daha çox
            </a>
          </div>
        </article>

        <article className="course">
          <div className="course_image">
            <img
              src="https://www.cgtechnologies.com/wp-content/uploads/2023/01/what-is-cyber-security.jpg"
              alt="Kiber Təhlükəsizlik"
            />
          </div>
          <div className="course_info">
            <h4>Kiber Təhlükəsizlik</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam labore quas id recusandae fugit
              suscipit sint.
            </p>
            <a className="btn btn-primary">
              Daha çox
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PopularCourses;




