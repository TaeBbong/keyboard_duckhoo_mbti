import Button from "./components/button";
import Container from "./components/container";

function App() {
  return (
    <BackgroundContainer color="lightblue" height="100vh">
      <CardContainer color="white" width="30%" height="50vh">
        <Button />
        <Button danger />
      </CardContainer>
    </BackgroundContainer>
  );
}

function BackgroundContainer({ children, width, height, color }) {
  return (
    <Container color={color} width={width} height={height}>
      {children}
    </Container>
  );
}

function CardContainer({ children, width, height, color }) {
  return (
    <Container color={color} width={width} height={height}>
      {children}
    </Container>
  );
}

export default App;
