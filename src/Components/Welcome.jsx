import Date from "./Date";
function Welcome(props) {
  return (
    < >
      <h1>hello, {props.name}  your {props.age} yeras {props.phoneNumber}</h1>
      <h3>
        <Date></Date>
      </h3>
    </>
  );
}

export default Welcome;
