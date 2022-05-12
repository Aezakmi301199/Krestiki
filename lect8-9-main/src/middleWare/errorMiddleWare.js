import ApiError from "../back/exceptions/ApiError.js"
export default function errorMiddleWare  (err,req,res,next) {
    console.log(err)
    if (err instanceof ApiError){
        return res.status(err.status).json({message:`${err.message}`,erros:err.errors})
    } 
    return res.status(505).json({message:'Накосячил в бэке,иди исправляй syk'})
}