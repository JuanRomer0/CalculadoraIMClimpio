# 🧮 Calculadora de IMC (Índice de Masa Corporal)

Este proyecto es una calculadora interactiva de IMC desarrollada en JavaScript puro. Permite registrar pacientes, calcular su IMC y realizar estadísticas sobre los datos registrados.

## 🚀 Funcionalidades

- Registro de pacientes (nombre, edad, género, peso, estatura, ID)
- Cálculo automático del IMC
- Clasificación del IMC según los rangos de la OMS
- Reporte de:
  - Total de pacientes
  - Menores de edad
  - Pacientes con sobrepeso u obesidad
  - Paciente con el menor IMC registrado

## 📌 Requisitos

Este proyecto no necesita instalación de dependencias externas. Solo necesitas un navegador web moderno.

## 💻 Uso

1. Abre el archivo HTML en tu navegador.
2. Sigue las instrucciones de los `prompt()` y `alert()` para registrar pacientes y consultar información.
3. Usa las opciones del menú para navegar entre funciones.

## 📊 Clasificación del IMC

| Rango IMC | Clasificación               |
|-----------|-----------------------------|
| < 18.5    | Bajo peso                   |
| 18.5–24.9 | Normal                      |
| 25–29.9   | Sobrepeso                   |
| ≥ 30      | Obesidad                    |

## 🛠️ Estructura del Código

- El script usa estructuras básicas como `prompt`, `alert`, `switch`, y arrays/objetos.
- Los datos de cada paciente se almacenan como objetos en un array principal.
- El IMC se calcula como:

  ```javascript
  IMC = peso / (estatura ** 2)****
