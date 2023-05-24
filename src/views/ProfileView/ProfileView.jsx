import { useCallback, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { ReactComponent as Arrow } from "assets/Arrow.svg";

import styles from "views/ProfileView/ProfileView.module.scss";

function ProfileView() {
  const params = useParams();

  const [character, setCharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCharacter = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${params.characterId}`
      );
      // const response = await fetch(
      //   "https://rickandmortyapi.com/api/cher/?page=1"
      // ); // to test loading and error messages

      if (!response.ok) {
        throw new Error("Something went wrong =(");
      }

      const data = await response.json();

      setCharacter(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [params.characterId]);

  useEffect(() => {
    fetchCharacter();
  }, [fetchCharacter]);

  let content = <p>No movies were found</p>;

  let type = "N/A";

  if (character) {
    if (character.type) {
      type = character.type;
    }
    content = (
      <div className={styles["profile-container"]}>
        <h2 className="character-name">{character.name}</h2>
        <div className={styles["data-container"]}>
          <img
            src={character.image}
            alt="avatar"
            className={styles["profile-image"]}
          />
          <div className={styles["profile-data"]}>
            <div>
              <p>Status</p>
              <h3>{character.status}</h3>
            </div>
            <div>
              <p>Species</p>
              <h3>{character.species}</h3>
            </div>
            <div>
              <p>Gender</p>
              <h3>{character.gender}</h3>
            </div>
            <div>
              <p>Subspecies Type</p>
              <h3>{type}</h3>
            </div>
            <div>
              <p>Origin</p>
              <h3>{character.origin.name}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    content = <p className={styles["status-message"]}>{error}</p>;
  }

  if (isLoading) {
    content = <p className={styles["status-message"]}>Loading...</p>;
  }

  return (
    <div className={styles["profile-view"]}>
      <Link to="..">
        <Arrow className={styles.arrow} />
      </Link>
      {content}
    </div>
  );
}

export default ProfileView;
