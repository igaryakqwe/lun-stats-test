import { SxProps, Theme } from "@mui/material";


export const wrapper: SxProps<Theme> = {
  '@media (max-width: 1054px)': {
    transform: 'scale(0.8)',
  },
  '@media (max-width: 600px)': {
    transform: 'scale(0.55)',
  },
  transition: 'transform 0.5s',
};

export const barWrapper: SxProps<Theme> = {
  display: 'flex',
  p: '10px',
  float: 'left',
};

export const sideBar: SxProps<Theme> = {
  display: 'flex',
  gap: '27px',
  flexDirection: 'column',
  mr: '15px',
  mt: '-9px',
};

export const chartWrapper: SxProps<Theme> = {
  pt: '20px',
  pb: '0px',
  height: '406px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  '@media (max-width: 855px)': {
    gap: '10px',
  },
  position: 'relative',
};

export const line = (top: number): SxProps<Theme> => ({
  backgroundColor: '#777777',
  width: '102%',
  height: '1px',
  position: 'absolute',
  top: `calc(${top} * 0.885%)`,
  zIndex: -1,
});

export const chart: SxProps<Theme> = {
  display: 'flex',
  '@media (max-width: 855px)': {
    width: '45px'
  }
};

export const barHeader: SxProps<Theme> = {
  fontSize: '30px',
  textAlign: 'center',
  p: '0 10px 0 10px',

  '@media (max-width: 855px)': {
    fontSize: '20px'
  }
};


