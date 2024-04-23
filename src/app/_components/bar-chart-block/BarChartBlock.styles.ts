import { SxProps, Theme } from "@mui/material";


export const wrapper: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-end',
  width: '60px',
};

export const barWrapper: SxProps<Theme> = {
  height: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  gap: '10px'
};

export const block = (height: number): SxProps<Theme> => ({
  height: `${height}%`,
  backgroundColor: 'red',
  width: '20px',
});
