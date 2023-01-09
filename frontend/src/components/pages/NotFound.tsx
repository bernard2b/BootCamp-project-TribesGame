import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>Stop your spaceship, traveller!</h1>
      <h3>
        This space station is under construction. You might want to come back
        later, or travel in time to its completion.
      </h3>
      <p>
        Until then, please follow our patrol ships back to the closest space
        station:
      </p>
      <Link to="/">Back to the galaxy</Link>
    </div>
  );
}
