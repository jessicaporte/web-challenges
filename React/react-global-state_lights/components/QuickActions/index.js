import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({
  turnAllLightsOn,
  turnAllLightsOff,
  lights,
}) {
  //b pase las funciones de App para usarlas para prender o apargar luves
  // llame tmb lights para usar esta funcion B1 para deshabilitar botones de  prender apagar

  //verifican si todas las luces están encendidas o apagadas, respectivamente.
  // Utilizan el método .every(), que devuelve true si todos los elementos del arreglo cumplen con la condición proporcionada.
  //disabled={allLightsOff} y disabled={allLightsOn}: Los botones estarán deshabilitados si todas las luces están apagadas o encendidas, respectivamente.
  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);

  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={turnAllLightsOff} //llamar a la funcion para que devuelva
        disabled={allLightsOff} // este botón se desactiva si ya están todas apagadas
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={turnAllLightsOn} //llamar a la funcion para quw deuelva
        disabled={allLightsOn} //  este botón se desactiva si ya están todas prendidas
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}

/* conectado con App 
paso 3:  ### Creating the Quick Actions ,
B. Pasar las funciones a QuickActions 
B 1. Hacer que los botones se desactiven cuando la acción no tenga efecto:
El botón "Turn all lights off" debe deshabilitarse si todas las luces ya están apagadas. 
El botón "Turn all lights on" debe deshabilitarse si todas las luces ya están encendidas. */
