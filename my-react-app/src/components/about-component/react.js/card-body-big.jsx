import React from "react";
import "../css/card-body-big.css";

const CardBodyBig = () => {

    // 📌 Static data until backend will be ready
    const principles = [
        {
            id: 1,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil suscipit cupiditate expedita hic earum vero sint, recusandae itaque, rem distinctio."
        },
        {
            id: 2,
            text: "Totam porro sit, obcaecati quos quae iure tenetur, soluta voluptatem sapiente rerum ipsam delectus corporis voluptates voluptate, nulla mollitia pariatur."
        },
        {
            id: 3,
            text: (
                <>
                    Enim quas nesciunt sequi odit, ut{" "}
                    <a href="#">quisquam vitae commodi</a> animi placeat nihil saepe
                    magnam aliquam, vero harum quae doloribus aut nostrum veniam alias!
                </>
            )
        },
        {
            id: 4,
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil suscipit cupiditate expedita hic earum vero sint, recusandae itaque, rem distinctio."
        },
    ];

    return (
        <div className="about-container">
            <h2 className="title">About Us</h2>
            <p className="subtitle">
                Discover our projects and the rigorous process of creation. Our
                principles are creativity, design, experience and knowledge.
            </p>

            <div className="content">

                <div className="left">
                    <h3 className="section-title">Our Principles</h3>

                    {principles.map((item, index) => (
                        <div className="principle-item" key={item.id}>
                            <div className="circle">{index + 1}</div>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>

                <div className="right">
                    <h3 className="section-title">Know us</h3>

                    <p className="dropcap">
                        Fugit recusandae dolores, hic suscipit necessitatibus nobis culpa,
                        quidem inventore molestias autem eligendi provident, natus eius
                        reprehenderit repudiandae velit! Aut qui deleniti autem nobis laborum
                        sapiente tempore, facere cumque tempora laudantium porro illo officiis
                        culpa labore magnam itaque eos quia asperiores officia voluptas voluptatem
                        est molestias architecto magni corporis. Cupiditate, voluptates, saepe.
                    </p>
                    <p>
                        Explicabo numquam quam amet vel laboriosam odio eaque quos esse cumque,
                        nam deserunt ducimus odit libero asperiores necessitatibus, soluta corporis dignissimos.
                        Delectus temporibus iusto debitis obcaecati accusantium, dolorum ad doloremque maiores
                        optio ut magni praesentium cupiditate dolore.
                    </p>
                    <p>
                        Nulla delectus tempora ab ipsum molestias dolorem explicabo nihil.
                        Officia quia iusto sint, iure nemo vitae aperiam, corrupti aliquid fugit,
                        qui dolore voluptatibus eos quisquam obcaecati, omnis iste illum optio. Maxime atque hic vero.
                        Doloribus eius sit laborum fugiat necessitatibus tempora facilis facere cumque, ipsum nam, temporibus,
                        perferendis non ratione!                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardBodyBig;
