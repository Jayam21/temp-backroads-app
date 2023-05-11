import React from "react";
import Title from "./Title";
import { tours } from "../data.js";

function Tour() {
  return (
    <div>
      <section className="section" id="tours">
        <Title title="featured" subtitle="tours" />

        <div className="section-center featured-center">
          {tours.map((t) => {
            const { id, img, date, h4, p, country, duration, money } = t;
            return (
              <article className="tour-card" key={id}>
                <div className="tour-img-container">
                  <img src={img} className="tour-img" alt="" />
                  <p className="tour-date">{date}</p>
                </div>
                <div className="tour-info">
                  <div className="tour-title">
                    <h4>{h4}</h4>
                  </div>
                  <p>{p}</p>
                  <div className="tour-footer">
                    <p>
                      <span>
                        <i className="fas fa-map"></i>
                      </span>{" "}
                      {country}
                    </p>
                    <p>{duration}</p>
                    <p>{money}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Tour;
