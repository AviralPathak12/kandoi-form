import React from "react";
import {  Container } from "react-bootstrap";

const Layout = ({
  title = "Title",
  description = "Description",
  children,
  className,
}) => (
  <div>
  <div className="p-3 mb-2  text-blue">
    <Container>
      <div className="row">
      <h1 className="col-8 nav-header-1">{title}</h1>
      <p className="col-4" >{description}</p>
      </div>
    </Container>
  </div>
  <Container>
    <div className={className}>{children}</div>
  </Container>
</div>
    //  <div>
       
    //      <Container fluid={true} >
    //   <h1 className="nav-header-1 text-left-center">{title}</h1>
    //   <p>{description}</p>
      
    //   </Container>
   
    //  <Container>
    //   <div className={className}>{children}</div>
    // </Container>
    //  </div>
  
);

export default Layout;
