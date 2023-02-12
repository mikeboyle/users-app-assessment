import './User.css';

const User = ({ user, searchInput, isExpanded, handleToggleExpanded}) => {
  const { about, age, company, country, name, photo } = user;

  return (
    <>
    {!searchInput ? 
    <section className="User">
      <div className="User__avatar">
        <img src={photo} alt={name} />
      </div>
      <div className="User__info">
        <ul>
          <li className="User__name">{name}</li>
          <li>Age: {age}</li>
          <li>Country: {country}</li>
          <li>Company: {company}</li>
        </ul>
        {isExpanded && <div className="User__about">
          <h3>About {name.split(' ')[0]}:</h3>
          <p>{about}</p>
        </div>}
      </div>
      <div className="User__controls">
        <button onClick={handleToggleExpanded}>
          {isExpanded ? "show less" : "show more"}
        </button>
      </div>
    </section> :
    /* Not sure if I misunderstood this requirement:
    Implement the SearchBar functionality.  
    When the user types in the search bar, 
    show only the users whose name, country, or company match the user input. 
    That's why I added this ternary.
    */ 
    <section className="User">
    <div className="User__info__filtering">
      <ul>
        <li className="User__name">{name}</li>
        <li>Country: {country}</li>
        <li>Company: {company}</li>
      </ul>
    </div>
  </section>}
    </>
  );
};

export default User;
