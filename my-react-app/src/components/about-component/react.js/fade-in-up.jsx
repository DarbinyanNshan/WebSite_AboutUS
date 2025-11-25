import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import "../css/fade-in-up.css";

import { FaRegLightbulb } from "react-icons/fa";
import { MdOutlineDesktopMac } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const FadeInIp = () => {
    const [open, setOpen] = useState(0);

    const approachRef = useRef(null);
    const isInView = useInView(approachRef, { once: true, margin: "-100px" });

    const visionParagraphs = [
        `Non sequi adipisci nostrum natus rem accusamus itaque repellendus illum neque! Voluptate, 
         error commodi a quaerat eveniet tenetur reiciendis nulla doloremque iusto repellat quis asperiores,
         quibusdam architecto culpa facere aliquam placeat eaque amet, nesciunt vero sunt veniam est quasi
         doloribus optio nobis alias maiores. Nulla perferendis impedit hic doloremque iusto placeat veniam distinctio error.`,
        `Tenetur numquam a, nesciunt neque odit amet, qui quibusdam natus assumenda quas omnis, 
         aspernatur quisquam nobis illum ea distinctio tempora quaerat. Aperiam cumque, eveniet similique praesentium,
         temporibus, id quis labore aspernatur quod placeat ducimus fuga consequuntur numquam autem. Voluptates repellat.`
    ];

    const items = [
        {
            icon: <FaRegLightbulb />,
            title: "Talent and creativity",
            content1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati molestiae id ipsum ipsa repudiandae.
             Voluptatum quos facilis sequi. Ullam optio eius deleniti dolore quasi doloribus ipsam.`,
            content2: `Dolores, corrupti, aliquam doloremque accusantium nemo sunt veniam est incidunt 
            perferendis minima obcaecati ex aperiam voluptatibus blanditiis eum suscipit magnam dolorum in adipisci nihil.`
        },
        {
            icon: <MdOutlineDesktopMac />,
            title: "Design and code",
            content1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit dignissimos inventore
            cupiditate expedita saepe enim nobis nostrum? Laborum, laudantium, maiores, cupiditate,
            perspiciatis at ad accusamus.`,
            content2: `Incidunt, harum itaque voluptatum asperiores recusandae explicabo maiores. 
            Alias, quos, ex impedit at error id laborum fugit architecto qui beatae molestiae 
            dolorum rem veritatis quia aliquam totam.`
        },
        {
            icon: <FaUser />,
            title: "Quality and Support",
            content1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia,
            rerum unde doloribus accusamus pariatur non expedita quibusdam velit totam obcaecati. Consequatur, 
            deserunt, asperiores quam nisi earum voluptates.`,
            content2: `Dolorum, aliquam, totam labore saepe error a eum culpa assumenda sint laudantium 
            ipsa iure ullam et dicta nesciunt repellendus optio voluptatibus 
            reprehenderit odit officia fugiat necessitatibus recusandae architecto.`
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <div className="section">
            <div className="vision">
                <h6>Our Vision</h6>

                {visionParagraphs.map((text, index) => (
                    <p key={index} className={index === 0 ? "dropcap" : ""}>
                        {text}
                    </p>
                ))}

                <div className="author">— Sundar Pichai, CEO Google Inc.</div>
            </div>
            <motion.div
                ref={approachRef}
                className="approach"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                <h6>Our Approach</h6>

                <motion.div className="accordion">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className="acc-item"
                            variants={itemVariants}
                        >
                            <motion.div
                                className={`acc-header ${open === i ? "active" : ""}`}
                                onClick={() => setOpen(open === i ? null : i)}
                            >
                                <span className="icon">{item.icon}</span>
                                {item.title}
                                <span className="arrow">
                                    {open === i ? <FaAngleDown /> : <FaAngleLeft />}
                                </span>
                            </motion.div>
                            <AnimatePresence>
                                {open === i && (
                                    <motion.div
                                        className="acc-content"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                    >
                                        <p>{item.content1}</p>
                                        <p>{item.content2}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export default FadeInIp;
