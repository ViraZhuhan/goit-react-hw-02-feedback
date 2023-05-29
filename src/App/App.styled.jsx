import styled from '@emotion/styled';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  gap: 20px;

  padding: 35px;
  font-size: 40;
  color: ${props => `${props.theme.colors.primaryText}`};
`;
