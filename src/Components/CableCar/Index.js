import React, { useState } from "react";
import {
  Text,
  TextStudents,
  TextMonitors,
  LogoContainer,
  InputMonitors,
  InputStudents,
} from "./styles";
import logo from "../../assets/logo.svg";

function CableCar() {
  const [students, setStudents] = useState("");
  const [monitors, setMonitors] = useState("");

  let amountOfPeople = parseInt(monitors) + parseInt(students);
  let amountOfTrip = amountOfPeople / 10;

  function HandleMonitors(e) {
    e.preventDefault();
    if (monitors <= 0) {
      setMonitors(monitors);
      alert("Não pode subir sem a presença de um monitor.");
    } else {
      setMonitors(monitors);
      alert("Escolha o número de estudantes.");
    }
  }

  function HandleStudents(e) {
    e.preventDefault();
    if (monitors <= 0) {
      setMonitors(monitors);
      alert("Não pode subir sem a presença de um monitor.");
    } else if (amountOfPeople > amountOfTrip) {
      setStudents(students);
      alert(
        "Será (ão) feita (s) " +
          Math.ceil(amountOfTrip) +
          " viagem (s). Máximo de 10 pessoas por viagem."
      );
    }
  }

  return (
    <div style={{ marginTop: "6rem" }}>
      <Text style={{ marginTop: "5rem" }}>Teleférico</Text>
      <LogoContainer>
        <img alt="logo" src={logo} />
      </LogoContainer>
      <div style={{ marginTop: "8rem" }}>
        <TextStudents>
          Digite o número de monitores:
          <InputStudents>
            <form>
              <input
                type="number"
                placeholder="Digite um Nº"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                  color: "#B3B3B3",
                  borderRadius: "0.5rem",
                  marginLeft: "11.8rem",
                  borderColor: "#fff",
                }}
                onChange={(e) => setMonitors(e.target.value)}
              />
              <button
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "1.1rem",
                  color: "#fff",
                  borderRadius: "0.3rem",
                  marginLeft: "1rem",
                  width: "10%",
                  background: "red",
                  borderColor: "#fff",
                }}
                type="submit"
                onClick={HandleMonitors}
              >
                Enviar
              </button>
            </form>
          </InputStudents>
        </TextStudents>
      </div>
      <InputMonitors>
        <TextMonitors>
          Digite o número de estudantes:
          <div style={{ marginTop: "-2rem" }}>
            <form>
              <input
                type="number"
                placeholder="Digite um Nº"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                  color: "#B3B3B3",
                  borderRadius: "0.5rem",
                  marginLeft: "13rem",
                  borderColor: "#fff",
                }}
                onChange={(e) => setStudents(e.target.value)}
              />

              <button
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "1.1rem",
                  color: "#fff",
                  borderRadius: "0.3rem",
                  marginLeft: "1rem",
                  width: "10%",
                  background: "red",
                  borderColor: "#fff",
                }}
                type="submit"
                onClick={HandleStudents}
              >
                Enviar
              </button>
            </form>
          </div>
        </TextMonitors>
      </InputMonitors>
    </div>
  );
}

export default CableCar;
