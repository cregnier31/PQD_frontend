import styled from "styled-components";
import TextField from '@material-ui/core/TextField';

export const StyledContainer = styled.div`
    padding: 15px;
    box-sizing:border-box;
`;

export const StyledInput = styled(TextField)`
    &&{
        display: flex;
    }
`;

export const StyledUl = styled.ul`
    position: relative;
    background-color: white;
    box-shadow: 0px 10px 10px rgb(200,200,200);
    top: 0px;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0px;
    align-items: center;
    align-content: center;
    li {
        list-style-type: none;
        min-width: 100%;
        font-size: 1rem;
        box-sizing: border-box;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        font-weight: 400;
        line-height: 1.5;
        padding-top: 6px;
        letter-spacing: 0.00938em;
        padding-bottom: 6px;
        :hover {
            background-color: #555;
        }
    }
`;