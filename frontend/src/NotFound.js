import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
            <h1>Halt! You seem to be lost.</h1>
            
      <h3>
        This road is still under construction, please come back to check again
        later.
      </h3>
            <p>Until then please follow us back to the safe path:</p>
            <Link to="/">Home</Link>
    </div>
  );
}
