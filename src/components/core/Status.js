import styled from "styled-components";

const getBackgroundColor = (value) => {
  switch (value) {
    case "Completed":
      return "rgba(76, 175, 80)";
    case "Pending":
      return "rgba(255, 152, 0)";
    case "Canceled":
    case "Rejected":
      return "rgba(244, 67, 54)";
    default:
      return "";
  }
};

const Status = styled.span`
    background-color:  ${(props) => getBackgroundColor(props.value)} ;
    border-radius: 2px;
    box-sizing: border-box;
    color: white;
    display inline-flex;
    font-family: 'Roboto, Helvetica, Arial, sans-serif';
    font-size: 12px;
    letter-spacing: 0.5px;
    padding: 4px 8px;
    text-transform: uppercase;
`;

export default Status;
