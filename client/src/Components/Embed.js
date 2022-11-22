import React from "react";
import Iframe from 'react-iframe'
import "./Embed.css";
const Embed = () => {








  return (
    <div className="container-fluid  justify-content-center  mt-4">
      <div className="embed-responsive  embed-responsive-16by9 mt-4">
       
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSet51pCrObr_mybS52QPEOV6wXTQOrEMqN8dbfApbPu8H-EHw/viewform?embedded=true"
          width="100%"
          height="1000px"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe> */}

        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfuHBxi559p47AIcpoRARsDqPilozr5Y8i_ZSBfkT_8HYEj-Q/viewform?embedded=true" width="640" height="1385" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}





        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdzxGtZYw9RTOtb9KBNSMN64J0NUttr_vtW7YMJRHjIM_T3Jw/viewform?embedded=true"
          width="100%"
          height="4900"
         
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          
        >
          Loading…
        </iframe>

        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfuHBxi559p47AIcpoRARsDqPilozr5Y8i_ZSBfkT_8HYEj-Q/viewform?embedded=true"
          width="100%"
          height="1385"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
        
      </div>
    </div>
  );
};

export default Embed;
