import * as React from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse
} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

type MealCardProps = {
  title: string, 
  dishType: string, 
  mealType: string, 
  image: string, 
  ingredients: any[]
}

export const MealCard = (props: MealCardProps) => {
  const {title,dishType,mealType,image,ingredients}= props
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs="auto">
      <Card sx={{ width: 300 }}>
        <CardHeader
          title={title}
          subheader={dishType}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary" lineHeight="2rem">
            {mealType}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph color="#d40000" >Recipe:</Typography>
            {ingredients.map((data) => (
              <Typography>
                {data},
                &nbsp;
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}