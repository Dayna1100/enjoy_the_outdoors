import "./Nav.css";

const Navigation = ({ page, setPage }) => {
  return (
    <nav>
      <img src="./pics/campinggreen.jpg" width="30" height="30" alt="Our logo"></img>
    <section>
       <ul>
        <li onClick={() => setPage("home")}>
          <a href="/home" onClick={(event) => event.preventDefault()}>
            Home Page
          </a>
        </li>

        <li onClick={() => setPage("nationalParks")}>
          <a href="/nationalParks" onClick={(event) => event.preventDefault()}>
            National Parks
          </a>
        </li>

        <li onClick={() => setPage("mountains")}>
          <a href="/mountains" onClick={(event) => event.preventDefault()}>
            Mountains Information
          </a>
        </li>
      </ul>
    </section>
    </nav>
    
  );
};
export default Navigation;
