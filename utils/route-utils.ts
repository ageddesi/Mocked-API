import { Request } from 'express';

const defaultQty = 10;

const getQtyFromRequest = (request : Request | null) : number => {
    return request.params.qty ? parseInt(request.params.qty) : defaultQty;
}

export {
    getQtyFromRequest
}