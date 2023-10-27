import Header from '../../components/Header'
import './Registrar_empleado.css'
import React, { useState } from 'react';

function Registrar_empleado() {
  
    const [formData, setFormData] = useState({
        nombre: '',
        apellido_paterno: '',
        apellido_materno: '',
        correo: '',
        edad: '',
        curp: '',
        sexo: 'masculino',
        imagen: null, // to store the selected file
      });
    
      const handleChange = (event: any) => {
        const { name, value, type } = event.target;
    
        if (type === 'file') {
          // Handle file input separately
          setFormData({
            ...formData,
            [name]: event.target.files[0],
          });
        } else {
          setFormData({
            ...formData,
            [name]: value,
          });
        }
      };
    

    //   Cuando le da click a submit!!!

      const handleSubmit = (event: any) => {
        
        event.preventDefault();
        console.log('Form Data:', formData);

      };
    

  return (
    <>

        <Header/>

       <div className="registrarEmpleado">
        <h1>Registrar Empleado</h1>
        <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        required
        onChange={handleChange}
        value={formData.nombre}
      />

      <label htmlFor="apellido_paterno">Apellido Paterno:</label>
      <input
        type="text"
        id="apellido_paterno"
        name="apellido_paterno"
        required
        onChange={handleChange}
        value={formData.apellido_paterno}
      />

      <label htmlFor="apellido_materno">Apellido Materno:</label>
      <input
        type="text"
        id="apellido_materno"
        name="apellido_materno"
        required
        onChange={handleChange}
        value={formData.apellido_materno}
      />

      <label htmlFor="correo">Correo:</label>
      <input
        type="email"
        id="correo"
        name="correo"
        required
        onChange={handleChange}
        value={formData.correo}
      />

      <label htmlFor="edad">Edad:</label>
      <input
        type="number"
        id="edad"
        name="edad"
        required
        onChange={handleChange}
        value={formData.edad}
      />

      <label htmlFor="curp">CURP:</label>
      <input
        type="text"
        id="curp"
        name="curp"
        required
        onChange={handleChange}
        value={formData.curp}
      />

      <label htmlFor="sexo">Sexo:</label>
      <select
        id="sexo"
        name="sexo"
        onChange={handleChange}
        value={formData.sexo}
      >
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>

      <div className="center">
        <label htmlFor="imagen">Fotografia empleado:</label>
        <input
          type="file"
          id="imagen"
          name="imagen"
          accept="image/*" // Add this to specify image files
          onChange={handleChange}
        />
      </div>

      <div className="submit-button">
        <button type="submit">Enviar</button>
      </div>
    </form>

    </div>
    </>
  )
}

export default Registrar_empleado
