import { useTheme } from '@mui/material/styles';
import { MdRamenDining } from "react-icons/md";

export const Logo = () => {
  const theme = useTheme();
  const fillColor = theme.palette.primary.main;

  return (
    <MdRamenDining
      color={fillColor}
      size={32}
    />
  );
};
