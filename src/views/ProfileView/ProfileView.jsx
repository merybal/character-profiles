import styles from "views/ProfileView/ProfileView.module.scss";

function ProfileView(props) {
  return (
    <div className={styles["profile-view"]}>
      <h2 className="character-name">Rick Sanchez{props.name}</h2>
      <div className={styles["profile-container"]}>
        <img
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="avatar"
          className={styles["profile-image"]}
        />
        <div className={styles["profile-data"]}>
          <div>
            <p>Status</p>
            <h3>Alive</h3>
          </div>
          <div>
            <p>Species</p>
            <h3>Human</h3>
          </div>
          <div>
            <p>Gender</p>
            <h3>Male</h3>
          </div>
          <div>
            <p>Type</p>
            <h3>No idea</h3>
          </div>
          <div>
            <p>Origin/Location</p>
            <h3>Earth</h3>
          </div>
        </div>
      </div>
      <div>
        <p>First Appeared in (primer episodio del array episodes)</p>
      </div>
    </div>
  );
}

export default ProfileView;
