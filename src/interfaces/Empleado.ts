
export default interface Empleado {
    nombre: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    correo: string,
    edad: number,
    curp: string,
    sexo: "Masculino" | "Femenino",
}