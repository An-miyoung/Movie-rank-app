// import React from "react";

// class Detail extends React.Component {
//   componentDidMount() {
//     const { history, location } = this.props;
//     if (location.state === undefined) {
//       history.push("/");
//     }
//   }
//   render() {
//     return <div>Detail~~</div>;
//   }
// }

// export default Detail;

import { useHistory, useLocation } from "react-router";
import React from "react";

export default function Detail() {
  const history = useHistory();
  console.log("history : ", history);
  const location = useLocation();
  console.log("location: ", location);

  if (location.state === undefined) {
    history.push("/");
  }

  if (location.state) {
    return <span>{location.state.title}</span>;
  } else {
    return null;
  }
}
