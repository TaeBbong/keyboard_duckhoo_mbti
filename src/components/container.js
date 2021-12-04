import styled from "styled-components";

const Container = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  background-color: ${(props) => props.color || "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Container;
