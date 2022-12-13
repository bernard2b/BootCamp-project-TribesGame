import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
            <h1>Halt! You seem to be lost.</h1>
            
      <p>
        This road is still under construction, please come back and check again
        later.
      </p>
            <p>Until then please follow us back to the safe path:</p>
            <Link to="/">Home</Link>
    </div>
  );
}
