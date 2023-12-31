import styled from "styled-components";
import { colors } from "@mui/material";

export const TacticTitle = styled.div`
  /* background-color: rgba(0, 150, 0, 0.08); */
  display: flex;
  width: 100%;
  padding: 10px 0 0 10px;
  font-weight: bolder;
`;
export const TradingHistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const TradingHistoryContents = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 95%;
  overflow: hidden;
  padding-bottom: 50px;
`;

export const LeftDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 23%;
  height: 100%;
`;

export const CenterDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 10px;
  width: 50%;
  height: 100%;
`;

export const RightDiv = styled.div`
  /* background-color: rgba(0, 0, 150, 0.08); */
  display: flex;
  flex-direction: column;
  position: relative;
  width: 23%;
  padding: 10px;
  height: 100%;
`;

export const TradingHistoryDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const TradingHistoryTitle = styled.div`
  width: 100%;
  margin-left: 30px;
  /* height: 7%; */
  padding: 10px;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: bold;
`;

export const OptionHistoryItemList = styled.div`
  width: 90%;
  height: 90%;
  /* margin-bottom: 2%; */
  display: flex;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ItemList = styled.div`
  width: 100%;
  height: 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const OptionHistoryItemTitle = styled.div`
  width: 100%;
  height: 7%;
  font-size: 9px;
  margin-bottom: 1%;
  position: relative;
  display: flex;
  text-align: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const OptionHistoryItemPosLeft = styled.div`
  position: absolute;
  left: 3%;
  font-size: 14px;
  text-align: start;
`;
export const OptionHistoryItemPosCenter = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  left: 40%;
  font-size: 14px;
  transform: translate(-50%, 0%);
`;
export const OptionHistoryItemPosRight = styled.div`
  position: absolute;
  font-size: 14px;
  right: 10%;
`;
export const OptionHistoryItemPosUp = styled.div`
  font-size: 14px;
  right: 10%;
`;
export const OptionHistoryItemPosDown = styled.div`
  display: flex;
  font-size: 12px;
  right: 10%;
  justify-content: end;
  color: #525252;
`;

export const HistoryChartDiv = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  height: 98%;
  width: 98%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HistorySummary = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HistorySummaryContents = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
  height: 90%;
  margin-bottom: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const HistorySummaryContentsItemList = styled.div`
  padding: 5px 0;
  width: 75%;
  height: 35%;
  overflow-y: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 3px;
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.4);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
    border-radius: 6px;
  }
`;

export const HistorySummaryContentsResult = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f7f3ff;
  border-radius: 6px;
  width: 75%;
  height: 45%;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-left: 12.5%;
  margin-right: 12.5%;
`;

// export const HistorySummaryContentsTitle = styled.div`
//   display: flex;
//   font-weight: bolder;
//   font-size: 20px;
//   width: 100%;
//   height: 10%;
//   text-align: center;
//   align-items: center;
// `;
export const HistorySummaryContentsItem = styled.div`
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: 20%;
`;
export const HistorySummaryContentsItemLeft = styled.span`
  position: absolute;
  left: 12.5%;
  color: #929292;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const HistorySummaryContentsItemRight = styled.span`
  position: absolute;
  right: 12.5%;
  color: #000;
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ContestRankinig = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContestRankinigItem = styled.div`
  background-color: white;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
