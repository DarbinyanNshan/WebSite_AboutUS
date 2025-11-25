import React from "react";
import "../css/card-body.css";

import { FaRocket, FaCoffee } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { MdNaturePeople } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";

const CardBody = () => {
  const features = [
    {
      icon: <FaRocket />,
      title: "Lorem ipsum dolor",
      text: "Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.",
      color: "blue",
    },
    {
      icon: <IoMdAirplane />,
      title: "Lorem ipsum dolor",
      text: "Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.",
      color: "orange",
    },
    {
      icon: <FaCoffee />,
      title: "Lorem ipsum dolor",
      text: "Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium..",
      color: "red",
    },
    {
      icon: <MdNaturePeople />,
      title: "Lorem ipsum dolor",
      text: "Id quam odio voluptates porro harum ducimus non provident, dolor, modi accusantium.",
      color: "green",
    },
  ];

  return (
    <section className="about-section">
      <div className="about-header">
        <h2>About Us</h2>
      </div>

      <div className="about-content">
        <p className="first-letter">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ipsa id saepe, quos
          ullam fugiat velit pariatur alias cumque. Architecto et vitae perferendis cumque ratione
          officiis? Quas quod, rerum dolores qui. Iste magnam ipsam laborum. Natus quis maiores est
          qui maxime, consectetur ipsam esse quaerat facilis quos repudiandae eaque magni
          laboriosam amet.
        </p>
        <p>
          Perferendis, blanditiis unde fugiat voluptas molestias velit asperiores rerum ipsam
          animi eum temporibus at numquam, nobis voluptates minus maxime cum obcaecati! Tenetur
          sit corporis laudantium inventore officia officiis odio repellat dolore quos repudiandae
          voluptas ad facere, amet placeat animi voluptatem distinctio beatae.
        </p>
        <p>
          Non sequi adipisci nostrum natus rem accusamus itaque repellendus illum neque! Voluptate,
          error commodi a quaerat eveniet tenetur reiciendis nulla doloremque iusto repellat quis
          asperiores, quibusdam architecto culpa facere aliquam placeat eaque amet, optio nobis alias
          maiores. Nulla perferendis impedit hic placeat veniam distinctio error.
        </p>
        <p>
          Tenetur numquam a, nesciunt neque odit amet, qui quibusdam natus assumenda quas omnis,
          aspernatur quisquam nobis illum ea distinctio tempora quaerat. Aperiam cumque, eveniet
          similique praesentium, temporibus, id quis labore aspernatur quod placeat ducimus fuga
          consequuntur numquam autem. Voluptates repellat.
        </p>
      </div>

      <hr className="dotted" />

      <div className="features">
        {features.map((feature, index) => (
          <div className={`feature-card ${feature.color}`}key={index}>
            <div className={`icon ${feature.color}`}>{feature.icon}</div>
            <h3 className={`title ${feature.color}`}>{feature.title}</h3>
            <p>{feature.text}</p>
            <button className={`btn ${feature.color}`}>
             <IoMdDownload/> BUTTON
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardBody;
