import { privateApi, } from "..";

interface pwData {
    originPassword: string;
    newPassword: string;
    confirmPassword: string,
  }
interface nickName {
    nickname: string;
}

// 마이페이지 조회 api
export const getmypage = async () => {
    try{
        // console.log('마이페이지 try진입')
        const response = await privateApi.get("/member");
        // console.log('데이터야?', response.data);
        return response.data;    
    }catch (error) {
        console.error("error!", error);
    }
};

// 프로필 이미지 등록
export const putProfile = async(formData) => {
    try{
        console.log("프로필 try", formData)
        const response = await privateApi.put("/member/profile", formData,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            },
        });
        return response
    }catch(error){
        console.log('err', error)
    }
}

// 비밀번호 수정
export const putPassword = async(pw : pwData) => {
    try{
        // console.log('-----------------',pw)
        const response = await privateApi.put("/member/password", pw);
        return response.request
    }catch(error){
        console.log("error!", error)
    }
}

// 닉네임 수정
export const putNickName = async(name: nickName) => {
    try{
        const response = await privateApi.put("/member", name);
        return response
    }catch(error){
        console.log('err', error)
    }
}

// 기록 조회
export const getRecodeList =async() => {
    try{
        console.log('try history')
        const response = await privateApi.get("/contest/history");
        // console.log('기록조회', response.data)
        return response.data
    }catch(error){
        console.log('err', error)
    }
}

// 내 전략 조회
export const getTactic =async() => {
    try{
        // console.log('try mytactic')
        const response = await privateApi.get("/tactic");
        console.log('전략 조회', response.data)
        return response.data
    }catch(error){
        console.log('err', error)
    }
}

// 전략 삭제
export const deleteTactic = async (id: number) => {
 try{
    const response = await privateApi.delete(`/tactic/${id}`)
    console.log("res", response)
    return response
 }catch(error){
    console.log('err', error)
 } 
}

// 내 자유게시글
export const getmyfreeBoard = async () => {
    const res = await privateApi.get(`/free-board`,{
      params:{
        sort: "createdAt",
        page: 0,
        size: 100,
        keyword: "",
        my: true,
        like: false,
      }
    });
    return res.data
  };

  // 내 좋아요 게시글
export const getlikefreeBoard = async () => {
    console.log("내 좋아요 게시판 try")
    const res = await privateApi.get(`/free-board`,{
      params:{
        sort: "createdAt",
        page: 0,
        size: 100,
        keyword: "",
        my: false,
        like: true,
      }
    });
    console.log("먀먀먀", res.data);
    return res.data
  };