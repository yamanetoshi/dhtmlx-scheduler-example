import {Response} from "@angular/http";

export function ExtractData(res: Response): any {
    let body = res.json();
//    return body && body.data ? body.data: {};
    return body ? body : {};
}

export function HandleError(error: any): Promise<any>{
    console.log(error);
    return Promise.reject(error);
}