import { Button, Card as CardContainer } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 40rem;
  margin: auto;

  h1,
  h2 {
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
  }
`;

export const Card = styled(CardContainer)`
  padding: 1rem 1.5rem;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
`;

export const ButtonCheckPrice = styled(Button)`
  display: block;
  margin: auto;
  margin-top: 1.5rem;
`;
