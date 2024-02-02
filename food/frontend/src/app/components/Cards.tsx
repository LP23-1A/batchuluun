import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import image from "../../../public/img/ice.png";
type PropsType = {
  name?: String;
  price?: String;
};
const BaseUrl =
  "https://www.foodiesfeed.com/wp-content/uploads/2023/07/fresh-fruit-platter.jpg";
export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={BaseUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary"></Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
