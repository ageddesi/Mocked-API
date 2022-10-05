import { Request } from 'express';
import ImageDataType from '../modules/images/consts/imageDataType';

const defaultQty = 10;
const maxQty = 100;
const imageWidthDefault = 640;
const imageHeightDefault = 480;
const defaultCountry = 'uk';

const getQtyFromRequest = (request : Request | null, overrideDefaultQty?: number | null) : number => {
    return request.params.qty ? 
           (parseInt(request.params.qty) < maxQty ? parseInt(request.params.qty):maxQty) :
           (overrideDefaultQty? overrideDefaultQty: defaultQty);
}

const getImageDataFromRequest = (request : Request | null) : ImageDataType => {
    const qty = request.params.qty ? parseInt(request.params.qty) : defaultQty;
    const height = request.params.height ? parseInt(request.params.height) : imageHeightDefault;
    const width = request.params.width ? parseInt(request.params.width) : imageWidthDefault;
    return {
        Width: width,
        Height: height,
        Qty: qty
    }
}

const getCountryNameFromRequest = (request : Request | null) : string => {
	return request.params.country ? request.params.country : defaultCountry;
}


export {
    getQtyFromRequest,
    getImageDataFromRequest,
	getCountryNameFromRequest
}