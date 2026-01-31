import React from "react";
import ReviewCard from "./ReviewCard";
import manImage from "../../../../public/man.png";
import womanImage from "../../../../public/woman.png";
import Rating from "@mui/material/Rating";
import LinearProgressBar from "../../components/LinearProgressBar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const ReviewSection = () => {
  return (
    <div className="mt-4">
      <p className="font-semibold py-2 px-4 text-2xl ">
        Recent Reviews and Ratings
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:col-span-1 max-h-[300px] overflow-y-auto">
          <ReviewCard
            name={"Arush Srivastava"}
            date={"April 21,2005"}
            rating={2.5}
            img={manImage}
          />
          <ReviewCard
            name={"Bhumika Rajput"}
            date={"May 3,2005"}
            rating={5}
            img={womanImage}
          />
          <ReviewCard
            name={"Arush Srivastava"}
            date={"April 21,2005"}
            rating={4}
          />
        </div>
        <div className="ml-[200px]">
          <p className="font-semibold text-lg mb-1 px-1">Product Ratings</p>
          <div className="flex  gap-2">
            <Rating
              name="half-rating-read"
              defaultValue={4}
              precision={0.5}
              readOnly
              size="medium"
            />
            <p className="text-md text-gray-500">Based on 1500 reviews</p>
          </div>
          <Box className="mt-2 space-y-2">
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={3} sx={{ width: 100 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Excellent</p>
            </Grid>
            <Grid item xs={9} minWidth={250}>
              <LinearProgressBar
                variant="determinate"
                value={60}
                color="success"
                sx={{
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: "#d0d0d0",
                }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={3} sx={{ width: 100 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Very Good</p>
            </Grid>
            <Grid item xs={9} minWidth={250}>
              <LinearProgressBar
                variant="determinate"
                value={20}
                color="success"
                sx={{
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: "#d0d0d0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#66bb6a",
                  },
                  
                }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={3} sx={{ width: 100 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Good</p>
            </Grid>
            <Grid item xs={9} minWidth={250}>
              <LinearProgressBar
                variant="determinate"
                value={20}
                sx={{
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: "#d0d0d0",
                  "& .MuiLinearProgress-bar": {
                    backgroundColor: "#ffa726",
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={3} sx={{ width: 100 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Average</p>
            </Grid>
            <Grid item xs={9} minWidth={250}>
              <LinearProgressBar
                variant="determinate"
                value={7}
                color="warning"
                sx={{
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: "#d0d0d0",
                }}
              />
            </Grid>
          </Grid>
          <Grid container alignItems="center" columnSpacing={2}>
            <Grid item xs={3} sx={{ width: 100 }}>
              <p style={{ margin: 0, fontWeight: 600 }}>Poor</p>
            </Grid>
            <Grid item xs={9} minWidth={250}>
              <LinearProgressBar
                variant="determinate"
                value={8}
                color="error"
                sx={{
                  height: 7,
                  borderRadius: 4,
                  backgroundColor: "#d0d0d0",
                }}
              />
            </Grid>
          </Grid>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
