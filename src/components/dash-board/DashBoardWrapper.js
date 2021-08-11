import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { dashBoardWrapperStyles } from '../../styles/dashBoardStyles';
import RenderCharts from '../render-charts/RenderCharts';

const useStyles = makeStyles(() => dashBoardWrapperStyles);

export default function DashBoardWrapper({ dashboard, titles, showBar }) {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
    >
      {titles.map(title => (
        <Grid key={title} item>
          {dashboard === 'header' && (
            <Box className={showBar ? classes.openHeader : classes.hideHeader}>
              <Typography className={classes.text}>{title}</Typography>
            </Box>
          )}
          {dashboard === 'body' &&
            (title === '' ? (
              <Box className={classes.plholder}></Box>
            ) : (
              <Box className={classes.plholder}>
                <RenderCharts field={title} />
              </Box>
            ))}
        </Grid>
      ))}
    </Grid>
  );
}
