import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";

// material-ui icons
import AddIcon from '@material-ui/icons/Add';
import avatar from "assets/img/faces/marc.jpg";

const styles = theme => ({
  footerButton: {
    margin: theme.spacing.unit,
  },
  buttonOption:{
	 marginLeft: -10
  },
  cardBody:{
    display: 'flex',
    flexGrow: 1,
    // marginTop: theme.spacing.unit * 5,
  },
  container: {
	 display: 'flex',
	 justifyContent: 'space-around',
   height: '500px',
   [theme.breakpoints.down('sm')]: {
     maxHeight: 400
   },
   flexGrow: 1,
   // border: '2px solid green'
  },
  avatar: {
	 marginTop: theme.spacing.unit * 10,
  },
  cardFooter:{
	 display: 'flex',
	 justifyContent: 'flex-end',
   alignItems: 'flex-end'
  },
  description: {
  	display: 'flex',
  	justifyContent: 'center',
  	marginTop: '5px',
  	cursor: 'pointer',
  },
});

class EmployeeCard extends React.Component {
	constructor(props) {
		super(props);
  		this.state = {
        addUser: false
  		}
	}

	render() {
	  const { classes, first, last, email, phone, group } = this.props;
	  return (
	    <div>
	      <GridContainer justify='center' className={classes.container}>
  			   <GridItem xs={12} sm={12} md={4}>
              <GridContainer>
  				      <GridItem xs={12} sm={12} md={12} className={classes.avatar}>
  					     <div>
  				        <CardAvatar profile>
  				          <a onClick={e => e.preventDefault()}>
  				            <img src={avatar} alt="..." />
  				          </a>
  				        </CardAvatar>
  				          <p className={classes.description}>Edit</p>
  				      </div>
  			         </GridItem>
              </GridContainer>
  		    </GridItem>
	        <GridItem xs={12} sm={12} md={8}>
	            <CardBody className={classes.cardBody}>
                <GridContainer className={classes.container} direction={'column'}>
	                <GridItem xs={12} sm={12} md={12}>
                    <Typography variant='headline'>{ first === "" ? 'Employee Name' : first + ' ' + last}</Typography>
                    <div>
                      <Typography variant='body1'>{ first === "" ? 'Group' : group}</Typography>
                      <Typography variant='body1'>{ first === "" ? 'Phone' : phone}</Typography>
                      <Typography variant='body1'>{ first === "" ? 'Email' : email}</Typography>
                    </div>
	                </GridItem>
                </GridContainer>
	            </CardBody>
	        </GridItem>
	      </GridContainer>
	        <div className={classes.cardFooter}>
              <Button onClick={this.props.toggleViews} variant="fab" style={{backgroundColor: 'red', color: 'white' }} aria-label="Add" className={classes.footerButton}>
                <AddIcon />
              </Button>
	        </div>
	    </div>
	  );
	}
}
export default withStyles(styles)(EmployeeCard);
