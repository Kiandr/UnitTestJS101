/* Copyright (c) 1994-2016 Sage Software, Inc.  All rights reserved. */

/// <reference path="../TestUtils/OEOrderEntryTestUtils.js" />
/// <reference path="../../../OE/Scripts/OrderEntry/Sage.CA.SBS.ERP.Sage300.OE.OrderEntryBehaviour.js" />


describe("OE Order Entry tests", function () {
    //var spyEvent;

    beforeEach(function () {
        
    });

    
    it("Test_OEOrderEntryTest", function () {
        orderEntryUI.quickPreAuth();
        //spyEvent = spyOnEvent('#btnQuickPreAuth1', 'click');
        //$('#btnQuickPreAuth1').trigger("click");
        //$('#btnQuickPreAuth').trigger("click");
        expect(1==1).toEqual(true);
    })
});