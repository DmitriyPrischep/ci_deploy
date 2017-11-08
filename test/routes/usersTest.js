'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const chaiHttp = require('chai-http');

const server = require('../../app');

const expect = chai.expect;

chai.use(chaiHttp);
chai.use(chaiAsPromised);

describe('users', () => {
  it('getUsers returns expected status', () => {
    return expect(chai.request(server)
      .get('/users')).to.eventually.have.status(200);
  });
});
