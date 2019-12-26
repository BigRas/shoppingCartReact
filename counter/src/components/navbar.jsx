import React from "react";

// stateless functional component: when there is no method, we do it with a function instead of class
const NavBar = ({ totalNumber }) => {
  console.log("NavBar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
        <span className="badge badge-pill  badge-secondary">{totalNumber}</span>
      </a>
    </nav>
  );
};

export default NavBar;

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar
//           <span className="badge badge-pill  badge-secondary">
//             {this.props.totalNumber}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

// export default NavBar;
