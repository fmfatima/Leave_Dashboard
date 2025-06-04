import { TextField } from '@mui/material';

const MyTextField = ({ label, type = 'text', id, placeholder, required = false, ...props }) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      label={label}
      type={type}
      id={id}
      required={required}
      placeholder={placeholder}
      InputProps={{
        style: {
          borderRadius: '6px',
        },
      }}
      InputLabelProps={{
        shrink: true,
      }}
      {...props}
    />
  );
};

export default MyTextField;
