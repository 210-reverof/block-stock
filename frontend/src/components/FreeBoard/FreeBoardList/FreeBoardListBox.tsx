import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Pagination from "@mui/material/Pagination";
import "./style.css";

import { useNavigate } from "react-router-dom";
import Tooltip from "../../Tooltip/Tooltip";
import {
  Container,
  Wrapper,
  Header,
  Search,
  CreateBtn,
  FreeBoardListTitle,
  ListNumber,
  ListTitle,
  ListWriter,
  ListTime,
  ListHit,
  FreeBoardBox,
  ItemNumber,
  ItemTitle,
  ItemWriter,
  ItemTime,
  ItemtHit,
  DivBox,
  Hr,
  Posting,
  Img,
  Box1
} from "./FreeBoardListBox.style";
 // 날짜 변환
 import dayjs from "dayjs";
// api
import {freeBoardList} from '../../../api/FreeBoard/FreeBoard'

function FreeBoardListBox() {
  const navigate = useNavigate();

  const [menu, setMenu] = useState("createdAt");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(8);

  // 글 리스트
  const [ boardList, setBoardList] = useState([])
  // 전체 글의 수, 페이지 수
  const [count, setCount] = useState(0)
  const [ itemCount, setItemCount] = useState(0)

  // api 통신 =============================================================
  const params = {
    sort: menu,
    page: page-1,
    size: rowsPerPage,
    keyWord: searchKeyword,
  };

  const handleChangeSearch = (e)=>{
    setSearchKeyword(e.target.value)
    setPage(1)
  }
  useEffect(()=>{
    freeboard()
  },[page,rowsPerPage,searchKeyword,menu])

  // 자유게시판 리스트 api
  const freeboard = async () => {
    const res = await freeBoardList(params)
    console.log(res)
    setItemCount(res.data.totalCnt)
    //페이지네이션
    if (res.status===200){
      setBoardList(res.data.freeePostListResponseList)
      if(Math.floor(res.data.totalCnt % 8)){
        setCount(Math.floor(res.data.totalCnt / 8)+1);
      }else{
        setCount(Math.floor(res.data.totalCnt / 8));
      }
    }
  }
  // api 통신 =================

  
  // 삭제시 다시 한번 갱신
  useEffect(()=>{
    freeboard()
  },[])
  

  // sort
  const handleChange = (event: SelectChangeEvent) => {
    const selectedMenu = event.target.value as string;
    setMenu(selectedMenu);
  };

  // 페이지 네이션 2==============================================
  const handlePageChange = (event, newPage) => {
    setPage(newPage); // 페이지 변경 시 상태 변수 업데이트
  };
  const paginationStyle = {
    '& .MuiPagination-ul .MuiPaginationItem-root.Mui-selected': {
      backgroundColor: '#F4F5FA', // 선택된 페이지 배경색을 연보라색으로 변경
    },
    '& .MuiPagination-ul .MuiPaginationItem-root.Mui-selected:hover': {
      backgroundColor: '#F4F5FA', // 선택된 페이지 호버 시 배경색도 연보라색으로 변경
    },
    '& .MuiPagination-ul .MuiPaginationItem-root.MuiPaginationItem-page:hover': {
      backgroundColor: '#F4F5FA', // 페이지 호버 시 배경색도 연보라색으로 변경
    },
  };
  const formatDate = (dateString: string) => {
    const datePart = dateString.split("T")[0];
    return datePart;
  };

  const combinedStyles = {
    ...paginationStyle, // paginationStyle 객체
    display:'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  // 페이지 네이션 2==============================================
  
  return (
    <Container>
      <Wrapper>
        <Header>
          <DivBox>
          <Search placeholder="  검색" onChange={handleChangeSearch} />
          <Box sx={{ maxWidth: "130px",margin:'0px 0px 0px 30px' }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"></InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                onChange={handleChange}
                sx={{
                  fontSize:'12px',
                  height:'30px',
              }}
              >
                <MenuItem sx={{fontSize:'12px'}} value="createdAt">최신순</MenuItem>
                <MenuItem sx={{fontSize:'12px'}} value="likes">좋아요</MenuItem>
                <MenuItem sx={{fontSize:'12px'}} value="hit">조회수</MenuItem>
              </Select>
            </FormControl>
          </Box>
          </DivBox>
          <DivBox>
            <CreateBtn onClick={() => navigate("/freeboardcreate")}>
              글 작성
            </CreateBtn>
          </DivBox>
        </Header>
        <FreeBoardBox>
          <FreeBoardListTitle>
            <ListNumber>
              <div>번호</div>
            </ListNumber>
            <ListTitle>
              <div>제목</div>
            </ListTitle>
            <ListWriter>
              <div>작성자</div>
            </ListWriter>
            <ListTime>
              <div>작성시간</div>
            </ListTime>
            <ListHit>
              <div>조회수</div>
            </ListHit>
          </FreeBoardListTitle>

        
          {boardList.map((item, index) => (
            <Posting key={`boardItem_${index}`}>
              <div style={{ display: "flex", cursor: "pointer" }}>
                <ItemNumber>{(itemCount - (page - 1) * 8)- index}</ItemNumber>
                <ItemTitle
                  onClick={() => {
                    navigate(`/freeboarddetail`, {
                      state: { postId: item.freePostId }, // URL 매개변수 설정
                    });
                  }}
                >
                  {item.title}
                </ItemTitle>

                <Tooltip
                  state={{
                    memberId: item.memberId,
                    nickname: item.nickname,
                    id: item.memberId,
                  }}
                > <Box1>
                  <Img src={`https://j9b210.p.ssafy.io:8443/api/member/profile/${item.memberId}`}/>
                  <ItemWriter>{item.nickname}</ItemWriter>
                  </Box1>
                </Tooltip>

                <ItemTime>{formatDate(item.updatedAt)}</ItemTime>
                <ItemtHit>{item.hit}</ItemtHit>
              </div>
              <Hr/>
            </Posting>
          ))}
        </FreeBoardBox>
        <Pagination 
        count={count} 
        showFirstButton showLastButton
        page={page}
        onChange={handlePageChange}
        sx={combinedStyles}
         />
      </Wrapper>
    </Container>
  );
}

export default FreeBoardListBox;
