import { SxProps, Theme } from "@mui/material";


export const wrapper: SxProps<Theme> = {
  display: 'flex',
  p: '10px',
  float: 'left',

  '@media (max-width: 1054px)': {
    scale: '0.8',
  },
  '@media (max-width: 600px)': {
    scale: '0.55',
  },
};

export const sideBar: SxProps<Theme> = {
  display: 'flex',
  gap: '26.5px',
  flexDirection: 'column',
  mr: '10px',
  mt: '-9px',
};

export const chartWrapper: SxProps<Theme> = {
  pt: '20px',
  pb: '0px',
  height: '405px',
  width: '101%',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  backgroundImage: 'repeating-linear-gradient(to bottom, #777777 0, #777777 1px, transparent 1px, transparent 51px)',
  '@media (max-width: 855px)': {
    gap: '10px',
  }
};

export const chart: SxProps<Theme> = {
  display: 'flex',
  '@media (max-width: 855px)': {
    width: '45px'
  }
};

