import {Box} from "@mui/material";
import Navbar from "@/app/nav/navbar";

export default function Home() {
  return (
  <Box id="home">
    <Box sx={{ flexGrow: 1}}>
      <Navbar/>
    </Box>
  </Box>
  );
}
