import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOPS!!</h1>
      <h3>{error.status + " " + error.statusText}</h3>
    </div>
  );
}

export default Error;
