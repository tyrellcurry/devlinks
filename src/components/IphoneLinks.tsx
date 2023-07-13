import styled from "styled-components"
import Iphone from "../images/illustration-phone-mockup-empty.svg"

const IphoneLinks = () => {
  const Container = styled.section`
    background-color: red;
  `;
  return (
    <>
      <Container>
       <img src={Iphone} alt="" /> 
        </Container>  
    </>
  )
}
export default IphoneLinks