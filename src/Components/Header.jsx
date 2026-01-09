import { Link ,NavLink} from "react-router-dom";

export default function Header() {
  return (

   <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
      <Link to="/" className="logo">Ryze.Ai</Link>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
       <div className="navbar-nav">
       <NavLink to="/">Home</NavLink>  
          <NavLink to="/features">Features</NavLink>
           <NavLink to="/pricing">Pricing</NavLink>
           <NavLink to="/contact">Contact</NavLink>
           
      </div>
      <div className="d-flex ms-auto">
         <Link to="/pricing"><button type="button" className="btn btn-success ">Get Started</button></Link>
     </div>
    </div>
  </div>
</nav>
   
  );
}
 
