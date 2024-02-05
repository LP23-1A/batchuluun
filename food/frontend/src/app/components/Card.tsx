import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import image from "../../../public/img/ice.png";
type PropsType = {
  props?: {};
  name?: String;
  price?: String;
};
const BaseUrl =
  "https://www.foodiesfeed.com/wp-content/uploads/2023/07/fresh-fruit-platter.jpg";
export default function ImgCard(props: any) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          width="282px"
          image={BaseUrl}
          alt="green iguana"
          sx={{ width: "282px", height: "186px", borderRadius: "10px" }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            fontSize={"18px"}
            fontWeight={"600"}
          >
            {props.name}
          </Typography>
          <Typography
            variant="body2"
            color="#18BA51"
            fontSize={"18px"}
            fontWeight={"600"}
          >
            {props.price}
          </Typography>
          <Box
            sx={{
              position: "absolute",
              top: "16px",
              left: "197px",
              border: "1px solid white",
              paddingY: "4px",
              paddingX: "16px",
              borderRadius: "15px",
              color: "white",
              backgroundColor: "#18BA51",
            }}
          >
            <Typography>{props.sale}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
