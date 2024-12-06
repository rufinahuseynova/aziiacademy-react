import "../css/categories.css";

function Categories() {
  return (
    <section className="categories">
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Tədris sahələri</h1>
          <p>
            Əgər bu sahəyə yeni başlayıb və istiqamət seçə bilmirsənsə, günümüzdə ən
            aktual olan ixtisasları sənin üçün hazırladıq. Bu ixtisaslardan istənilən
            birini öyrənərək gələcəyini və karyeranı uğurla qura biləcəksən.
          </p>
          <a href="#" className="btn">
            Daha çox
          </a>
        </div>

        <div className="categories_right">
          <article className="category">
            <span className="category_icon">
              <i className="fa-solid fa-computer"></i>
            </span>
            <h5>Proqramlaşdırma</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quaerat.</p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-brands fa-instagram"></i>
            </span>
            <h5>SMM</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quaerat.</p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-brands fa-figma"></i>
            </span>
            <h5>UX/Uİ Dizayn</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quaerat.</p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-solid fa-chart-simple"></i>
            </span>
            <h5>Digital Marketinq</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quaerat.</p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-solid fa-database"></i>
            </span>
            <h5>Data Analitika</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quaerat.</p>
          </article>

          <article className="category">
            <span className="category_icon">
              <i className="fa-solid fa-sitemap"></i>
            </span>
            <h5>Digital Memarlıq və 3D</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, quaerat.</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Categories;
