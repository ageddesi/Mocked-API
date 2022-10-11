// jest test for getRandomAddresses which returns a random UK/USA format address

import getRandomAddresses from '../../utils/getRandomAddress';
import { faker } from '@faker-js/faker';

jest.mock('@faker-js/faker', () => ({
	faker: {
		name: {
			fullName: jest.fn()
				.mockReturnValue('Andrew Kappa'),
			sexType: jest.fn()
				.mockReturnValue('male')
		},
		address: {
			streetAddress: jest.fn()
				.mockReturnValue('3686 Capital Lakeview'),
			cityName: jest.fn()
				.mockReturnValue('Lahore'),
			zipCode: jest.fn()
				.mockReturnValue('2344')
		}
	}
}));

describe('getRandomAddresses', () => {
	afterEach(() => {
		jest.clearAllMocks();
	})

	it('should return a random USA address by default', () => {
		const address = getRandomAddresses();
		expect(faker.name.fullName).toHaveBeenCalledTimes(1);
		expect(faker.name.sexType).toHaveBeenCalledTimes(1);
		expect(faker.address.streetAddress).toHaveBeenCalledTimes(1);
		expect(faker.address.cityName).toHaveBeenCalledTimes(1);
		expect(faker.address.zipCode).toHaveBeenCalledTimes(1);
		expect(address[0])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore\n2344\nUK`);
	})

	it('should return a random UK address when passed the "uk" argument', () => {
		const address = getRandomAddresses(1, 'uk');
		expect(faker.name.fullName).toHaveBeenCalledTimes(1);
		expect(faker.name.sexType).toHaveBeenCalledTimes(1);
		expect(faker.address.streetAddress).toHaveBeenCalledTimes(1);
		expect(faker.address.cityName).toHaveBeenCalledTimes(1);
		expect(faker.address.zipCode).toHaveBeenCalledTimes(1);
		expect(address[0])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore\n2344\nUK`);
	})

	it('should return a random USA address when passed the "usa" argument', () => {
		const address = getRandomAddresses(1, 'usa');
		expect(faker.name.fullName).toHaveBeenCalledTimes(1);
		expect(faker.name.sexType).toHaveBeenCalledTimes(1);
		expect(faker.address.streetAddress).toHaveBeenCalledTimes(1);
		expect(faker.address.cityName).toHaveBeenCalledTimes(1);
		expect(faker.address.zipCode).toHaveBeenCalledTimes(1);
		expect(address[0])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA`);
	})

	it('should return USA format addresses equal to the number provided as "addressCount" parameter', () => {
		const address = getRandomAddresses(5, 'usa');
		expect(faker.name.fullName).toHaveBeenCalledTimes(5);
		expect(faker.name.sexType).toHaveBeenCalledTimes(5);
		expect(faker.address.streetAddress).toHaveBeenCalledTimes(5);
		expect(faker.address.cityName).toHaveBeenCalledTimes(5);
		expect(faker.address.zipCode).toHaveBeenCalledTimes(5);
		expect(address[0])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA`);
		expect(address[1])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA`);
		expect(address[2])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA`);
		expect(address[3])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA`);
		expect(address[4])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore 2344\nUSA`);
	})

	it('should return UK format addresses equal to the number provided as "addressCount" parameter', () => {
		const address = getRandomAddresses(3, 'uk');
		expect(faker.name.fullName).toHaveBeenCalledTimes(3);
		expect(faker.name.sexType).toHaveBeenCalledTimes(3);
		expect(faker.address.streetAddress).toHaveBeenCalledTimes(3);
		expect(faker.address.cityName).toHaveBeenCalledTimes(3);
		expect(faker.address.zipCode).toHaveBeenCalledTimes(3);
		expect(address[0])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore\n2344\nUK`);
		expect(address[1])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore\n2344\nUK`);
		expect(address[2])
			.toBe(`Andrew Kappa\n3686 Capital Lakeview\nLahore\n2344\nUK`);
	})
})