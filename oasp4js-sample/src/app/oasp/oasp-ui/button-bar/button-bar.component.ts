import { Component, Input, OnInit, Injectable } from '@angular/core';

@Component({
  selector: 'button-bar',
  templateUrl: './app/oasp/oasp-ui/button-bar/button-bar.component.html',
  styleUrls: ['./app/oasp4js-sample.component.css']
}) 
export class ButtonBarComponent { 
	@Input() buttonDefs:Object;

	onButtonClick(buttonDef) { 
        if (buttonDef && this.isFunction(buttonDef.onClick)) {
            buttonDef.onClick.apply(undefined, arguments);
        }
    }

    isButtonDisabled(buttonDef) { 
        if (buttonDef && this.isFunction(buttonDef.isActive)) {
            return !buttonDef.isActive.apply(undefined, arguments);
        } 
        if (buttonDef && this.isFunction(buttonDef.isNotActive)) {
            return buttonDef.isNotActive.apply(undefined, arguments);
        }
        return true;
    }

    isFunction(functionToCheck) {
	 var getType = {};
	 return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
	}
} 