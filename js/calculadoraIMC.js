const Saludo = 'Bienvenido a nuestra calculadora IMC';
const resultado = 'Su índice de masa corporal es: ';
const mensaje = 'Basándonos en ese resultado, su estado dentro del IMC es: ';
const mensajeerror = 'Datos inválidos :(';

alert(Saludo);

let running = true;
let menores = 0;
let mujeres = 0;
let hombres = 0;
let hombresobre = 0;
let mujeresobre = 0;
let datos = [];

do {
  let opcion = prompt(
    'Elija su opción:\n1. Registrar paciente\n2. Total pacientes\n3. Total menores de edad\n4. Pacientes con sobrepeso\n5. Paciente con menor IMC\n6. Salir'
  );

  switch (opcion) {
    case "1":
      let nombre = prompt('Ingrese su nombre');
      let edad = parseInt(prompt('Ingrese su edad'));
      if (edad < 18) menores++;

      let genero = prompt('Ingrese su género:\n1. Hombre\n2. Mujer');
      if (genero === '1') hombres++;
      else if (genero === '2') mujeres++;

      let id = prompt('Ingrese su ID');
      let peso = parseFloat(prompt('Ingrese su peso en kg'));
      let estatura = parseFloat(prompt('Ingrese su estatura en metros'));
      let imc = peso / (estatura ** 2);

      let paciente = {
        nombre,
        edad,
        genero,
        id,
        peso,
        estatura,
        imc: parseFloat(imc.toFixed(2))
      };

      datos.push(paciente);

      alert(`${resultado}${paciente.imc}`);

      if (imc < 18.5) {
        alert(`${mensaje} peso inferior al normal`);
      } else if (imc >= 18.5 && imc <= 24.9) {
        alert(`${mensaje} normal`);
      } else if (imc >= 25 && imc <= 29.9) {
        alert(`${mensaje} peso superior al normal`);
      } else if (imc >= 30) {
        alert(`${mensaje} obesidad`);
      } else {
        alert(mensajeerror);
      }

      if (genero === '1' && imc >= 25) hombresobre++;
      if (genero === '2' && imc >= 25) mujeresobre++;
      break;

    case "2":
      if (datos.length === 0) {
        alert("Registre pacientes primero");
        break;
      }
      alert(`El total de pacientes es: ${datos.length}`);
      break;

    case "3":
      if (datos.length === 0) {
        alert("Registre pacientes primero");
        break;
      }
      alert(`Total de menores de edad: ${menores}`);
      break;

    case "4":
      if (datos.length === 0) {
        alert("Registre pacientes primero");
        break;
      }
      alert(`Hombres con sobrepeso u obesidad: ${hombresobre}`);
      alert(`Mujeres con sobrepeso u obesidad: ${mujeresobre}`);
      break;

    case "5":
      if (datos.length === 0) {
        alert("Registre pacientes primero");
        break;
      }
      let menorIMC = datos.reduce((min, p) => (p.imc < min.imc ? p : min), datos[0]);
      alert(`Paciente con menor IMC:\nNombre: ${menorIMC.nombre}\nIMC: ${menorIMC.imc}`);
      break;

    case "6":
      alert("Hasta luego...");
      running = false;
      break;

    default:
      alert("Opción no válida");
  }

} while (running);