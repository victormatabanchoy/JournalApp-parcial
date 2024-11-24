import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import {
  checkingAuthentication,
  startGoogleSignIn,
} from "../../store/auth/thunks";

export const LoginPage = () => {
  const { status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: "prueba@gmail.com",
    password: "123456",
  });

  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    dispatch(checkingAuthentication());
  };

  const onGoogleSignIn = () => {
    console.log("onGoogleSignIn");
    dispatch(startGoogleSignIn());
  };

  return (
    <AuthLayout>
      <Grid2 container justifyContent="center" alignItems="center" sx={{}}>
        <Grid2
          sx={{
            width: { xs: "20%", sm: "400px" },
            padding: 4,
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
          {/* Título */}
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
            Login
          </Typography>

          {/* Formulario */}
          <form onSubmit={onSubmit}>
            <Grid2 container spacing={2}>
              <Grid2 size={12}>
                <TextField
                  label="Correo"
                  type="email"
                  autoComplete="current-password"
                  placeholder="correo@gmail.com"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  InputProps={{
                    sx: { color: "white" },
                  }}
                />
              </Grid2>
              <Grid2 size={12}>
                <TextField
                  label="Contraseña"
                  type="password"
                  autoComplete="current-password"
                  placeholder="contraseña"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  InputProps={{
                    sx: { color: "white" },
                  }}
                  InputLabelProps={{
                    sx: { color: "rgba(255, 255, 255, 0.7)" },
                  }}
                />
              </Grid2>

              {/* Botones */}
              <Grid2 size={12} sx={{ mt: 2 }}>
                <Button
                  disabled={isAuthenticating}
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
                  Login
                </Button>
              </Grid2>
              <Grid2 size={12} sx={{ mt: 1 }}>
                <Button
                  disabled={isAuthenticating}
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "rgba(128, 0, 255, 0.6)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    ":hover": {
                      backgroundColor: "rgba(128, 0, 255, 0.8)",
                      transform: "scale(1.05)",
                      boxShadow: "0 0 15px rgba(128, 0, 255, 0.8)",
                    },
                  }}
                >
                  <Google />
                  Google
                </Button>
              </Grid2>
            </Grid2>

            {/* Link para registro */}
            <Grid2 container justifyContent="flex-end" sx={{ mt: 2 }}>
              <Link
                component={RouterLink}
                color="inherit"
                to="/auth/register"
                sx={{
                  color: "rgba(255, 255, 255, 0.8)",
                  fontSize: "0.9rem",
                  textDecoration: "underline",
                  ":hover": {
                    color: "rgba(128, 0, 255, 1)",
                  },
                }}
              >
                Crear nueva cuenta
              </Link>
            </Grid2>
          </form>
        </Grid2>
      </Grid2>
    </AuthLayout>
  );
};
