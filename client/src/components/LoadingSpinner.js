import { css } from "@emotion/react";
import ClockLoader from "react-spinners/ClockLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: -5rem;
  border-color: #f6e51a;
`;
let color = "#F6E51A";

const LoadingSpinner = () => {
  return (
    <div className="w-full h-screen flex items-center">
      <ClockLoader color={color} loading={true} css={override} size={50} />
    </div>
  );
};

export default LoadingSpinner;
