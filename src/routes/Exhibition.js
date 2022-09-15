import React from "react";


  
function createMarkup() {
    return{
        __html:
        '<iframe src="src/IndexTemplate/exhibitionPage/exhi.html"></iframe>',
    };

    // return(
    //     <div>
    //     <iframe src='./IndexTemplate/exhibitionPage/exhi.html' title='exhibiton' width="100%" height="500px"></iframe>
    //   </div>
    // )
};

export default function Exhibition(){
    return <div dangerouslySetInnerHTML={createMarkup()} />;
  }
