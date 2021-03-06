import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik } from 'formik';
import Brightness1 from '@material-ui/icons/Brightness1';
import Description from '@material-ui/icons/Description';
import Close from '@material-ui/icons/Close';
import {
	Paper,
	Grid,
  MenuItem,
  Typography,
  FormControlLabel,
  Checkbox,
  Divider,
	Button,
	AppBar,
	Toolbar,
	Hidden,
	IconButton,
	TextField } from '@material-ui/core';
import { saveUser, addUser } from '../../state/userGroups/actions'

//material ui components
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	wrapper: {
		// padding: 25
	},
	formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
	},
	root: {
    borderRadius: 0,
    boxShadow: 'none',
    borderTop: "1px solid #ddd",	
    borderBottom: "1px solid #ddd",
  },
  root2: {
    color: '#2db8b8',
    '&$checked': {
      color: '#2db8b8',
      backgroundColor: '#fff',
    },
  },
  checked: {},
  inputGrid: {
    flexGrow: 1,
  },
  textField: {
    [theme.breakpoints.up('md')]: {
      marginLeft: '-20px'
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: '-40px'
    }
	},
	selected: {
    backgroundColor: "#f00"
  },
  subtitle: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
	},
	demoContent: {
    backgroundColor: '#f6f6f6',
	},
  title: {
    marginBottom: 10,
    color: "#aaa",
    fontSize: '0.85rem',
    //borderBottom: "1px solid #ddd",
    marginLeft: 15,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 30,
    }
	},
	root3: {
    borderRadius: 0,
    boxShadow: 'none',
	},
	paddingFull: {
    padding: 15,
    [theme.breakpoints.up('md')]: {
      padding: '20px 30px',
    }
	},
	appBar: {
    dropShadow: 'none'
	},
	newTitle: {
    [theme.breakpoints.up('md')]: {
      margin: '0 auto',
      left: '70px',
      position: 'absolute',
      width: '75%',
      textAlign: 'center'
    }
	},
	noShadow: {
    dropShadow: 'none',
    backgroundColor: '#fff',
    borderBottom: '1px solid #ddd'
	},
	noStyle: {
    [theme.breakpoints.down('md')]: {
			boxShadow: 'none'
		}
	}
})

