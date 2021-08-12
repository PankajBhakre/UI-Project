export class Country{
    CountryId: number;
    CountryName: string;
}
export class State{
    StateId: number;
    StateName: string;
}
export class City{
    CityId: number;
    CityName: string;
}
export class Register{
    RegType: string;
    FirstName: string;
    LastName: string;
    Image: string;
    EmailId: string;
    PinCode: number;
    PersonalNumber: number;
    UserName: string;
    Address: string;
    Password: string;
    ConfPassword: string;
    DateOfBirth: string;
    Gender: string;
    Url: string;
    CountryId: number;
    StateId: number;
    CityId:number;
    
   
}
export class Login{
    UserName:string;
    Password:string;
}