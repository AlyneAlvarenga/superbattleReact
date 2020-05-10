import React from 'react';
import { NativeSelect } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const SelectHeroes = (props) => {
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
    <FormControl variant="outlined">
      <NativeSelect style={styles} name="" onChange={props.handleChange} disabled={props.disabled ? true : null} className={classes.select} classes={{
        icon: classes.icon
      }}>
          <option value="">Choose Your Champion</option>
        {
          props.superheroData.map(obj => {
            return <option key={obj.id} value={obj.id}>{obj.name}</option>
          })
        }
      </NativeSelect>
    </FormControl>
  )
}

export default SelectHeroes;