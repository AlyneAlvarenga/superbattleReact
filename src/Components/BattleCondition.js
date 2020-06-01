import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MdArrowUpward } from 'react-icons/md';
import { IconContext } from "react-icons";
import './BattleCondition.css';

const BattleCondition = ({handleChange, disableBattle}) => {
  const styles = {
    width: "230px",
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
        borderBottom: `1px solid gold`
      },
      "&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error):before": {
        // hover
        borderBottom: `2px solid gold`
      }
    },
    icon: {
      fill: "white"
    },
  });

  const classes = useStyles();

  return (
    <div className="BattleCondition-container">
      <FormControl variant="filled" >
        <NativeSelect style={styles} name="" id="" onChange={handleChange} className={classes.select} classes={{
          icon: classes.icon
        }} disabled={disableBattle}>
          <option value="">Battle Condition</option>
          <option value="intelligence">Battle of Intelligence</option>
          <option value="speed">Battle of Speed</option>
          <option value="combat">Battle of Combat</option>
          <option value="strength">Battle of Strength</option>
          <option value="power">Battle of Power</option>
        </NativeSelect>
      </FormControl>
      {
        disableBattle
          ? null
          :
          <div>
            <IconContext.Provider value={{ className: "arrow" }}>
              <MdArrowUpward />
            </IconContext.Provider>
          </div>
      }
    </div>
  )
}

export default BattleCondition;