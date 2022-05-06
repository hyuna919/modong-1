import { useEffect, useState } from "react";
import { useSelector, useDispatch} from "react-redux";
import actionCreators from "./actionCreators";

export const datetrans =(time:string) =>{
    const milliSeconds = +new Date() - +new Date(time)
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `방금 전`
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 전`
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 전`
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 전`
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 전`
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 전`
    const years = days / 365
    return `${Math.floor(years)}년 전`
}

export const reversedatetrans =(time:string)=>{
    const milliSeconds = +new Date(time) - +new Date()
    const seconds = milliSeconds / 1000
    if (seconds < 60) return `얼마 안 `
    const minutes = seconds / 60
    if (minutes < 60) return `${Math.floor(minutes)}분 `
    const hours = minutes / 60
    if (hours < 24) return `${Math.floor(hours)}시간 `
    const days = hours / 24
    if (days < 7) return `${Math.floor(days)}일 `
    const weeks = days / 7
    if (weeks < 5) return `${Math.floor(weeks)}주 `
    const months = days / 30
    if (months < 12) return `${Math.floor(months)}개월 `
    const years = days / 365
    return `${Math.floor(years)}년 `
}
export const useTimeLapse = () => {
    const [timeLapse, setTime] = useState<string>("과거의 유산");
    
    

}

export default useTimeLapse;