const { describe, it } = require("mocha")
const { expect } = require("chai")
const mad = require("../src/mad")

describe("mad", function(){
  it("should return the mad of an array of numbers", function(){
    expect(mad([1,4,4,1,1])).to.equal(0)
  })
  it("should return undefined for a 0-array", function(){
    expect(mad([])).to.be.undefined;
  })
  it("should return zero for a 1-array", function(){
    expect(mad([4])).to.equal(0);
  })
  it("should not sort the array if it is already sorted", function(){
    expect(mad([1,4,4,1,1], true)).to.equal(3)
  })
})
