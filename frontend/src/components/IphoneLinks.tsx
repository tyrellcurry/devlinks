import styled from "styled-components";
import Iphone from "../images/illustration-phone-mockup-empty.svg";

const IphoneLinks = () => {
  const Container = styled.section`
    background-color: #a6b5ff49;
    background-image: url(${Iphone});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    height: 631px;
    width: 307px;
  `;

  // Create an array of elements you want to render
  const elements = ['one', 'two', 'three'];

  return (
      <>
          <Container>
              {elements.map((element, index) => (
                  // Each element of the array is rendered as a separate JSX element
                  <div key={index}>{element}</div>
              ))}
          </Container>
      </>
  );
};

export default IphoneLinks;
