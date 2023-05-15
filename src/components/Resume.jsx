import { useState } from "react"
import { Job } from "./Job"

export function Image ({imgSrc}){
    return (
        <div className="img-box">
        <img src={imgSrc} alt="candidate"/>
    </div>
    )
}

export function Contacts() {
    return(
        <div className="contacts-wrapper">
        <div className="contacts">
            <h4>Contact</h4>
            <dl>
                <dt>Address</dt>
                <dd>Kyiv, Ukraine</dd>
                <dt>Phone</dt>
                <dd><a href="tel:+380635820966">+380635820966</a></dd>
                <dt>E-mail</dt>
                <dd><a href="mailto:v.borislavski@gmail.com">v.borislavski@gmai.com</a></dd>
                <dt>Linkedin</dt>
                <dd><a href="https://www.linkedin.com/in/vasyl-borislavski-590a97151/">www.linkedin.com/borislavski</a></dd>
            </dl>
        </div>
        <div className="languages">
            <h4>Languages</h4>
            <p className="language">Ukrainian - C2</p>
            <p className="language">English - B2</p>
        </div>
    </div>
    )
}

export function Experience() {

    const [jobs, setJobs] = useState([
        {
            name: "Individual entrepreneur",
            link: "https://prom.ua/",
            title: "Owner",
            description: "Buy goods on the foreign markets. Organise delivery to Ukraine from origin country of goods. Sale goods on marketplaces ROZETKA and Prom."
        },
        {
            name: "ORCS Ltd.",
            link: "https://etool.com.ua/",
            title: "Supply manager",
            description: "Preparation of transportation documentation and search for carriers. Conclusion of contracts with suppliers and carriers and support of concluded contracts. Cooperation with transport companies and brokers. Calculation of the cost of goods from each delivery."
        },
        {
            name: "DeepNet Ukraine Ltd.",
            link: "https://deepnet.ua/",
            title: "Supply manager",
            description: "Market analysis, search for suppliers. Conducting negotiations and concluding contracts with suppliers and monitoring concluded contracts. Formation of orders, control of shipments. Preparation of documents for customs clearance. Cooperation with transport companies and brokers."
        },
        {
            name: "Etalon-K Ltd.",
            link: "https://etalonk.com/",
            title: "Assistant of Supply manager",
            description: "Formation and verification of accompanying documentation. Preparation of a package of documents for customs clearance of goods. Creation of assortment of nomenclature."
        },
        {
            name: "SpeakUP",
            link: "https://speak-up.com.ua/",
            title: "Sales manager",
            description: "Customer consultation. Sale of English language courses."
        }
    ])

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, link, title, description } = e.target.elements;
        const newJob = {
            name: name.value,
            link: link.value,
            title: title.value,
            description: description.value,
        };
        setJobs([...jobs, newJob]);
        name.value = "";
        link.value = "";
        title.value = "";
        description.value = "";
      };

    return(
        <div className="work-experience">
            <h3>Work experience</h3>
            {jobs.map((job, index) => (
                <Job key={index} {...job} />
             ))}

             <h4>Add a new job:</h4>
             <form onSubmit={handleSubmit}>
                <div className="form-input">
                  <label htmlFor="name">Name of employer:</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-input">
                  <label htmlFor="link">Link on employer's website:</label>
                  <input type="url" id="link" name="link" required />
                </div>
                <div className="form-input">
                  <label htmlFor="title">Job title:</label>
                  <input type="text" id="title" name="title" required />
                </div>
                <div className="form-input">
                  <label htmlFor="description">Project/Role description:</label>
                  <textarea id="description" name="description" required />
                </div>
                
                
                <button type="submit">Add the job</button>
              </form>
        </div>
    )

}