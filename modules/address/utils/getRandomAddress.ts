import { faker } from '@faker-js/faker';

const getRandomAddresses = (addressCount : number = 1, country : string = 'uk') : string[] => {
	const addresses = [];
	
	for (let index = 0; index < addressCount; index++) {
		let addresseeName = faker.name.fullName({
			sex: faker.name.sexType()
		});
		let streetAddress = faker.address.streetAddress(false);
		let city = faker.address.cityName();
		let zipcode = faker.address.zipCode();

		let address = `${addresseeName}\n${streetAddress}\n`;
	
		switch (country) {
			case 'uk':
				address += `${city}\n${zipcode}\nUK`;
				break;
			case 'usa':
			default:
				address += `${city} ${zipcode}\nUSA`;
				break;
		}
		addresses.push(address);
	}
	return addresses;
}

export default getRandomAddresses;