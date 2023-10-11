import { privateApi } from "..";
//  카카오페이
export const kakaoPay = async(money: number) => {
    try{
        console.log(money, '카카오페이 진입')
        const response = await privateApi.post("/payReady", {
          money
        });
        console.log(response, '카카오페이 성공')
        return response
    }catch(error){
        console.log(error)
    }
}