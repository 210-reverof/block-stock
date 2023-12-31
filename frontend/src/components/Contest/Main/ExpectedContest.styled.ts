
import { styled } from "styled-components";

export const Container = styled.div`
max-width: 700px;
`;

export const ContestTitleWrapper = styled.div`
width: 500px;
display: flex;
`;

export const ContestTitle = styled.div`
  font-size: 25px;
  margin: 0px 0px 10px 10px;
  font-weight: bold;
`;

export const ContestLink = styled.div`
font-size: 12px;
margin: 10px;
color: #A0A0A0;
cursor: pointer;
`;
export const Wrappe = styled.div`
width: 40%;
height: 250px;
overflow: auto;
box-sizing: border-box;
position: absolute;
background: #FFFFFF;
margin: 0px 0px 0px 5px;
box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.08);
border-radius: 10px;
/* 스크롤바 트랙 (배경) 스타일링 */
&::-webkit-scrollbar {
  width: 0px; /* 스크롤바의 너비 설정 */
}

/* 스크롤바 색상 설정 */
&::-webkit-scrollbar-thumb {
  background: #888; /* 스크롤바 색상 설정 */
  border-radius: 6px; /* 스크롤바 모양을 둥글게 만듭니다. */
}

/* 스크롤바 hover 시 색상 변경 */
&::-webkit-scrollbar-thumb:hover {
  background: #555; /* 스크롤바 hover 시 색상 변경 */
}
`;

export const ContestHeader = styled.div`
display:flex;
height: 36px;
padding: 5px 0px 0px 5px;
`;

export const ConfirmationBtn1 = styled.div`
margin: 2px 0px 0px 10px;
min-width: 60px;
height: 20px;
font-weight: 600;
font-size: 8px;
background: #676767;
border-radius: 6px;
color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`;

export const ConfirmationBtn2 = styled.div`
margin: 2px 0px 0px 10px;
min-width: 60px;
height: 20px;
font-weight: 600;
font-size: 8px;
line-height: 11px;
background: #D4D4D4;
border-radius: 6px;
color: black;
display: flex;
align-items: center;
justify-content: center;
`;

export const Title = styled.div`
font-size:16px;
margin: 0px 0px 0px 0px;
font-weight: 600;
min-width: 250px;
`;

export const ContestPeriod = styled.div`
margin: 0px 0px 0px 10px;
font-size:12px;
color: #B6ABBB;
`;

export const ContestBox = styled.div`
padding: 10px 0px 10px 30px;
`;
export const Box = styled.div`
:hover {
  background-color: #f5f5f5;
}
`;

export const ContentBox = styled.div`
font-size: 14px;
`;

export const Participants = styled.div`
color: #B6ABBB;
margin: 3px 0px 3px 0px
`;
export const Ticket = styled.div`
color: #B6ABBB;
margin: 3px 0px 3px 0px
`;
export const Term = styled.div`
color: #B6ABBB;
margin: 3px 0px 20px 0px
`;
export const ContestContent = styled.div`
margin: 0px 0px 30px 0px;
max-width: 500px;
`;

export const Notexist = styled.div`
color: #ABABAB;
`;


