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
`;

export const NeuBoxText = styled.a`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #00A0C6;
    a:hover {
        color: #00A0C6;
        text-decoration: none;
        cursor: pointer;
    }
`;