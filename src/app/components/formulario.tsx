import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CustomTextField from './CustomTextField';
import './formulario.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    tempErrors.firstName = formValues.firstName ? "" : "Este campo es requerido.";
    tempErrors.lastName = formValues.lastName ? "" : "Este campo es requerido.";
    tempErrors.email = (/.+@.+..+/).test(formValues.email) ? "" : "Correo electrónico no válido.";
    tempErrors.password = formValues.password.length > 6 ? "" : "La contraseña debe tener al menos 7 caracteres.";
    tempErrors.confirmPassword = formValues.password === formValues.confirmPassword ? "" : "Las contraseñas no coinciden.";

    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
      console.log('Form Values:', formValues);
      setFormSubmitted(true);
    }
  };

    return (
      <Box
      className='card flex flex-col justify-center items-center w-[90%]'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '500px',
          p: 3,
          marginTop: '20px',
          backgroundColor: '#2b2e36',
          borderRadius: '10px',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ width: '100%', maxWidth: '100%' }}>
          <Typography className='py-5' variant="h5" gutterBottom align="center" color={'#e9b50b'} fontWeight="bold">Formulario</Typography>
          <div className=' flex flex-wrap justify-center items-center space-x-0 sm:space-x-10 w-full'>
          <CustomTextField
            placeholder="Ingrese sus Nombres"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
            error={!!errors.firstName}
            helperText={errors.firstName}
            beforeContent="NOMBRES"
            svgIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
                width="20px"
                height="20px"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
            }
          />
          <CustomTextField
          placeholder="Ingrese sus Apellidos"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
            error={!!errors.lastName}
            helperText={errors.lastName}
            beforeContent="APELLIDOS"
            svgIcon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#000000"
                width="20px"
                height="20px"
              >
                <path d="M0 0h24v24H0z" fill="none"></path>
                <path
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                ></path>
              </svg>
            }
          />
          <CustomTextField
          placeholder="Ingrese su Correo"
            name="email"
            value={formValues.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            type="email"
            beforeContent="CORREO"
            svgIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000"
              width="20px"
              height="20px"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" /></svg>
              
            }
          />
          <CustomTextField
            placeholder="Ingrese su Contraseña"
            name="password"
            value={formValues.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
            type="password"
            beforeContent="CONTRASEÑA"
            svgIcon={
            <svg xmlns="http://www.w3.org/2000/svg"               viewBox="0 0 24 24"
            fill="#000000"
            width="20px"
            height="20px"><title>lock-outline</title><path d="M12,17C10.89,17 10,16.1 10,15C10,13.89 10.89,13 12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17M18,20V10H6V20H18M18,8A2,2 0 0,1 20,10V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V10C4,8.89 4.89,8 6,8H7V6A5,5 0 0,1 12,1A5,5 0 0,1 17,6V8H18M12,3A3,3 0 0,0 9,6V8H15V6A3,3 0 0,0 12,3Z" /></svg>
            }
          />
          <CustomTextField
          placeholder="Confirme la Contraseña"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
            type="password"
            beforeContent="CONFIRM CONTRASEÑA"
            svgIcon={
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              fill="#000000"
              width="20px"
              height="20px"><title>lock-check-outline</title><path d="M14 15C14 16.11 13.11 17 12 17C10.89 17 10 16.1 10 15C10 13.89 10.89 13 12 13C13.11 13 14 13.9 14 15M13.09 20C13.21 20.72 13.46 21.39 13.81 22H6C4.89 22 4 21.1 4 20V10C4 8.89 4.89 8 6 8H7V6C7 3.24 9.24 1 12 1S17 3.24 17 6V8H18C19.11 8 20 8.9 20 10V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V10H6V20H13.09M9 8H15V6C15 4.34 13.66 3 12 3S9 4.34 9 6V8M21.34 15.84L17.75 19.43L16.16 17.84L15 19L17.75 22L22.5 17.25L21.34 15.84Z" /></svg>
            }
          />

          <div className='my-5 flex justify-center w-full'> 
                    <Button
                      className="z-50 cursor-pointer uppercase bg-white px-4 py-2 active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[0.5rem_0.5rem_#e9b50b,-0.5rem_-0.5rem_#000505] transition text-black hover:bg-white hover:text-black w-96 mx-10"
                      type="submit"
                      fullWidth
                      variant="contained"
                    >
                      Registrar
                    </Button>
                  </div>

        </div>


        {formSubmitted && (
          <Typography variant="body1" color="success" sx={{ mt: 2 }}>
            Registro exitoso.
          </Typography>
        )}
      </Box>

    </Box>
  );
};

export default RegisterForm;
