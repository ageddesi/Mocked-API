import { Domain } from "domain";
import { response } from "express";

export interface IAnalyticsInformation{
    url: string;
    domain: string;
    ua: string;
    lang: string;
    method: any;
    cip: any;
    res: any;
    res_status: string;
    res_length: any;  
}