class UserGroupForm extends Component {
	render() {
		const { classes, user, handleChangeCheckbox } = this.props
		const isAdd = user && !user.id
		console.log('props', user, isAdd);
		return (
			<div>
				<Formik
					initialValues={ this.props.user }
					validate={values => {
					}}
					enableReinitialize={true}
					onSubmit={(values, { setSubmitting }) => {
						console.log('onSubmit', values, this);
						if (values.id) {
							this.props.saveUser(values);
						} else {
							this.props.addUser(values);
						}
						setTimeout(() => {
							setSubmitting(false);
							this.props.handleClose();
						}, 300);
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						isSubmitting,
						/* and other goodies */
					}) => {
						return (
						<form onSubmit={handleSubmit} className={classes.demoContent}>
							{isAdd && (
								<div className={classes.appBar}>
									<AppBar position="static" color="default" className={classes.noStyle}>
										<Toolbar className={classes.noShadow}>
											<IconButton className={classes.menuButton} color="default" onClick={this.props.handleClose} aria-label="Close">
												<Close />
											</IconButton>
											<Typography variant="subtitle1" color="inherit" className={classes.newTitle}>
												{this.props.title}
											</Typography>
											<Button color="inherit" style={{position: 'absolute', right: 0}} type="submit">
												save
											</Button>
										</Toolbar>
									</AppBar>
								</div>
							)}

							<Paper className={classes.root3} elevation={1}>
							<div className={classes.paddingFull}>
								{/* <Hidden smDown>
									<Typography variant="title" noWrap className={classes.title}>New User Group</Typography>
								</Hidden> */}
								<Grid container spacing={8} alignItems="flex-end" className={classes.inputGrid}>
									<Grid item xs={2} sm={isAdd ? 2 : 1}>
										<Description />
									</Grid>
									<Grid item xs={10} sm={isAdd ? 10 : 11}>
										<TextField
											name="name"
											label="Name"
											fullWidth
											className={classes.textField}
											value={values.name}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</Grid>
								</Grid>
								<br />
								<Grid container spacing={8} alignItems="flex-end" className={classes.inputGrid}>
									<Grid item xs={2} sm={isAdd ? 2 : 1}>
										<Description />
									</Grid>
									<Grid item xs={10} sm={isAdd ? 10 : 11}>
										<TextField
											name="description"
											label="Description"
											fullWidth
											className={classes.textField}
											value={(values.description !== '' ? values.description : "Users will have administrator level permissions")}
											onChange={handleChange}
											onBlur={handleBlur}
										/>
									</Grid>
								</Grid>
								<Grid container spacing={8} alignItems="flex-end" className={classes.inputGrid}>
									<Grid item xs={2} sm={isAdd ? 2 : 1}>
										<Brightness1 />
									</Grid>
									<Grid item xs={10} sm={isAdd ? 10 : 11}>
										<TextField
											name="status"
											label="Status"
											fullWidth
											className={classes.textField}
											value={user.status}
											onChange={handleChange}
											onBlur={handleBlur}
											margin="normal"
										>
											<MenuItem value=''>Select</MenuItem>
											<MenuItem value='active'>Active</MenuItem>
											<MenuItem value='inactive'>Inactive</MenuItem>
										</TextField>
										</Grid>
									</Grid>
								</div>
							</Paper>
							<br />
							<br />
							<Typography noWrap className={classes.title}>Permissions</Typography>
							<Paper className={classes.root} elevation={1}>
								<div className={classes.paddingFull}>
									
									{values.permissions.map((item, index) => (
										<div key={index}>
											<Typography variant="title" noWrap className={classes.subtitle}>{item.title}</Typography>
											<FormControlLabel
												control={
													<Checkbox
														name={`permissions[${index}].view`}
														checked={item.view}
														onChange={handleChange}
														onBlur={handleBlur}
														value={item.view ? 'on' : 'off'}
														classes={{
															root: classes.root2,
															checked: classes.checked,
														}}
													/>
												}
												label="View"
											/>
											<FormControlLabel
												control={
													<Checkbox
														name={`permissions[${index}].create`}
														checked={item.create}
														onChange={handleChange}
														onBlur={handleBlur}
														value={item.create ? 'on' : 'off'}
														classes={{
															root: classes.root2,
															checked: classes.checked,
														}}
													/>
												}
												label="Create"
											/>
											<FormControlLabel
												control={
													<Checkbox
														name={`permissions[${index}].edit`}
														checked={item.edit}
														onChange={handleChange}
														onBlur={handleBlur}
														value={item.edit ? 'on' : 'off'}
														classes={{
															root: classes.root2,
															checked: classes.checked,
														}}
													/>
												}
												label="Edit"
											/>
											<FormControlLabel
												control={
													<Checkbox
														name={`permissions[${index}].delete`}
														checked={item.delete}
														onChange={handleChange}
														onBlur={handleBlur}
														value={item.delete ? 'on' : 'off'}
														classes={{
															root: classes.root2,
															checked: classes.checked,
														}}
													/>
												}
												label="Delete"
											/>
											<br />
											<Divider/>
											<br />
										</div>
									))}
								
									<br />
									{/* {this.props.user && this.props.user.id && ( */}
										<div>
											<br />
											<br />
											<Button variant="contained" color="primary" type="submit" disabled={isSubmitting}>
												Save
											</Button>
										</div>
									{/* )} */}
								</div>
							</Paper>
						</form>
						)}
					}
				</Formik>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (user) => dispatch(saveUser(user)),
    addUser: (user) => dispatch(addUser(user)),
  }
};

UserGroupForm.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(UserGroupForm));	
