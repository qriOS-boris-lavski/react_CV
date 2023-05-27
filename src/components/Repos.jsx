import { useState, useEffect } from "react";

function Repos() {
    const [repos, setRepos] = useState([]);

    const userName = 'qriOS-boris-lavski';
    const token = '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';

    useEffect(() => {
       fetch(`https://api.github.com/users/${userName}/repos`, {
          headers: {
            Authorization: `token: ${token}`,
          },
        })
          .then((result) => result.json())
          .then((data) => {
            console.log(data)
            if (Array.isArray(data)) {
              setRepos(data);
            } else {
              console.error('Failed to fetch repos:', data);
            }
          })
          .catch(console.error);
      }, [userName, token]);

      return(
        <div className="my-projects">
            <h3>My Projects</h3>
            <ul className="my-projects">
                {repos.map((repo) => (
                    <li key={repo.id}>
                        <a className="repo-link" href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    <p className="description">{repo.description}</p>
                    </li>
              ))}
            </ul>
        </div>
      )


}

export default Repos