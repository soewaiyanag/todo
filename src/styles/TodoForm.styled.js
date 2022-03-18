import styled from "styled-components";
import Box from "./Box";

const StyledTodoForm = styled(Box).attrs({ as: "form" })`
  display: flex;
  gap: 1rem;
`;

export default StyledTodoForm;
