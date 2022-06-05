import { useState } from "react";
import "./FirstChallenge.css";

function FirstChallenge() {
  const students = [
    ["Bruno", 170, 14],
    ["Leonardo", 174, 21],
    ["Juan", 156, 12],
    ["Juliana", 166, 13],
    ["Wagner", 184, 17],
    ["Micaela", 172, 18],
    ["Bento", 150, 14],
    ["Lucia", 162, 13],
    ["Pedro", 169, 14],
    ["Carla", 158, 16],
  ];

  const [toggle, setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  };

  let soma = 0;

  const somaAlturas = students.slice(0, students.length).map((item) => {
    soma += item[1];
    return soma;
  });

  let media = somaAlturas.slice(-1).pop() / students.length;

  return (
    <section className="container">
      <div className="challenge-title">
        1) Dado os nomes, alturas e idades de 10 estudantes, faça um programa
        que determine quantos estudantes acima de 13 anos são mais baixos que a
        média das alturas de todos os estudantes.
      </div>
      <table className="table-container">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Altura</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {students.slice(0, students.length).map((item, index) => {
            return (
              <tr key={index}>
                <td key={item[0]}>{item[0]}</td>
                <td key={item[1]}>{item[1]}</td>
                <td key={item[2]}>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button
        className="result-button"
        onClick={() => {
          toggler();
        }}
      >
        Resposta
      </button>
      
        {toggle && (
          <>
          <div className="media">Média das alturas: {media}</div>
          <table className="table-container">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Altura</th>
                <th>Idade</th>
              </tr>
            </thead>

            {students.slice(0, students.length).map((item, index) =>
              item[2] <= 13 ? (
                <></>
              ) : item[1] < media ? (
                <tbody>
                  <tr key={index}>
                    <td key={item[0]}>{item[0]}</td>
                    <td key={item[1]}>{item[1]}</td>
                    <td key={item[2]}>{item[2]}</td>
                  </tr>
                </tbody>
              ) : (
                <></>
              )
            )}
          </table>
          </>
        )}      
    </section>
  );
}

export default FirstChallenge;