import * as React from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const StyledLinearProgress = styled(LinearProgress)(({ theme }) => ({
  borderRadius: 4,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 4,
  },
}));

export default function LinearProgressBar(props) {
  return (
    <StyledLinearProgress
      {...props}        // 🔑 forward EVERYTHING
      sx={{
        width: "100%",  // 🔑 prevent collapse
        ...(props.sx || {}),
      }}
    />
  );
}
