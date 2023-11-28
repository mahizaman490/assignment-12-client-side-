import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
 
    return (
        <Box>
        <Container className="bg-neutral-950 text-white h-16 pt-5 " maxWidth="lg">
          <Typography variant="body2" align="center">
            &copy; {new Date().getFullYear()} Parcel Management BD
          </Typography>
        </Container>
      </Box>
    );
};

export default Footer;