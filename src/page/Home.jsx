import React, { useState } from "react";

export default function Home() {
  const InitialValue = { contadorUno: 1, contadorDos: 2, contadorTres: 3 };
  const [counter, setCounter] = useState(InitialValue);
  const { contadorUno, contadorDos, contadorTres } = counter;

  const Increment = () => {
    setCounter({
      ...counter,
      contadorUno: contadorUno + 1,
      contadorDos: contadorDos + 2,
    });
  };
  return (
    <>
      <h2>Contador Uno: {contadorUno}</h2>
      <h2>Contador Dos: {contadorDos}</h2>
      <button onClick={Increment}> Incrementar</button>
    </>
  );
}
