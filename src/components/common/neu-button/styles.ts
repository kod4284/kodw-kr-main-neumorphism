import styled from 'styled-components'; 

export const NeuBoxContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr);
    row-gap: 20px;
    column-gap: 20px;
    align-items: center;
    justify-items: center;
`;


export const NeuBox = styled.div`
    width: 6rem;
    height: 6rem;
    border-radius: 21px;
    background: linear-gradient(145deg, #273846, #202f3b);
    box-shadow:  5px 5px 10px #151e26,
             -5px -5px 10px #334a5c;

    :active {
        background: #243441;
        box-shadow: inset 5px 5px 10px #151e26,
            inset -5px -5px 10px #334a5c;

    }
`;

export const NeuBoxText = styled.a<&{ primary?: Boolean }>`
    height: 100%;
    font-size: 1.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: ${({primary = false}) => primary ? "#FF555D" : "gray"};
    :hover {
        color: #0B55F9;
        text-decoration: none;
        cursor: pointer;
    }
`;