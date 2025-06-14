import Button from '@mui/material/Button';

const MyButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <Button
      variant="contained"
      disableElevation
      disableRipple
      onClick={onClick}
      sx={{
        backgroundColor: '#128D6C',
        color: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#128D6C',
        },
        '&:active': {
          backgroundColor: '#128D6C',
        },
      }}
      className={`text-white font-semibold px-6 py-2 rounded-lg w-[547px] h-[50px] hover:bg-primary active:bg-primary ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default MyButton;
