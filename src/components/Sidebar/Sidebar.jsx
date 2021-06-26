import "./Sidebar.css"

export default function Sidebar() {
    return (
        <div className="sidebar">
         <div className="sidebarItem">

             <span className="sidebarTitle">
                 ABOUT ME
             </span>
             <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="Error" />
             <p>Made By: Md. Istiyak Ahmed</p>
             <p>Welcome and Post your Blog Here</p>
             <p>Feel Free to contact Me</p>
             <small>01521474248</small>
             <small>Email: istiyak.anonto@gmail.com</small>
         </div>
         <div className="sidebarItem">
         <span className="sidebarTitle">
                 CATEGORIES
             </span>
             <ul className="sidebarList">
                 <li className="sidebarListItem">
                    Life 
                 </li>
                 <li className="sidebarListItem">
                    Music 
                 </li>
                 <li className="sidebarListItem">
                    Style 
                 </li>
                 <li className="sidebarListItem">
                    Tech 
                 </li>
                 <li className="sidebarListItem">
                    Sports
                 </li>
                 <li className="sidebarListItem">
                    Religious
                 </li>
             </ul>

         </div>
         <div className="sidebarItem">
         <span className="sidebarTitle">
                 Follow US
             </span>
             <div className="sidebarSocial">
             <i className="sidebarIcon fab fa-facebook-square"></i>
        <i className="sidebarIcon fab fa-instagram-square"></i>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
        <i className="sidebarIcon fab fa-twitter-square"></i>
             </div>
         </div>
        </div>
    )
}
