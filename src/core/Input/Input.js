import React from "react";
import "../../index.css";

const FunctionComponent = (props) => {
  const { title,setValue } = props;
  return (
    <div>
      <p>{title}</p>
      <input 
      onChange={(e)=>(
        setValue(e.target.value)
        // ,console.log(e.target.value)
      )}
      />
    </div>
  );
};

export const Input = React.memo(FunctionComponent);
export default Input;