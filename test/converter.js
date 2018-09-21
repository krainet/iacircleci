var expect    = require("chai").expect;
var converter = require("../app/converter");
var request = require("request");
const fs = require('fs');


describe("Color Code Converter", function() {
    describe("RGB to Hex conversion", function() {
        it("converts the basic colors", function() {
            var redHex   = converter.rgbToHex(255, 0, 0);
            var greenHex = converter.rgbToHex(0, 255, 0);
            var blueHex  = converter.rgbToHex(0, 0, 255);

            expect(redHex).to.equal("ff0000");
            expect(greenHex).to.equal("00ff00");
            expect(blueHex).to.equal("0000ff");
        });
    });

    describe("Hex to RGB conversion", function() {
        it("converts the basic colors", function() {
            var red   = converter.hexToRgb("ff0000");
            var green = converter.hexToRgb("00ff00");
            var blue  = converter.hexToRgb("0000ff");

            expect(red).to.deep.equal([255, 0, 0]);
            expect(green).to.deep.equal([0, 255, 0]);
            expect(blue).to.deep.equal([0, 0, 255]);
        });
    });
});

describe("Color Code Converter API", function() {

    describe("RGB to Hex conversion", function() {

        it("returns status 200", function() {});

        it("returns the color in hex", function() {});

    });

    describe("Hex to RGB conversion", function() {

        it("returns status 200", function() {});

        it("returns the color in RGB", function() {});

    });

});

describe("Color Code Converter API 1", function() {
    var myIp = fs.readFileSync('logs/ip.log', 'utf8');
    describe("RGB to Hex conversion 2", function() {

        var url = "http://"+myIp+":3000/rgbToHex?red=255&green=255&blue=255";

        it("returns status 200", function() {});

        it("returns the color in hex", function() {});

    });

    describe("Hex to RGB conversion 3", function() {

        var url = "http://"+myIp+":3000/hexToRgb?hex=00ff00";

        it("returns status 200", function() {});

        it("returns the color in RGB", function() {});

    });

});

describe("Color Code Converter API 4", function() {
    var myIp = fs.readFileSync('logs/ip.log', 'utf8');

    describe("RGB to Hex conversion 5", function() {

        var url = "http://"+myIp+":3000/rgbToHex?red=255&green=255&blue=255";
        console.log(url);

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in hex", function(done) {
            request(url, function(error, response, body) {
                expect(body).to.equal("ffffff");
                done();
            });
        });

    });

    describe("Hex to RGB conversion 6", function() {

        var url = "http://"+myIp+":3000/hexToRgb?hex=00ff00";

        it("returns status 200", function(done) {
            request(url, function(error, response, body) {
                console.log(error);
                console.log(response);
                console.log(body);
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it("returns the color in RGB 7", function(done) {
            request(url, function(error, response, body) {
                expect(body).to.equal("[0,255,0]");
                done();
            });
        });
    });

});
