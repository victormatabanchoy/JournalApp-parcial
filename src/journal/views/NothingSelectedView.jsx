import { Grid2, Typography } from "@mui/material";
import { StarOutline } from "@mui/icons-material";

export const NothingSelectedView = () => {
  return (

    <Grid2
      container
      rowSpacing={ 1 }
      
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 3 }}
    >

        <Grid2 xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'white' }} />
        </Grid2>
        <Grid2 xs={ 12 }>
            <Typography color='white' variant="h5">Selecciona o Crea una Entrada</Typography>
        </Grid2>

    </Grid2>
  )
}
