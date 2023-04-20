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

  function HandleStudents(e) {
    e.preventDefault();
    if (students >= 10) {
      setStudents(students);
      alert("Não pode subir. O limite total de pessoas é 10 por viagem.");
    } else {
      alert("Escolha a quantidade de monitores.");
    }
  }

  let amountOfPeople = parseInt(monitors) + parseInt(students);

  function HandleMonitors(e) {
    e.preventDefault();
    if (amountOfPeople >= 11) {
      setStudents(students);
      setMonitors(monitors);
      alert("Não pode subir. O limite total de pessoas é 10.");
    } else if (monitors <= 0) {
      setMonitors(monitors);
      alert("Não pode subir sem a presença de um monitor.");
    } else {
      alert("Boa viagem!!");
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
          Digite o número de alunos:
          <InputStudents style={{ marginTop: "-2rem" }}>
            <form>
              <input
                type="number"
                placeholder="Digite um Nº"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "1rem",
                  color: "#B3B3B3",
                  borderRadius: "0.5rem",
                  marginLeft: "9rem",
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
          </InputStudents>
        </TextStudents>
      </div>
      <InputMonitors style={{ marginTop: "2rem" }}>
        <TextMonitors>
          Digite o número de monitores:
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
                  marginLeft: "11.5rem",
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
          </div>
        </TextMonitors>
      </InputMonitors>
    </div>
  );
}

export default CableCar;
