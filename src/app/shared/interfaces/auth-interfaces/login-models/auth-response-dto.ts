export class AuthResponseDto {
    id: string = "";
    email: string = "";
    isAuthenticated: boolean = false;
    errorMessage : string ="";
    token: string = "";
  
    init(): void {
      this.email = "";
      this.token = "";
      this.isAuthenticated = false;
    }
    // getValueOfProperty(obj: any, key:string):boolean {
    //   let ret = obj[key];
    //   return ret;
    // }
}