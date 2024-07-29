import {
  AppBar,
  Grid,
  TextField,
  Autocomplete,
  FormControl,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export function StyledButton({ onClick, variant, text }) {
  return (
    <Button className="btn-grad" variant={variant} onClick={(e) => onClick(e)}>
      {text}
    </Button>
  );
}
