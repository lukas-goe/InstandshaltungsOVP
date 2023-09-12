(function () {
    "use strict";
    sap.ui.controller("customer.zca.omc.zcamaintenancebook.ext.controller.OverViewPageExt", {

        onInit: function () {

        },

        onAfterRendering: function () {

        },


        /*doCustomNavigation: function (sCardId, oContext, oNavigationEntry) {
            if (sCardId === "card00" || sCardId === "card01") {
                var oEntity = oContext && oContext.getProperty(oContext.sPath);
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                var hash = "";
                hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "MaintenanceObject",
                        action: "displayEquipment"
                    }
                })) || "";
                //TechnicalObject has to be a 18 digit number (with leading 0's):
                var sEquipmentNumber = oEntity.EquipmentNumber;
                sEquipmentNumber.padStart(18, '0');
                var sParameters = "?TechObjIsEqui-pOr-FuncnlLoc=EAMS_EQUI&TechnicalObject=" + sEquipmentNumber + "&TechnicalObjectType=" + oEntity.ObjectType;
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash + sParameters
                    }
                });
            } else if (sCardId === "card02") {
                var oEntity = oContext && oContext.getProperty(oContext.sPath);
                var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation");
                var hash = "";
                hash = (oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
                    target: {
                        semanticObject: "REMasterData",
                        action: "manageBusinessEntity"
                    }
                })) || "";
                //Example for RealEstateObjectIdentification: "1000/100039" -> split String because we only need the part behind "/"
                var sREBusinessEntity = oEntity.RealEstateObjectIdentification.substring(5);
                //RealEstateObjectIdentification has to be a 8 digit number (with leading 0's)
                sREBusinessEntity.padStart(8, '0');
                var sParameters = "?sap-ui-tech-hint=GUI&DYNP_OKCODE=RECA_DISPLAY&DYNP_NO1ST=1&CompanyCode=" + oEntity.RealEstateObjectCompanyCode + "&REBusinessEntity=" + sREBusinessEntity;
                oCrossAppNavigator.toExternal({
                    target: {
                        shellHash: hash + sParameters
                    }
                });
            }
        },*/

        // in manifest.json in den Card settings aufnehmen:        "customParams": "onCustomParams",
       /* onCustomParams: function (sCustomParams) {
            //if (sCustomParams === "onCustomParams") {
                return this.getParameters;
            //} else if (sCustomParams === "param2") {
            //    return this.param2;
            //}
        },*/
        //getParameters: function (oNavigateParams, oSelectionVariantParams) {
            //"?TechObjIsEqui-pOr-FuncnlLoc=EAMS_EQUI&TechnicalObject=" + sEquipmentNumber + "&TechnicalObjectType=" + oEntity.ObjectType;
            //var sEquipmentNumber = oNavigateParams.EquipmentNumber.padStart(18, '0');
          //  var aCustomSelectionVariant = [];
            // to get the select option property names, make use of this to check what values are available to modify
            //var aSelectOptionNames = oSelectionVariantParams.getSelectOptionsPropertyNames();
            //var oFilter1 = oSelectionVariantParams.getSelectOption("EquipmentNumber");
            /*var oFilter2 = oSelectionVariantParams.getSelectOption("EquipmentShortName");
            var oFilter3 = oSelectionVariantParams.getSelectOption("ObjectType");
            var oFilter4 = oSelectionVariantParams.getSelectOption("RealEstateObjectShortName");*/
            /*oFilter1 = {
                path: "QualityMessageNumber",
                operator: "EQ",
                value1: "",
                value2: null,
                sign: "I"
            };*/
           /* oFilter2 = {
                path: "EquipmentShortName",
                operator: "EQ",
                value1: "",
                value2: null,
                sign: "I"
            };
            oFilter3 = {
                path: "ObjectType",
                operator: "EQ",
                value1: "",
                value2: null,
                sign: "I"
            };
            oFilter4 = {
                path: "RealEstateObjectShortName",
                operator: "EQ",
                value1: "",
                value2: null,
                sign: "I"
            };
            var oCustomSelectionVariant1 = {
                path: "TechObjIsEqui-pOr-FuncnlLoc",
                operator: "EQ",
                value1: "EAMS_EQUI",
                value2: null,
                sign: "I"
            };
            var oCustomSelectionVariant2 = {
                path: "TechnicalObject",
                operator: "EQ",
                value1: sEquipmentNumber,
                value2: null,
                sign: "I"
            };*/
            
           /* var oCustomSelectionVariant3 = {
                path: "sap-ui-tech-hint",
                operator: "EQ",
                value1: "GUI",
                value2: null,
                sign: "I"
            };
           // aCustomSelectionVariant.push(oCustomSelectionVariant1);
           // aCustomSelectionVariant.push(oCustomSelectionVariant2);
            aCustomSelectionVariant.push(oCustomSelectionVariant3);
           // aCustomSelectionVariant.push(oFilter1);
           // aCustomSelectionVariant.push(oFilter2);
           // aCustomSelectionVariant.push(oFilter3);
           // aCustomSelectionVariant.push(oFilter4);
            return {
                selectionVariant: aCustomSelectionVariant,
                ignoreEmptyString: true
            };
        }*/

    });
})();