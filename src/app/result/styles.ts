import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const Price = styled.span`
  border-radius: 40px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
  background-color: #068170;
  font-size: 1.3rem;
  padding: 0.5rem 1.2rem;
  margin: 0.5rem 0;
`;

export const Label = styled.span`
  font-size: 0.75rem;
`;
