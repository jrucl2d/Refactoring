const assert = require("assert"); 
const { describe, it } = require("mocha");
const { Province, sampleProvinceData } = require("./code");

describe('province', function() {
    it('shortfall', function() {
        const asia = new Province(sampleProvinceData());
        assert.equal(asia.shortfall, 5);
    })
})