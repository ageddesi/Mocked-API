import { randomRating } from '../numbers';
import { Request } from 'express';
import { getImageDataFromRequest, getQtyFromRequest } from '../route-utils';

describe('route utils', () => {
    describe('get qty from request', () => {
        it('should qty doesnt exist - return 10', () => {
            const expectedQty = 10;
            const res = getQtyFromRequest({
                params: {},
            } as unknown as Request);

            expect(res).toEqual(expectedQty);
        });
        it('should qty doesnt exist, override specified - return 1', () => {
            const expectedQty = 1;
            const res = getQtyFromRequest(
                {
                    params: {},
                } as unknown as Request,
                expectedQty
            );

            expect(res).toEqual(expectedQty);
        });
        it('should return the qty from a request', () => {
            const expectedQty = 5;
            const res = getQtyFromRequest({
                params: {
                    qty: expectedQty,
                },
            } as unknown as Request);

            expect(res).toEqual(expectedQty);
        });

        it('should return the override qty if not qty is given in the request', () => {
            const expectedQty = 10;
            const res = getQtyFromRequest({ params: { qty: undefined } } as unknown as Request, expectedQty);

            expect(res).toEqual(expectedQty);
        });
        it('should return the return spomthing is  qty ', () => {
            const expectedQty = 100;
            const res = getQtyFromRequest({ params: { qty: 'foo' } } as unknown as Request, expectedQty);
            expect(res).toEqual(expectedQty);
        });
    });

    describe('get getImageDataFromRequest from request', () => {
        describe('img qty', () => {
            it('should return the qty from a request', () => {
                const expectedQty = 5;
                const res = getImageDataFromRequest({
                    params: {
                        qty: expectedQty,
                        height: 10,
                        width: 10,
                    },
                } as unknown as Request);

                expect(res.Qty).toEqual(expectedQty);
            });

            it('should return the default qty if not qty is given in the request', () => {
                const res = getImageDataFromRequest({
                    params: {
                        qty: undefined,
                        height: 10,
                        width: 10,
                    },
                } as unknown as Request);

                expect(res.Qty).toEqual(10);
            });
        });

        describe('img height', () => {
            it('should return the height from a request', () => {
                const expectedHeight = 500;
                const res = getImageDataFromRequest({
                    params: {
                        qty: 1,
                        height: expectedHeight,
                        width: 10,
                    },
                } as unknown as Request);

                expect(res.Height).toEqual(expectedHeight);
            });

            it('should return the default height if not height is given in the request', () => {
                const res = getImageDataFromRequest({
                    params: {
                        qty: 1,
                        height: undefined,
                        width: 10,
                    },
                } as unknown as Request);

                expect(res.Height).toEqual(480);
            });
        });

        describe('img width', () => {
            it('should return the width from a request', () => {
                const expectedWidth = 500;
                const res = getImageDataFromRequest({
                    params: {
                        qty: 1,
                        height: 10,
                        width: expectedWidth,
                    },
                } as unknown as Request);

                expect(res.Width).toEqual(expectedWidth);
            });

            it('should return the default width if not width is given in the request', () => {
                const res = getImageDataFromRequest({
                    params: {
                        qty: 1,
                        height: 10,
                        width: undefined,
                    },
                } as unknown as Request);

                expect(res.Width).toEqual(640);
            });
        });
    });
});
