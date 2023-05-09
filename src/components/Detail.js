import React, { useEffect, useState } from "react";
import { Typography, Stack, Button } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const [extraDetails, setExtraDetails] = useState([])

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: exerciseDetail?.name || "",
    },
    {
      icon: TargetImage,
      name: exerciseDetail?.target || "",
    },
    {
      icon: EquipmentImage,
      name: exerciseDetail?.equipment || "",
    },
  ];

  useEffect(() => {
    setExtraDetails([...extraDetail])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exerciseDetail])

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={exerciseDetail?.gifUrl || ""} alt="name" loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "220px" } }}>
        <Typography variant="h3">
          {" "}
          <span style={{ textTransform: "capitalize" , fontWeight:'600' }}>{exerciseDetail?.name || ""}</span>
        </Typography>
        <Typography variant="h6">
          Exercises keep you Strong.{`  `}
          {exerciseDetail?.name || ""} {` `}is one of the best exercies to target your {exerciseDetail?.target || ""}. It
          will help you to improve mood and gain enetgy.
        </Typography>
        {extraDetails.length ? extraDetails.map((item, index) => (
          <Stack key={`exercise-details-${index}`} direction="row" gap="24px" alignItems="center">
            <Button>
              <img src={item.icon} alt={item.icon} />
            </Button>
            <Typography variant="h5">{item.name}</Typography>
          </Stack>
        )) : <></>}
      </Stack>
    </Stack>
  );
};

export default Detail;
