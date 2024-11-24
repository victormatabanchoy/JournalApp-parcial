import { Grid2, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (
    <Grid2
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        backgroundImage: "linear-gradient(135deg, #006666, #2a5298)",
        overflow: "hidden",
        position: "relative",
        padding: 4,
      }}
    >
      {/* Circles with lighter opacity */}
      <div style={{}}></div>

      <div
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          filter: "blur(150px)",
          animation: "float 6s ease-in-out infinite",
          zIndex: 0,
        }}
      ></div>

      <Grid2
        xs={4}
        className="box-shadow"
        sx={{
          position: "relative",
          zIndex: 10,
          width: { md: 450 },
          textAlign: "center",
        }}
      >
        <Typography
          variant="h5"
          sx={{ mb: 2, fontWeight: "bold", color: "secondary.main" }}
        >
          {title}
        </Typography>

        {children}
      </Grid2>
    </Grid2>
  );
};
