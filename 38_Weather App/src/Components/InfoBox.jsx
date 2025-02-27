import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import rain_img from "../assets/rain_img.avif";
import cold_img from "../assets/cold_img.avif";
import hot_img from "../assets/hot_img.avif";
// Icons
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const InfoBox = ({ info }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 150 }}
          image={
            info.humidity > 80 ? rain_img : info.temp > 18 ? hot_img : cold_img
          }
          title="climate image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 18 ? (
              <WbSunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>

          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>
              The weather can be described as <i>{info.weather}</i> and feels
              like {info.feelsLike}&deg;C
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoBox;
