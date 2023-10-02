import express, { Request, Response } from 'express';
import * as core from 'express-serve-static-core';

function handleFlakyRequest(req: Request, res: Response) {
    if(!req.body || !req.body.responses) {
        // Default to 50% chance of success (200), and 50% chance of failure (500) with no message
        const random = Math.random();
        if(random < 0.5) {
            res.status(200).send();
        } else {
            res.status(500).send();
        }

        return;
    }

    const responses = req.body.responses;

    // Calculate the total weight of all responses, defaulting to 1 if no weight is specified
    // Also validate that all responses have a status code
    let totalWeight = 0;

    for (const response of responses) {
        if(!response.status_code) {
            res.status(400).send("One or more responses in the request is missing a status code");
            return;
        }

        response.weight ??= 1;

        totalWeight += response.weight;
    }

    // Generate a random number between 0 and the total weight
    let random = Math.random() * totalWeight;

    for (const response of responses) {
        if(random < response.weight) {
            res.status(response.status_code).send(response.data);
            return;
        }

        random -= response.weight;
    }

    res.status(500).send("This was an actual error, not a flaky one. Please report this to the API maintainers.")
}

module.exports = function (app: core.Express) {

    app.use(express.json())

    /**
     * @openapi
     * definitions:
     *   FlakyRequest:
     *    type: object
     *    properties:
     *      responses:
     *          type: array
     *          items:
     *            type: object
     *            properties:
     *              status_code:
     *                type: integer
     *                description: The status code to return
     *                example: 200
     *              weight:
     *                type: integer
     *                description: The weight of this response. Defaults to 1 if not specified. The higher the weight, the more likely this response will be returned.
     *                example: 2
     *              data:
     *                description: The data to return in the response
     *                example: { "message": "This is a flaky response", "data": "This is some data" }
     */

    /**  
     * @openapi
     * "/flaky/":
     *   get:
     *     tags:
     *     - Flaky
     *     summary: Mock a flaky API that can fail randomly.
     *     description: |-
     *       <img style="margin-right: 20px;float:left" title="image Title" alt="beware" src="/warning.png"> **Some servers, proxies, or clients disallow GET requests with a body. If you are having trouble with this endpoint, try using a POST request instead.**
     * 
     *       This endpoint allows you to mock a flaky API that can fail randomly. You can specify the responses to choose from, and the weight of each response. The higher the weight, the more likely this response will be returned.
     *       By default, this endpoint will return a 50% chance of success (200), and 50% chance of failure (500) with no message.
     *     parameters:
     *       - in: body
     *         name: responses
     *         description: An array of responses to choose from to return. The higher the weight, the more likely this response will be returned.
     *         schema:
     *           $ref: '#/definitions/FlakyRequest'
     *     responses:
     *       '400':
     *         description: One or more responses in the request is missing a status code
     *       '500':
     *          description: Can be returned even when not specified by the request body when an actual internal server error occurs
     */
    app.get('/flaky/', handleFlakyRequest);
    
    /**  
     * @openapi
     * "/flaky/":
     *   post:
     *     tags:
     *     - Flaky
     *     summary: Mock a flaky API that can fail randomly.
     *     description: |-
     *       This endpoint allows you to mock a flaky API that can fail randomly. You can specify the responses to choose from, and the weight of each response. The higher the weight, the more likely this response will be returned.
     *       By default, this endpoint will return a 50% chance of success (200), and 50% chance of failure (500) with no message.
     *     parameters:
     *       - in: body
     *         name: responses
     *         description: An array of responses to choose from to return. The higher the weight, the more likely this response will be returned.
     *         schema:
     *           $ref: '#/definitions/FlakyRequest'
     *     responses:
     *       '400':
     *         description: One or more responses in the request is missing a status code
     *       '500':
     *          description: Can be returned even when not specified by the request body when an actual internal server error occurs
     */
    app.post('/flaky/', handleFlakyRequest);
    
    /**  
     * @openapi
     * "/flaky/":
     *   put:
     *     tags:
     *     - Flaky
     *     summary: Mock a flaky API that can fail randomly.
     *     description: |-
     *       This endpoint allows you to mock a flaky API that can fail randomly. You can specify the responses to choose from, and the weight of each response. The higher the weight, the more likely this response will be returned.
     *       By default, this endpoint will return a 50% chance of success (200), and 50% chance of failure (500) with no message.
     *     parameters:
     *       - in: body
     *         name: responses
     *         description: An array of responses to choose from to return. The higher the weight, the more likely this response will be returned.
     *         schema:
     *           $ref: '#/definitions/FlakyRequest'
     *     responses:
     *       '400':
     *         description: One or more responses in the request is missing a status code
     *       '500':
     *          description: Can be returned even when not specified by the request body when an actual internal server error occurs
     */
    app.put('/flaky/', handleFlakyRequest);
    
    /**  
     * @openapi
     * "/flaky/":
     *   delete:
     *     tags:
     *     - Flaky
     *     summary: Mock a flaky API that can fail randomly.
     *     description: |-
     *       This endpoint allows you to mock a flaky API that can fail randomly. You can specify the responses to choose from, and the weight of each response. The higher the weight, the more likely this response will be returned.
     *       By default, this endpoint will return a 50% chance of success (200), and 50% chance of failure (500) with no message.
     *     parameters:
     *       - in: body
     *         name: responses
     *         description: An array of responses to choose from to return. The higher the weight, the more likely this response will be returned.
     *         schema:
     *           $ref: '#/definitions/FlakyRequest'
     *     responses:
     *       '400':
     *         description: One or more responses in the request is missing a status code
     *       '500':
     *          description: Can be returned even when not specified by the request body when an actual internal server error occurs
     */
    app.delete('/flaky/', handleFlakyRequest);
};
