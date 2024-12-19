import React from "react";

const Details = (props) => {
  return (
    <React.Fragment>
      <div dangerouslySetInnerHTML={{ __html: props.data }} />
    </React.Fragment>
  );
};

export default Details;
