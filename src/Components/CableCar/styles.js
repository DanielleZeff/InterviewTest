import styled from "styled-components";

export const LogoContainer = styled.div`
  @media (max-width: 700px) {
    margin-left: -1rem;
  }
  @media (max-width: 600px) {
    margin-left: 3rem;
  }
`;

export const Title = styled.div`
  justify-content: center;
  margin-left: 40%;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 1%;
    margin-left: 8rem;
  }
`;

export const Text = styled.text`
  font-size: 2.8rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1rem;
  font-family: Montserrat, sans-serif;
  text-align: right;
  width: 100%;
  margin-left: 2%;
  @media (max-width: 700px) {
    margin-left: -1rem;
  }
  @media (max-width: 600px) {
    margin-left: 3rem;
  }
`;

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: red;
  top: 0%;
  left: 0%;
`;

export const TextStudents = styled.text`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  margin-left: -20%;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    margin-left: -14rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const TextMonitors = styled.text`
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  text-align: left;
  margin-left: -20%;
  @media (max-width: 700px) {
    font-size: 1.3rem;
    margin-left: -8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

export const InputStudents = styled.div`
  @media (max-width: 700px) {
    margin-left: -5.5rem;
  }
`;

export const InputMonitors = styled.div`
  @media (max-width: 700px) {
    margin-left: -6rem;
  }
`;
