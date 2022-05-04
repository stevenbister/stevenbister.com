const HomeContent = ({ intro, links }) => {
  return (
    <div className="container cover">
      <div className="stack align-center">
        <p className="content">{intro}</p>

        <ul className="content d-flex">
          {Object.entries(links).map(([key, value]) => (
            <li key={key}>
              <a href={value}>{key}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default HomeContent;
