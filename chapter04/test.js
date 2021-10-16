const { assert, expect } = require("chai");
const { describe, it } = require("mocha");
const { Province, sampleProvinceData } = require("./code");

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        // assert.equal(asia.shortfall, 5);
        expect(asia.shortfall).equal(5);
    })
})