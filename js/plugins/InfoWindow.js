//=============================================================================
// InfoWindow.js
//=============================================================================

/*:
 * @plugindesc 情報表示ウィンドウをメニュー画面に追加するプラグイン
 * @author Me
 *
 * @help 情報表示ウィンドウをメニュー画面上に追加します。
 *
 */

(function() {

    var _Scene_Menu_create = Scene_Menu.prototype.create;
     Scene_Menu.prototype.create = function() {
         _Scene_Menu_create.call(this);
         this.createInfoWindow();
         this._InfoWindow.y = this._commandWindow.height;
     }

     Scene_Menu.prototype.createInfoWindow = function() {
         this._InfoWindow = new Window_Info();
         this.addWindow(this._InfoWindow);
     };
     
     var _Scene_Menu_update = Scene_Menu.prototype.update;
     Scene_Menu.prototype.update = function() {
         _Scene_Menu_update.call(this);
         this._InfoWindow.setText();
     };
	
	// ここからメニューウィンドウ作り始まります。
	function Window_Info() {
	    this.initialize.apply(this, arguments);
	}

	Window_Info.prototype = Object.create(Window_Base.prototype);
	Window_Info.prototype.constructor = Window_Info;
	Window_Info.prototype.initialize = function() {
		var x = 0;
		var y = 20;
	    var width = 240;
	    var height = 212;
	    Window_Base.prototype.initialize.call(this, x, y, width, height);
	};

	Window_Info.prototype.setText = function(str) {
		this._text = str;
		this.refresh();
	};
	
	// ウィンドウに載せる内容
	Window_Info.prototype.refresh = function() {
	    this.contents.clear();
		this.changeTextColor(this.textColor(6));
		this.drawText("冒险家等级",3, 1);
		this.resetTextColor();
		this.drawText($gameVariables.value(2) + "",20,40);
		this.changeTextColor(this.textColor(24));
		this.drawText("实际",3, 80);
		this.resetTextColor();
		this.drawText($gameVariables.value(3) + " Point",20,115);



	};
	
	// フォントサイズ
	Window_Info.prototype.standardFontSize = function() {
    	return 26;
    };
	// ウィンドウの透明度
	Window_Info.prototype.standardBackOpacity = function() {
    	return 255;
	};
    // ウィンドウの余白
	Window_Info.prototype.standardPadding = function() {
    	return 18;
	};
	// ウィンドウの色調
	//Window_Info.prototype.updateTone = function() {
    	//this.setTone(64, 0, 128);
	//};
	
})();