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
    return(
        <div className="work-experience">
        <h3>Work experience</h3>
        <div className="job">
            <p>
                <span>Name of employer:</span> Individual entrepreneur<br/>
                <span>Dates of employment:</span> 2020 - present<br/>
                <span>Job title:</span> Owner<br/>
                <span>Project/Role description:</span> Buy goods on the foreign markets. Organise delivery to Ukraine from origin country of goods.
                Sale goods on marketplaces <a target="_blank" rel="noreferrer" href="https://rozetka.com.ua/" >ROZETKA</a> and <a href="https://prom.ua/" rel="noreferrer" target="_blank">Prom.</a>
            </p>
        </div>
        <div className="job">
            <p>
                <span>Name of employer:</span> <a href="https://etool.com.ua/" rel="noreferrer" target="_blank">ORCS Ltd.</a><br/>
                <span>Dates of employment:</span> 2019 - 2021<br/>
                <span>Job title:</span> Supply manager<br/>
                <span>Project/Role description:</span> Preparation of transportation documentation and search for carriers. Conclusion of contracts with suppliers and carriers and support of concluded contracts.
                Cooperation with transport companies and brokers.
                Calculation of the cost of goods from each delivery.
            </p>
        </div>
        <div className="job">
            <p>
                <span>Name of employer:</span> <a href="https://deepnet.ua/" rel="noreferrer" target="_blank">DeepNet Ukraine Ltd.</a><br/>
                <span>Dates of employment:</span> 2017 - 2019<br/>
                <span>Job title:</span> Supply manager<br/>
                <span>Project/Role description:</span> Market analysis, search for suppliers.
                Conducting negotiations and concluding contracts with suppliers and monitoring concluded contracts.
                Formation of orders, control of shipments.
                Preparation of documents for customs clearance.
                Cooperation with transport companies and brokers.
            </p>
        </div>
        <div className="job">
            <p>
                <span>Name of employer:</span> <a href="https://etalonk.com/" rel="noreferrer" target="_blank">Etalon-K Ltd.</a><br/>
                <span>Dates of employment:</span> 2016 - 2017<br/>
                <span>Job title:</span> Assistant of Supply manager<br/>
                <span>Project/Role description:</span> Formation and verification of accompanying documentation.
                Preparation of a package of documents for customs clearance of goods.
                Creation of assortment of nomenclature.
            </p>
        </div>
        <div className="job">
            <p>
                <span>Name of employer:</span> <a href="https://speak-up.com.ua/" rel="noreferrer" target="_blank">SpeakUP</a><br/>
                <span>Dates of employment:</span> 2015 - 2016<br/>
                <span>Job title:</span> Sales manager<br/>
                <span>Project/Role description:</span> Customer consultation.
                Sale of English language courses.
            </p>
        </div>
    </div>
    )

}