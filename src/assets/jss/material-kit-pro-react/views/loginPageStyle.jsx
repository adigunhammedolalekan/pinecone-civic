import {
  container,
  description,
  cardTitle
} from "assets/jss/material-kit-pro-react.jsx";

const loginPageStyle = {
  logo: {
    position: "relative",
    padding: "0",
    zIndex: "1",
    marginLeft: "15px",
    marginRight: "15px",
    borderRadius: "6px",
    "& img": {
      borderRadius: "6px",
      pointerEvents: "none",
      boxShadow:
        "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
    },
    "& a": {
      display: "block"
    }
  },
  description,
  cardTitle: {
    ...cardTitle,
    color: "#FFFFFF !important"
  },
  container: {
    ...container,
    zIndex: "2",
    position: "relative",
    paddingTop: "5vh",
    color: "#FFFFFF",
    "@media (min-width: 576px)": {
      paddingTop: "9vh",
    }
  },
  cardContainer: {
    maxWidth: '306px',
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-width: 576px)": {
      width: "306px"
    },
    // height: '350px',
    border: '1px solid #EEEEEE',
    borderRadius: '10px'
  },
  pageHeader: {
    minHeight: "100vh",
    maxHeight: "1000px",
    height: "auto",
    display: "inherit",
    position: "relative",
    margin: "0",
    padding: "0",
    border: "0",
    alignItems: "center",
    "&:before": {
      background: "rgba(0, 0, 0, 0.5)"
    },
    "&:before,&:after": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: '""'
    }
  },
  form: {
    margin: "0"
  },
  cardHeader: {
    width: "auto",
    textAlign: "center",
    borderRadius: "8px"
  },
  socialLine: {
    marginTop: "1rem",
    textAlign: "center",
    padding: "0"
  },
  inputIconsColor: {
    color: "#888"
  },
  textCenter: {
    textAlign: "center"
  },
  iconButtons: {
    marginRight: "3px !important",
    marginLeft: "3px !important"
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block"
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto"
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0"
  },
  left: {
    float: "left!important",
    display: "block",
    "&,& *,& *:hover,& *:focus": {
      color: "#FFFFFF !important"
    }
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
    "&,& *,& *:hover,& *:focus": {
      color: "#FFFFFF !important"
    }
  },
  icon: {
    width: "18px",
    height: "18px",
    top: "3px",
    position: "relative"
  },
  footer: {
    position: "absolute",
    width: "100%",
    background: "transparent",
    bottom: "0",
    color: "#fff",
    zIndex: "2"
  }
};

export default loginPageStyle;
