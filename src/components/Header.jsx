import "../css/header.css";

function Header() {
  return (
    <header>
      <div className="container header_container">
        <div className="header_left">
          <h1>Karyera yolunuzda irəliləmək üçün bacarıqlarınızı inkişaf etdirin</h1>
          <small>#bizimləgələcəyə</small>
          <p>
            AZİİ Academy gələcək innovasiyalar üçün mütəxəssislər hazırlayan tədris
            müəssisəsidir.
          </p>
          <a href="/tedris-saheleri" className="btn btn-primary">
            Başlayın
          </a>
        </div>
        <div className="header_right">
          <div className="header_right-image">
            <img
              src="https://thesavvyimg.co.uk/wp-content/uploads/2022/08/the-savvy-img-online-courses-masterclass-shortcut-plab-gmc-registration.png"
              alt="Karyera inkişafı"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
