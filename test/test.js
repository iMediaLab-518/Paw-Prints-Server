let request = require("supertest");
let express = require("express");
/* ------------------------------------------------------------------------------------------------- */
let app = express();

app.get('/test', (req, res) => {
	let json = {
		"session_id": -1,
		"context": 'json test'
	};
	res.send(200, JSON.stringify(json));
});
/* ------------------------------------------------------------------------------------------------- */

describe('GET /test', () => {
	it('respond with json', (done) => {
		request(app)
			.get('/test')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.context.should.be.eql('json test');
				done();
			})
	});
});
