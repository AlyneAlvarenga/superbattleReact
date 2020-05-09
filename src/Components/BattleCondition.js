import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const BattleCondition = ({handleChange}) => {
  const styles = {
    width: "250px",
    fontSize: "1.6rem",
    color: "white",
    fontWeight: "bold"
  }

  const useStyles = makeStyles({
    select: {
      "& option": {
        backgroundColor: "black"
      },
      "&:before": {
        // normal
        borderBottom: "1px solid white"
      },
      "&:after": {
        // focused
        borderBottom: `1px solid yellow`
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
        // hover
        borderBottom: `2px solid yellow`
      }
    },
    selectMenu: {
      backgroundColor: "black"
    },
    icon: {
      fill: "white"
    },
  });

  const classes = useStyles();

  return (
    <FormControl variant="filled" >
      <NativeSelect style={styles} name="" id="" onChange={handleChange} className={classes.select}>
        <option value="">Battle Condition</option>
        <option value="intelligence">Battle of Intelligence</option>
        <option value="speed">Battle of Speed</option>
        <option value="combat">Battle of Combat</option>
        <option value="strength">Battle of Strength</option>
        <option value="power">Battle of Power</option>
      </NativeSelect>
    </FormControl>
  )
}

export default BattleCondition;