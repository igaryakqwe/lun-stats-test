import { SxProps, Theme } from "@mui/material";


export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '60px',
};

export const barWrapper: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  gap: '5px',
};

export const block = (height: number, color: string): SxProps<Theme> => ({
  height: `${height}%`,
  backgroundColor: color,
  width: '30px',
});

export const tooltip = (color: string): SxProps<Theme> => ({
  backgroundColor: color,
  color: 'rgb(255,255,255)',
  fontSize: '12px',
});
