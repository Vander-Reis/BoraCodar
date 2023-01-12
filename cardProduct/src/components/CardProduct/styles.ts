import styled from "styled-components";

export const ContainerProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 13px;

    @media (max-width: 760px) {
        flex-direction: column;
    }
`

export const ImageContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: end;

    img {
        width: 449px;
        height: 253px;
        object-fit: cover;
        position: relative;
    }

    button {
        padding: 8px 67px;
        background: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        top: 0;
        bottom: 200px;
        z-index: 2;

        @media (max-width: 760px) {
           bottom: 300px;
        }
    
        img {
            width: 33px;
            height: 22px;
        }

        .buttonClose {
            width: 16px;
            height: 16px;
        }
    }

`

export const ContentProduct = styled.div`
    width: 300px;
    height: 82px;
    display: flex;
    flex-direction: column;

    span {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 100%;
        opacity: 0.6;
        margin-bottom: 12px;

        &:nth-last-child(2) {
            font-size: 16px;
            margin-top: 12px;
        }
    }

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 32px;
        line-height: 100%;
    }

    button {
        background: transparent;
        width: 148px;
        height: 32px;
        padding: 8px 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        border-radius: 999px;
        border: 0.5px solid rgba(39, 26, 69, 1);
        color: #271A45;
        width: fit-content;
        cursor: pointer;
        transition: all .2s;

        &:hover {
            color: #D9CDF7;
            background: #271A45;
        }
    }

`