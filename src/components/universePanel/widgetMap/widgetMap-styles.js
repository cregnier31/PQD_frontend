import styled from "styled-components";
import Card from "@material-ui/core/Card";

export default styled(Card)`
  && {
    width: calc(100% - 15px);
    height: 400px;
    float : left;
    margin-left: 15px;
    margin-top: 50px;
    margin-bottom: 60px;
    boxShadow: 'none';
  }
`;
