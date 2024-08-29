import React from "react";
import { useTheme } from "@mui/material/styles";
import { Card, CardContent, Typography } from "@mui/material";
import PieCharts from "../Components/PieCharts.js";
import NoContent from "../Components/NoContent.js";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

const WidgetCard = ({ data, Header, noContent }) => {
  const theme = useTheme();
  const variants = ["danger", "warning", "info", "success"];
  debugger;
  const finalData = data?.filter((dat) => dat.isChecked == "true");
  console.log(Header);

  return (
    <Card
      variant="outlined"
      sx={{
        flex: 1,
        minWidth: 350,
        height: 206,
        borderRadius: 3,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardContent className="small-head">
        {Header}

        <Typography variant="h6" component="div">
          {data ? (
            Header !== "Image Risk Assessment" &&
            Header !== "Image Security Issue" ? (
              <PieCharts data={finalData} />
            ) : (
              <ProgressBar>
                {finalData.map((item, index) => (
                  <ProgressBar
                    now={item.value}
                    key={index}
                    variant={variants[index]} 
                    label={`${item.label} ${item.value}`} 
                    striped 
                    animated 
                  />
                ))}
              </ProgressBar>
            )
          ) : (
            <NoContent noContent={noContent} />
          )}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default WidgetCard;
