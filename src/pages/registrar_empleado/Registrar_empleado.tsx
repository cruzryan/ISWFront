import Header from '../../components/Header'
import './Registrar_empleado.css'

function Registrar_empleado() {
  
  return (
    <>

        <Header/>

       <div className="registrarEmpleado">
        <h1>Registrar Empleado</h1>
        <form>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required/>

            <label htmlFor="apellido_paterno">Apellido Paterno:</label>
            <input type="text" id="apellido_paterno" name="apellido_paterno" required/>

            <label htmlFor="apellido_materno">Apellido Materno:</label>
            <input type="text" id="apellido_materno" name="apellido_materno" required/>

            <label htmlFor="correo">Correo:</label>
            <input type="email" id="correo" name="correo" required/>

            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" name="edad" required/>

            <label htmlFor="curp">CURP:</label>
            <input type="text" id="curp" name="curp" required/>

            <label htmlFor="sexo">Sexo:</label>
            <select id="sexo" name="sexo">
                <option value="masculino">Masculino</option>
                <option value="femenino">Femenino</option>
            </select>
        </form>


        <div className="center">
            <label htmlFor="imagen">Fotografia empleado:</label>
            <input type="file" id="imagen" name="imagen"/>
        </div>


        <div className="submit-button">
            <button type="submit">Enviar</button>
        </div>


    </div>
    </>
  )
}

export default Registrar_empleado
