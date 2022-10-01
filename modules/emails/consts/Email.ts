type Email = {
  id: string,
  from: string,
  subject: string,
  body: string,
  read: boolean,
  tags: string[],
  date: Date,
}

export default Email
