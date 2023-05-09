export type PropsType={
    darkMode:boolean;
}
export type userProps={
    name:string;
    email:string;
}
export type userDataType={
    status:string;
    data:{
        name:string;
        email:string;
        btnTitle?:string;
        logo?:string
    }
}
export type dataType={
    email:string;
    setEmail:React.Dispatch<React.SetStateAction<string>>;
    updateInfo:string;
    setUpdateInfo:React.Dispatch<React.SetStateAction<string>>;

}