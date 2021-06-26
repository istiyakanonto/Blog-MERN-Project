import "./Topbar.css"
import { Link } from "react-router-dom";
export default function Topbar() {
    const user = true;
    return (
        <div className="top">
        <div className="topLeft">
          <i className="topIcon fab fa-facebook-square"></i>
          <i className="topIcon fab fa-instagram-square"></i>
          <i className="topIcon fab fa-pinterest-square"></i>
          <i className="topIcon fab fa-twitter-square"></i>
        </div>
        <div className="topCenter">
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">
                HOME
              </Link>
            </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">
              <Link className="link" to="/write">
                WRITE
              </Link>
            </li>
            {user && <li className="topListItem">LOGOUT</li>}
          </ul>
        </div>
        <div className="topRight">
          {user ? (
            <Link className="link" to="/settings">
              <img
                className="topImg"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
          <i className="topSearchIcon fas fa-search"></i>
        </div>
      </div>
    )
}
