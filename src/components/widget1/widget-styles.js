import styled from "styled-components";
import Card from "@material-ui/core/Card";

export default styled(Card)`
  && {
    width: calc(100% - 30px);
    height: 300px;
    color: black;
    background-color: red;
    margin-top: 100px;
    margin-bottom: 20px;
  }
`;