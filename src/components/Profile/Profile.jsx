import "./Profile.css";
//TODO unused component FOR NOW
function Profile(props) {
  const clickHandler = () => {};

  return (
    <div className="character-card">
      <h2 className="character-name">
        Name: {props.firstName} {props.lastName}
      </h2>
      <p>Age: {props.age}</p>
      <button onClick={clickHandler}>View Full Profile</button>
    </div>
  );
}

export default Profile;
