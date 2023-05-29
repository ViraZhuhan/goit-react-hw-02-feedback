import styled from '@emotion/styled';

export const ButtonList = styled.div`
display: flex;
gap: 10px;
justify-content: space-between;
margin-bottom: 16px;
`

export const Button = styled.button`
padding: 5px 8px;

cursor: pointer;

font-size: 20px;
font-weight: bold;

border: ${props => `1px solid ${props.theme.colors.grey}`};
background-color: transparent;

:hover {
    background-color: ${props => `${props.theme.colors.blue}`};
    transform: scale(1.1);
}
`

