import { Request, Response } from 'express';
import * as core from 'express-serve-static-core';
import getRandomAddresses from '../utils/getRandomAddress';
import { getQtyFromRequest } from '../../../utils/route-utils';
import { getCountryNameFromRequest } from '../../../utils/route-utils';

module.exports = function(app : core.Express) {

	// get a random address (by default, a UK address is returned)
	app.get('/address', (req: Request, res: Response) => {
		const address = getRandomAddresses();
		res.json(address);
	});

	// get a random UK/USA address
	app.get('/address/:country?', (req: Request, res: Response) => {
		const country = getCountryNameFromRequest(req);
		const address = getRandomAddresses(1, country);
		res.json(address);
	});

	// get random USA/UK addresses
	app.get('/address/:country?/:qty?', (req: Request, res: Response) => {
		const country = getCountryNameFromRequest(req);
		const qty = getQtyFromRequest(req);
		const addresses = getRandomAddresses(qty, country);
		res.json(addresses);
	});
}