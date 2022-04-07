import React from "react";
import "./Sevices.scss";
import { Link } from "react-router-dom";
import image2 from "./dl.beatsnoop.com-high-8f1804aee665bc5ee0.jpg";

function ServicesOne() {
  return (
    <section>
      <div className="Services1">
        <div className="services-col1">
          <h2>Benefit of mars and positive employee</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            delectus sint. Accusantium ut, itaque laboriosam, alias corrupti
            deserunt hic et pariatur obcaecati experdita nihil excepturi vel
            quae sit autem adipisci.
          </p>
          <Link className="btn-register" to="/register">
            Register
          </Link>
        </div>
        <div className="services-col2">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="services2">
        <div className="services2-col1">
          <h2>Think high always expect the best services</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque,
            delectus sint. Accusantium ut, itaque laboriosam, alias corrupti
            deserunt hic et pariatur obcaecati experdita nihil excepturi vel
            quae sit autem adipisci.
          </p>
        </div>
        <div className="box-container">
          <div className="box">
            <h3>Business Services</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas,
              explicabo consequuntur? Sunt, obcaecati? Accusantium enim
              consequatur exercitationem cum. Qui voluptates obcaecati possimus
              harum, culpa natus at minus magni provident quia saepe debitis
              eaque labore rerum.
            </p>
          </div>
          <div className="box blue">
            <h3>Financial Services</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
              similique deserunt tenetur? Sit at suscipit accusamus, maxime
              dolorem repellendus reprehenderit debitis beatae nihil, quidem
              esse quam minus amet labore quod veritatis doloribus quo
              blanditiis. Corporis.
            </p>
          </div>
          <div className="box">
            <h3>Consultanc & Guidance</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
              voluptatibus possimus tempora blanditiis esse, quia saepe rem et
              aut libero doloribus numquam laborum culpa nobis, neque cum ad
              inventore! Delectus dolor laborum et quaerat vel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesOne;
