import React, { useState } from "react";

export default function withLoading(WrappedComponent) {
  return (props) => {
    
    const [fetching, setState] = useState(true);

    setTimeout(() => {
      setState(false);
    }, 1000);

    let newProps = {
      ...props,
      age: 20,
    };
    
    newProps.name = 'asdad';
    return (
      <div>
        {fetching ? <p>loading .... </p> : <WrappedComponent {...newProps} />}
      </div>
    );
  };
}
