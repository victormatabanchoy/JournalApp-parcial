import { Link as RouterLink } from "react-router-dom";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "El correo no es valido"],
  password: [
    (value) => value.length >= 6,
    "Contraseña no valida, debe tener al menos 6 caracteres",
  ],
  displayName: [
    (value) => value.length >= 5,
    "El nombre debe tener al menos 5 caracteres",
  ],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;

    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <AuthLayout>
      <Grid2 container justifyContent="center" alignItems="center" sx={{}}>
        <Grid2
          sx={{
            width: { xs: "20%", sm: "400px" },
            padding: 2,
            borderRadius: "20px",
            background: "rgba(30, 30, 40, 0.9)", 
            boxShadow: "0 0 20px rgba(128, 0, 255, 0.6)", 
            border: "2px solid rgba(128, 0, 255, 0.5)", 
            transition: "transform 0.3s ease-in-out",
            ":hover": {
              transform: "scale(1.02)", 
            },
          }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              color: "#d1c4e9",
              marginBottom: 2,
              fontWeight: "bold",
              textTransform: "uppercase",
              textShadow: "0 0 10px rgba(128, 0, 255, 0.6)",
            }}
          >
            Registro - Crear Cuenta
          </Typography>

          <form onSubmit={onSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <TextField
                  label="Nombre Completo"
                  type="text"
                  autoComplete="off"
                  placeholder="Digita tu nombre"
                  fullWidth
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  error={!!displayNameValid && formSubmitted}
                  helperText={displayNameValid}
                  InputProps={{
                    sx: { color: "white" }, 
                  }}
                  InputLabelProps={{
                    sx: { color: "rgba(255, 255, 255, 0.7)" }, 
                  }}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Correo"
                  type="email"
                  autoComplete="off"
                  placeholder="correo@gmail.com"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  error={!!emailValid && formSubmitted}
                  helperText={emailValid}
                  InputProps={{
                    sx: { color: "white" }, 
                  }}
                  InputLabelProps={{
                    sx: { color: "rgba(255, 255, 255, 0.7)" }, 
                  }}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Contraseña"
                  type="password"
                  autoComplete="off"
                  placeholder="contraseña"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}
                  InputProps={{
                    sx: { color: "white" }, 
                  }}
                  InputLabelProps={{
                    sx: { color: "rgba(255, 255, 255, 0.7)" }, 
                  }}
                />
              </Grid2>

              <Grid2 size={12} sx={{ mt: 2 }}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "rgba(128, 0, 255, 0.8)",
                    color: "white",
                    ":hover": {
                      backgroundColor: "rgba(128, 0, 255, 1)",
                      transform: "scale(1.05)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                >
                  Crear Cuenta
                </Button>
              </Grid2>
            </Grid2>

            <Grid2 container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Typography sx={{ color: "rgba(255, 255, 255, 0.8)", mr: 1 }}>
                ¿Ya tienes cuenta?
              </Typography>
              <Link
                component={RouterLink}
                to="/auth/login"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  textDecoration: "underline",
                  ":hover": {
                    color: "rgba(128, 0, 255, 1)",
                  },
                }}
              >
                Ingresar
              </Link>
            </Grid2>
          </form>
        </Grid2>
      </Grid2>
    </AuthLayout>
  );
};
