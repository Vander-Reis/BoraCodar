import { ContainerControls } from "./styles";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs"
import {IoPlayForward, IoPlayBack} from "react-icons/io5"

interface MusicControlsProps {
    play(): void;
    isPlaying: boolean;
    pause(): void;
    next(): void;
    back(): void;
}

export function MusicControls({play, isPlaying, pause, next, back}: MusicControlsProps) {

    return (
        <ContainerControls>
            <button><IoPlayBack size={28} color={"#E1E1E6"} onClick={back}/></button> 
            
            { isPlaying === false ?
                <button><BsFillPlayFill size={28} color={"#E1E1E6"} onClick={play}/></button>
                : <button><BsPauseFill size={28} color={"#E1E1E6"} onClick={pause}/></button>
            }
            
            <button><IoPlayForward size={28} color={"#E1E1E6"} onClick={next}/></button>

        </ContainerControls>
    )

}