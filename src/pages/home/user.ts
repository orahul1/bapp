export class User{

  constructor(
  public email:string,
  public password:string,
  public member_id:number = 0,
  public customer_id:number = 0,
  public signup_request_id:number = 0 ,
  ) {}
};
