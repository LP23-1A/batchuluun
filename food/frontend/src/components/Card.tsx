import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
type PropsType = {
  props?: {};
  name?: String;
  price?: String;
};
export default function ImgCard(props: any) {
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100px"
          width="282px"
          image={props.img}
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
          <Box sx={{ display: "flex", flexDirection: "row", gap: "20px" }}>
            <Typography
              variant="body2"
              color="#18BA51"
              fontSize={"18px"}
              fontWeight={"600"}
            >
              {props.price}₮
            </Typography>
            <Typography fontSize={"18px"}>
              <del>{props.count > 0 ? props.count + "₮" : ""}</del>
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: "16px",
              left: "197px",
              // border: "1px solid white",
              paddingY: "4px",
              paddingX: "20px",
              borderRadius: "15px",
              color: "white",
            }}
            style={{ backgroundColor: props.discount > 0 ? "#18BA51" : "" }}
          >
            <Typography>
              {props.discount > 0 ? props.discount + "%" : ""}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
