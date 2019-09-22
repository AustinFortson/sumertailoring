import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import IMG4 from '../../components/images/IMG4.jpg';
import IMG5 from '../../components/images/IMG5.jpg';
import IMG6 from '../../components/images/IMG6.jpg';
import IMG7 from '../../components/images/IMG7.jpg';
import IMG8 from '../../components/images/IMG8.jpg';
import IMG9 from '../../components/images/IMG9.jpg';
import './imagelist.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000,
  },
}));


const tileData = [
    {
        img: IMG4,
        cols: 2,
    },
    {
        img: IMG6,
        cols: 1,
    },
    {
      img: IMG7,
      cols: 3,
  },
    {
      img: IMG5,
      cols: 1,
  },
  {
    img: IMG8,
    cols: 1,
  },
  {
  img: IMG9,
  cols: 1,
  },
];

export default function ImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root} id="ImageList">
      <GridList cellHeight={325} className={classes.gridList} cols={3}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}