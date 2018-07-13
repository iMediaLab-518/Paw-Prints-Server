let request = require("supertest");


describe('GET 127.0.0.1:8888/', () => {
	it('respond with text', (done) => {
		request(app)
			.get('/')
			.set('Accept', 'application/text')
			.expect('Content-Type', 'text/plain')
			.expect(200)
			.end((err, res) => {
				if (err) {
					done(err);
				}
				res.body.name.should.be.eql('Welcome to Paw-Prints Project Background Server\n');
				done();
			})
	});
});

describe('GET 127.0.0.1:8888/test', () => {
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
