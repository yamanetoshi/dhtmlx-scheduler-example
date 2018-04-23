import {Response} from "@angular/http";

export function ExtractData(res: Response): any {
    console.log("res");
    console.log(res);
    let body = res.json();
    // debug
    console.log("debug");
    console.log(body);
    if (body && body.data) {
        console.log(body.data);
    }
    // debug
//    return body && body.data ? body.data: {};
    return body ? body : {};
}

export function HandleError(error: any): Promise<any>{
    console.log(error);
    return Promise.reject(error);
}