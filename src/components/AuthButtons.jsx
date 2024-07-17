import { Link } from 'react-router-dom';
import { Button } from './ui/button';

function AuthButtons() {
  return (
    <div>
      {/* {true == 'true' ? (
        <Button variant="ghost">Sign Out</Button>
      ) : ( */}
      <>
        <Link to="/login">
          <Button variant="ghost">Login</Button>
        </Link>
        <span className="mx-1">/</span>
        <Link to="/register">
          <Button variant="ghost">Register</Button>
        </Link>
      </>
      {/* )} */}
    </div>
  );
}
export default AuthButtons;
