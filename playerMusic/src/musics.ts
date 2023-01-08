import album1 from './assets/album1.jpg';
import album2 from './assets/album2.jpg';
import music1 from './music/musica1.mp3';
import music2 from './music/musica2.mp4';

interface MusicsProps {
    name: string;
    band: string;
    imageSrc: string;
    musicSrc: string;
}

export const musics: MusicsProps[] = [
    {
        name: "Acorda Devinho",
        band: "Banda Rocketseat",
        imageSrc: album1,
        musicSrc: music1
    },
    {
        name: "Teste",
        band: "teste",
        imageSrc: album2,
        musicSrc: music2
    }
]

