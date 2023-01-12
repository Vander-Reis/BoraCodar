import { useState } from "react";
import { CardProduct } from "./components/CardProduct";
import { Container } from "./styles";

export function App() {

  const [ isOpen, setIsOpen ] = useState(false);

  function handleRotate() {
    setIsOpen(true);
  }

  function handleStop() {
    setIsOpen(false);
  }

  return(
    <Container>
        <CardProduct 
          code="42404"
          description="Sofá Margot II - Rosé"
          price={(4000).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })
        }
          isActive={isOpen}
          rotation={handleRotate}
          close={handleStop}
        />
    </Container>
  )
}

