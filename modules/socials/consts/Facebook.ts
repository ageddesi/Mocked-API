type Facebook = {
  id: string,
  createdUserName: string,
  createdUserEmail: string,
  content: string,
  media: string,
  reactions:{
    like:number,
    love:number,
    wow:number,
    haha:number,
    sad:number,
    angry:number,
  },
  shares: number,
  comments: number,
  createdAt: Date,
}

export default Facebook
