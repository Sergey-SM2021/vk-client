import {styled} from "@mui/material/styles";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const TextArea = styled(TextareaAutosize)(({theme}) => ({
    border: "none",
    width: "100%",
    outline: "none",
    resize: "none",
    fontWeight: 500,
    fontSize: "1.2rem",
    lineHeight: "1.5rem",
    padding:0
}))