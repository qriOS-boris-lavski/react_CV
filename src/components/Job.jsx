export function Job ({name, link, title, description}){
    return(
        <div className="job">
            <span>Name of employer:</span><a href={link} target="_blank" rel="noreferrer">{name}</a><br/>
            <span>Job title:</span>{title}<br/>
            <span>Project/Role description:</span>{description}
    </div>
    )
}