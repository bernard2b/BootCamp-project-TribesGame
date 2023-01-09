import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Stop your spaceship, traveller!</h1>
      <br></br>
      <h3>
        This space station is under construction. You might want to come back
        later, or travel in time to its completion.
      </h3>
      <h3>
        Until then, please follow our patrol ships back to the closest space
        station:
      </h3>
      <br></br>
      <Link to="/">Back to the galaxy</Link>
    </div>
  );
}
