let request = require("supertest");
let express = require("express");
/* ------------------------------------------------------------------------------------------------- */
let app = express();

app.get('/test', (req, res) => {
	let json = {
		session_id: -1,
		context: 'json test'
	};
	res.status(200).json(json);
});
/* ------------------------------------------------------------------------------------------------- */

describe('GET /test', () => {
	it('respond with json', () => {
		request(app)
			.get('/test')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.then(res => {
				assert(res.body.session_id, -1)
				assert(res.body.context, 'json test')
			})
	});
});
