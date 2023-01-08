import styled from "styled-components";

export const ContainerCard = styled.div`
    width: 360px;
    height: 267px;
    background: #2A2141;
    margin: 100px auto;
    border-radius: 12px;
    padding: 29px;

    .ProgressRoot {
        position: relative;
        overflow: hidden;
        background: #D9D9D9;
        border-radius: 99999px;
        
        width: 300px;
        margin: auto;
        height: 10px;
        margin-top: 29px;

        transform: translateZ(0);
    }

    .ProgressIndicator {
        background-color: purple;
        width: 100%;
        height: 100%;
        transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
    }
`

export const ContentInfo = styled.div`
    display: flex;
    gap: 29px;
    align-items: center;
    width: 300px;
    margin: auto;

    > .info {
        h2 {
            font-weight: 700;
            font-size: 24px;
            line-height: 100%;
            color: #E1E1E6;
        },
        p {
            font-weight: 400;
            font-size: 20px;
            line-height: 100%;
            margin-top: 10px;
            color: rgba(165, 162, 176);
        }
    }

`

export const ContainerImg = styled.div`
    width: 84px;
    height: 84px;

    img {
        width: 84px;
        height: 84px;
        border-radius: 6px;
    }
`

export const ContainerDuration = styled.div`
    width: 300px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 10px;
    color: #C4C4CC;

`