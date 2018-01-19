
var IntroductionLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //图鉴背景图层
        var pokedexbg = new cc.Sprite(res.pokedexbg);
        pokedexbg.x=size.width*0.5;
        pokedexbg.y=size.height*0.5;
        //pokedexbg.setAnchorPoint(0,0);
        this.addChild(pokedexbg);

        //展示框1
        var displaycell = new cc.Sprite(res.display1);
        displaycell.setAnchorPoint(0,0);
        var localPosition =pokedexbg.convertToNodeSpace(displaycell.getPosition());
        displaycell.x=pokedexbg.width*0.10;
        displaycell.y=pokedexbg.height*0.28;
        pokedexbg.addChild(displaycell);

        //展示框2
        var displaytum = new cc.Sprite(res.display2);
        displaytum.setAnchorPoint(0,0);
        var localPosition =pokedexbg.convertToNodeSpace(displaytum.getPosition());
        displaytum.x=pokedexbg.width*0.55;
        displaytum.y=pokedexbg.height*0.29;
        pokedexbg.addChild(displaytum);

        //细胞
        var cellItem = new cc.MenuItemImage(res.pokecell,res.pokecell2, function () {
            //王凯名 添加了音效判断2016/12/8
            EffectEngine.playEffect(res.Select);
            //细胞详情页接口
            cc.director.runScene(new CellDetailScene());
        }, this);
        var menu1 = new cc.Menu(cellItem);
        menu1.x = displaycell.width*0.55;
        menu1.y = displaycell.height * 0.5;
        displaycell.addChild(menu1);

        //肿瘤
        var tumourItem = new cc.MenuItemImage(res.poketumour,res.poketumour2, function () {
            //王凯名 添加了音效判断2016/12/8
            EffectEngine.playEffect(res.Select);
            //肿瘤详情页接口
            cc.director.runScene(new TumourDetailScene());
        }, this);
        var menu2 = new cc.Menu(tumourItem);
        menu2.x = displaytum.width*0.5;
        menu2.y = displaytum.height * 0.5;
        displaytum.addChild(menu2);


        //查看细胞按钮
        var cellbtnItem = new cc.MenuItemImage(res.pokecellbtn, res.pokecellbtn2,function () {
            //王凯名 添加了音效判断2016/12/8
            EffectEngine.playEffect(res.Select);
            //细胞详情页接口
            cc.director.runScene(new CellDetailScene());
        }, this);
        var menu3 = new cc.Menu(cellbtnItem);
        menu3.x = pokedexbg.width*0.30;
        menu3.y = pokedexbg.height * 0.2;
        pokedexbg.addChild(menu3);
        cc.scaleBy()


        //查看肿瘤按钮
        var tumourbtnItem = new cc.MenuItemImage(res.poketumourbtn,res.poketumourbtn2, function () {
            //王凯名 添加了音效判断2016/12/8
            EffectEngine.playEffect(res.Select);
            //肿瘤详情页接口
            cc.director.runScene(new TumourDetailScene());
        }, this);
        var menu4 = new cc.Menu(tumourbtnItem);
        menu4.x = pokedexbg.width*0.72;
        menu4.y = pokedexbg.height * 0.2;
        pokedexbg.addChild(menu4);

        //返回按钮
        var press= new cc.MenuItemImage(res.pressed, res.pressed2, function () {
            //王凯名 添加了音效判断2016/12/8
            EffectEngine.playEffect(res.Select);
            //详情介绍接口
            // cc.log("显示详情");
            cc.director.runScene(new LevelScene());
        }, this);
        press.x = pokedexbg.width*0.1;
        press.y = pokedexbg.height*0.93;
        var menu0 = new cc.Menu(press);
        menu0.x = 0;
        menu0.y = 0;
        pokedexbg.addChild(menu0);

        return true;
    }
});

var IntroductionScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new IntroductionLayer();
        this.addChild(layer);
    }
});

//获取音效设置 王凯名
var EffectEngine = function(){};
EffectEngine.playEffect = function(url){
    if (cc.sys.localStorage.getItem("isEffectOn") == "YES") {
        cc.audioEngine.playEffect(url);
    }
};
