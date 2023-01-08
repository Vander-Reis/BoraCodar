import styled from "styled-components";

export const ContainerControls = styled.div`
    width: 300px;
    margin: auto;
    display: flex;
    margin-top: 29px;
    align-items: center;
    justify-content: center;
    gap: 50px;
    

    button {
        background: none;
        border: none;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
            svg {
                opacity: 0.8;
            }
        }
    }
`