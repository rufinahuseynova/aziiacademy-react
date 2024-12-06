import "../css/achievment.css";
const Achievment = () => {
  return (
    <section className="about_achievment">
      <div className="container about_achievments-container">
      
        <div className="about_achievments-left">
          <img
            src="https://media.istockphoto.com/id/1207683208/vector/giving-certificate.jpg?s=170667a&w=0&k=20&c=ee-XPdoy1eNsT5y2i6mDioiAe75YQHMIg9_4e9JKvuI="
            alt="Nailiyyətlər"
          />
        </div>

        
        <div className="about_achievments-right">
          <h1>Nailiyyətlər</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias expedita error, sint dolorem
            magni non asperiores debitis quae eveniet quis veniam, omnis nam. Sint deserunt autem odit
            reiciendis molestiae eaque.
          </p>
          <div className="achievment_cards">
          
            <article className="achievment_card">
              <span className="achievment_icon">
                <i className="fa-solid fa-video"></i>
              </span>
              <h3>32+</h3>
              <p>Tədris sahəsi</p>
            </article>

            <article className="achievment_card">
              <span className="achievment_icon">
                <i className="fa-solid fa-users"></i>
              </span>
              <h3>590+</h3>
              <p>Tələbə</p>
            </article>

            <article className="achievment_card">
              <span className="achievment_icon">
                <i className="fa-solid fa-award"></i>
              </span>
              <h3>8</h3>
              <p>Mükafat</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievment;


