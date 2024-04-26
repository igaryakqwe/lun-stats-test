import { SxProps, Theme } from "@mui/material";


export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60px',
}

export const barWrapper: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  gap: '5px',
};

export const bar: SxProps<Theme> = {
  height: '100%',
  '@media (max-width: 855px)': {
    width: '20px'
  }
}

export const block = (height: number, color: string): SxProps<Theme> => ({
  height: `${height}%`,
  backgroundColor: color,
  width: '30px',
  '@media (max-width: 855px)': {
    width: '20px'
  },
});

export const tooltip = (color: string, display: string): SxProps<Theme> => ({
  backgroundColor: color,
  color: 'rgb(255,255,255)',
  fontSize: '12px',
  display,
});

export const year: SxProps<Theme> = {
  fontSize: '13px',
  fontWeight: 600,
  '@media (max-width: 855px)': {
    fontSize: '10px'
  }
};

export const month: SxProps<Theme> = {
  fontSize: '18px',
  '@media (max-width: 855px)': {
    fontSize: '15px'
  },
  '@media (max-width: 600px)': {
    fontSize: '12px'
  }
};
