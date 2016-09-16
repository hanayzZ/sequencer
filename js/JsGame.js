/********************
@author:meibin
@date:2014-11-03
@功能描述:抽奖跑马灯活动js插件
!********************/

/*
	方法				默认值		选择			类型			说明;

	oTagClass		".card"		必填			string 		奖品列表的类名;
	currClass		"current" 	必填			string 		在移动中高亮显示的标识；
	opacityClass	"opacity" 	必填			string 		用于控制让其他元素暗淡;
	winResult		  2 		必填			number		中奖结果
	currIndex 		  1 		选填			number		默认当前高亮处;
	speed			  300		选填			number		初始的运动速度;
	EndCycle		  3 		选填			number		最少要跑的圈数;
	startFun		 null 		选填			function	最少要跑的圈数;
	endFun			 null 		选填			function	运动结束后的回调;
	defeatFun		 null 		选填			function	抽奖失败后的回调;

!**/

(function(window,undefined){

	//模拟jquery中的$.extend方法;
	function extend(obj,obj2){
		for(var attr in obj2){
			obj[attr] = obj2[attr];
		}
	};
	function getClass(oPar ,sClass){
		var oChild = oPar.getElementsByTagName('*');
		var oResult = [];
		var reg = new RegExp('\\b'+sClass+'\\b', 'i');
		for(var i =0;i<oChild.length;i++){
			if(reg.test(oChild[i].className)){
				oResult.push(oChild[i]);
			};
		};
		return oResult;
	};

	//抽奖游戏
	function Game(options){
		this.settings = {
			oTagClass : ".card",//全部跑马灯的类名; 只能是类名;
			currClass : "current", //部分需求需要，结果显示的类;
			opacityClass:"opacity", //用于控制让其他元素暗淡;
			currIndex : 0,//默认当前高亮处
			speed : 300,//初始的运动速度;
			EndCycle : 4,//最少要跑的圈数
			startFun : null,//运动开始前的回调;
			endFun : null,//运动结束后的回调;
			defeatFun : null,//中奖失败后的回调;
			winResult : 2 //中奖结果

		};
		extend(this.settings,options);
		window.oResCode = 0; //中奖结果的标识，该值必须挂在window下;  有三个值 ，0表示初始值，1表示中奖成功，-1表示失败;
		this.aClass = this.toSwitch(this.settings.oTagClass); //获得所有class;
		this.cycle = 0;
		
		this.EndIndex = 1;
		this.max = this.aClass.length;//跑马灯元素的总个数;
		this.timer = null;
		this.quick = 0;
		this.PrevIndex = 0;
		this.site = parseInt((this.max / 2+2)-1);//变速的位置;
		this.flag =false;
		this.iNow = 0;
		this.iNum = 0;
		this.iB = 1;
		window.STOPFLAG = true; //用全大写是避免与其他变量名冲突;
	}

	Game.prototype = {
		
		init:function(){
			var _this = this;
			this.cycle = 0;
			this.flag =false;
			this.iNow = 0;
			this.iNum = 0;
			this.iB = 1;

			//开始前的回调
			if(_this.settings.startFun && _this.settings.startFun(STOPFLAG) === "function"){
				_this.settings.startFun(STOPFLAG);
			};

			if(!window.STOPFLAG){
				return ;
			};
			
			this.delClass();//初始删除class
			function num(obj){
				if(obj < 0){
					return obj.replace("-","");
				}else{
					return obj;
				}
			}
			//设置变速位置;
			if(this.settings.winResult > this.site){
				this.EndIndex = this.site;
			}else{
				this.EndIndex = this.settings.winResult >= (this.max/4)  ? parseInt(num((this.settings.winResult -10).toString())) : 6;
				console.log(this.EndIndex)
				// this.EndIndex =this.settings.winResult+this.site;
			};

			//这里是定时器，上面是是一个回调
			_this.timer = setInterval(function(){
				
				_this.toStart();
			},_this.settings.speed);
			
			return this;
		},
		toStart : function(){
			var _this = this;
			//未中奖时
			if(_this.flag == false){
				_this.iB=-1;
			}else if(_this.flag == true){ //已经拿到结果，在减速
				_this.iB = 1;
			}
			_this.iNum+=_this.iB;
			if(window.oResCode == 0 || _this.flag == false){
				
				//走元素个数的一半后开始变速运动;
				if(_this.quick >= _this.site && _this.flag == false){

					clearInterval(_this.timer);
					_this.settings.speed = ((110+_this.iNum) < 70 ? 70 :(110+_this.iNum));//让值 越来越小，速度变快;

					_this.timer = setInterval(function(){
						_this.toStart();
					},_this.settings.speed);
				};

				if(_this.settings.EndCycle >= 4 && window.oResCode != 1){
					window.oResCode = 1;
				};
				//走N圈后开始减速后，并且已知道中奖数据成功;
				if(_this.cycle >= _this.settings.EndCycle+1 && _this.settings.currIndex-1 >= (_this.EndIndex= _this.EndIndex-5 < 0 ? 0 : _this.EndIndex-5) && window.oResCode != 0){

					clearInterval(_this.timer);

					switch(window.oResCode){

						//中奖了
						case 1 :
							_this.settings.speed =(280+_this.iNum);//让值 越来越大，速度变慢;
							_this.flag= true;
							_this.timer = setInterval(function(){
								_this.toStart();
							},_this.settings.speed);

						break; 
						//未中奖;
						case -1 :

							_this.quick = 0;
							_this.delClass();//初始删除class
							//抽奖失败后的回调
							if(_this.settings.defeatFun && _this.settings.defeatFun(STOPFLAG) === "function"){
								_this.settings.defeatFun(STOPFLAG);
							};
							//_this.removeClass(_this.aClass[_this.PrevIndex],this.settings.currClass);//移动过程中删除上一个的类;
							return ;
						break;

					};

				};
			};

			//每走一圈，加一次;
			if(_this.settings.currIndex >= _this.max){
				_this.settings.currIndex = 0;
				_this.cycle++; //走完了一圈才加一次;
			};

			//得到结果了，并选中中奖结果的位置; 同时清除定时器;本次转动结束;
			if(_this.settings.currIndex == _this.settings.winResult-1 && _this.flag == true){
				_this.quick = 0;
				clearInterval(_this.timer);
				//结束后的回调
				if(_this.settings.endFun && _this.settings.endFun() === "function"){
					_this.settings.endFun();
				};
			};

			_this.addClass(_this.aClass[(_this.settings.currIndex)],this.settings.currClass);//移动过程中设置当前第N个添加类;
			if(_this.settings.currIndex > 0){
				_this.PrevIndex = _this.settings.currIndex-1;
			}else{
				_this.PrevIndex = _this.max-1;
			}
			_this.removeClass(_this.aClass[_this.PrevIndex],this.settings.currClass);//移动过程中删除上一个的类;

			_this.settings.currIndex++;
			_this.quick++;
			_this.iNow++;
			return this;
		},
		//简单模拟jquery类选择器;
		toSwitch : function(obj){

			switch(obj.charAt(0)){

				case "#":
					return  document.getElementById(obj.substring(1));
				break;
				case ".":
					return  getClass(document,obj.substring(1));
				break;
				default : //默认获取class;
					return  getClass(document,obj.substring(1));
				break;
			}
			return this;
		},
		//添加类的方法;
		addClass : function(ele,addClass){
			 if (!ele || !addClass || (ele.className && ele.className.search(new RegExp("\\b" + addClass + "\\b")) != -1)) return;
			 ele.className += (ele.className ? " " : "") + addClass;
			return this;
		},
		removeClass:function(ele,removeClass){
			if (!ele || !removeClass || (ele.className && ele.className.search(new RegExp("\\b" + removeClass + "\\b")) == -1)) return;
				ele.className = ele.className.replace(new RegExp("\\s*\\b" + removeClass + "\\b", "g"), "");
			return this;
		},
		//初始删除class
		delClass:function(){

			for(var i=0;i<this.aClass.length;i++){
				this.removeClass(this.aClass[i],this.settings.currClass);
				this.addClass(this.aClass[i],this.settings.opacityClass);
			};
			return this;
		}
	};
	window.Game = Game;
})(window);