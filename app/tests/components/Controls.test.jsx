var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
    it('should exist', () => {
        expect(Controls).toExist();
    });

    describe('render', () => {
        it('should render the pause button when started', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $pauseBtn = $el.find('button:contains(Pause)'); 
            expect($pauseBtn.length).toBe(1);
        });

        it('should render the start button when paused', () => {
            var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
            var $el = $(ReactDOM.findDOMNode(controls));
            var $startBtn = $el.find('button:contains(Start)'); 
            expect($startBtn.length).toBe(1);
        });
    });
});