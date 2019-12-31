import styled from "styled-components";
import Card from "@material-ui/core/Card";

export default styled(Card)`
  && {
    width: calc(100% - 30px);
    height: 300px;
    float : left;
    margin : 10px 0 10px 10px;
    margin-bottom: 20px;
  }
`;