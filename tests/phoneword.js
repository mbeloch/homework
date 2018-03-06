const chai = require('chai');
const phoneword = require('../server/phoneword');
const expect = chai.expect;

describe('phonewords', function () {
  it('phonewords return null', function () {
    const ph = phoneword('0');
    expect(ph).to.be.a.null;
  });

  it('phonewords return array', function () {
    const ph = phoneword('23');
    expect(ph).to.be.an('array');
    expect(ph).that.does.include('ae');
  });

  it('phonewords return array with expect response', function () {
    const ph = phoneword('23');
    expect(ph).to.have.lengthOf(9);
    expect(ph).that.does.include('ad');
    expect(ph).that.does.include('ae');
    expect(ph).that.does.include('af');
    expect(ph).that.does.include('bd');
    expect(ph).that.does.include('be');
    expect(ph).that.does.include('bf');
    expect(ph).that.does.include('cd');
    expect(ph).that.does.include('ce');
    expect(ph).that.does.include('cf');
  });
});