// import { Children } from "react";

export const MyDiv = ({children}) => {
    console.log(children)
  return (
    <div className="firstCls" style={{border:"2px solid red"}}>
      <div className="secondCls">
       {children}
      </div>
    </div>
  );
};
