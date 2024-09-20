import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import InputBase from "@mui/material/InputBase";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Box, Paper, Typography } from "@mui/material";

export const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "fixed",
  backgroundColor: "#FAF9F6",
  color: "#333",
  zIndex: theme.zIndex.drawer + 1,
  height: open ? "100vh" : "190px",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  overflowY: "auto",
  [theme.breakpoints.up("sm")]: {
    gap: "0px",
    height: open ? "auto" : "130px",
    overflowY: "hidden",
  },
}));

export const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#e6e6e6",
  "&:hover": {
    backgroundColor: "#e6e6e6",
  },
  marginLeft: 0,
  width: "200px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(20),
    width: "544px",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const NavBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "25px",
  width: "100%",
  marginTop: "30px",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

export const CategorySection = styled("ul")(({ theme }) => ({
  display: "flex",
  listStyleType: "none",
  flexWrap: "nowrap",
  overflowX: "auto",
  gap: "10px",
  marginTop: "55px",
  padding: "10px",
  [theme.breakpoints.up("sm")]: {
    padding: "0px",
    margin: "15px 50px",
  },
}));

export const LeftContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-evenly",
  gap: "20px",
  width: "45%",
  [theme.breakpoints.down("sm")]: {
    paddingTop: "50px",
    width: "100%",
    marginTop: "30px",
  },
}));

export const RightContent = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.up("sm")]: {},
}));

export const CompanyLogo = styled("img")(({ theme }) => ({
  width: "65px",
  height: "65px",

  [theme.breakpoints.up("sm")]: {
    width: "65px",
    height: "65px",
  },
}));

export const DashboardContainer = styled(Box)({
  backgroundColor: (theme) =>
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[900],
  flexGrow: 1,
  overflow: "hidden",
  width: "100%",
});

export const KbDatePicker = styled(DatePicker)(({ theme }) => ({
  "& .MuiInputBase-input": {
    width: "100%",
    padding: "7px 14px",
    [theme.breakpoints.down("sm")]: {
      width: "100px",
      padding: "7px 14px",
    },
  },
  "& .MuiInputLabel-root": {
    display: "flex",
    alignItems: "center",
    // textAlign: "center", // Center the label text
    width: "100%", // Ensure the label spans the full width
    left: "0", // Position the label to start from the left
    transformOrigin: "center", // Transform the label's origin to center
  },
}));

export const DateContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "start",
  gap: "20px",
  width: "400px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "20px",
  },
}));

export const Header = styled(Box)(({ open, theme }) => ({
  display: "flex",
  alignItems: open ? "flex-start" : "center",
  justifyContent: "space-between",
  paddingLeft: "12px",
  paddingTop: "10px",
  [theme.breakpoints.up("sm")]: {
    paddingTop: 0,
  },
}));

export const PersonalizedFeedContainer = styled(Box)(({ open, theme }) => ({
  display: "grid",
  gap: "20px",
  gridTemplateColumns: "repeat(3, 1fr)",
  marginLeft: "5%",
  transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  opacity: open ? 1 : 0,
  [theme.breakpoints.down("sm")]: {
    display: "block",
    marginTop: "30px",
  },
}));

export const PersonalizedFeedButton = styled(Box)(({ open, theme }) => ({
  display: "flex",
  gap: "10px",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  // boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, 0.7)",
  padding: "8px",
  marginRight: "10px",
  borderRadius: "4px",
  outline: "none",
  border: 0,
  "&:hover": {
    backgroundColor: "#e6e6e6",
  },
  [theme.breakpoints.down("sm")]: {
    position: "absolute",
    marginBottom: "20px",
    outline: "none",
    right: 0,
    height: "40px",
    top: open ? "150px" : "",
    padding: open ? "8px 10px" : "8px 15px",
    width: open ? "200px" : "",
  },
}));

export const FilterBox = styled(Box)(({ theme }) => ({
  marginTop: "70px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    maxWidth: "400px",
    marginTop: "10px",
  },
}));

export const ListItem = styled("li")({
  cursor: "pointer",
  padding: "10px",
  marginRight: "5px",
  borderRadius: "4px",
  "&:hover": {
    background: "#e6e6e6",
    border: "none",
  },
});

export const NewsImage = styled("img")(({ theme }) => ({
  width: "150px",
  borderRadius: "4px",
  height: "150px",
  [theme.breakpoints.up("sm")]: {
    height: "250px",
    width: "320px",
  },
}));

export const CardContainer = styled(Paper)(({ theme }) => ({
  boxShadow: "0px 5px 15px #0000001a",
  borderRadius: "10px",
  width: "100%",
  margin: 0,
  height: "150px",
  maxWidth: "700px",
  marginInline: "0px",
  display: "flex",
  gap: "4px",
  [theme.breakpoints.up("sm")]: {
    height: "250px",
  },
}));

export const NewsContentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "10px",
  flexWrap: "wrap",
  width: "100%",
  justifyContent: "space-between",
  [theme.breakpoints.up("sm")]: {
    width: "100%",
  },
}));

export const NewsLink = styled("a")(({ theme }) => ({
  color: "maroon",
  overflow: "wrap",
  fontSize: "11px",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: "maroon",
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
  },
}));

export const NewsTitle = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: 600,
  textWrap: "wrap",
  fontStyle: "italic",
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
}));

export const NewsPublicationDate = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
  },
}));

export const CardWrapper = styled("section")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "24px",
  marginTop: "20px",
  padding: "50px 20px",
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "1fr 1fr",
    padding: "20px 40px",
  },
}));

export const AuthorName = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));
