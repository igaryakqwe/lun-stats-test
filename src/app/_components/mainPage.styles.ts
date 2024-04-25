import {SxProps, Theme} from "@mui/material";

export const barHeader: SxProps<Theme> = {
  fontSize: '30px',
  textAlign: 'center',
  p: '0 10px 0 10px',

  '@media (max-width: 855px)': {
    fontSize: '20px'
  }
};
