//2016-11-22崔迎春写
var myChoose = cc.Sprite.extend({
    listener:null,
    ctor:function(fileName,id) {
        this._super(fileName);
        var size = cc.winSize;
        //事件监听器
        var listener = cc.EventListener.create({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,//单点触碰
            swallowTouches: true,//是否向下继续触发事件
            onTouchBegan: function (touch, event) {
                var location = touch.getLocation();//获得点击的坐标
                var target = event.getCurrentTarget();//得到当前的对象(事件源)

                //精确点击
                 var locationInView = target.convertToNodeSpace(location);
                 var targetSize = target.getBoundingBox();
                 var frame = cc.rect(0,0,targetSize.width,targetSize.height);
                 if(cc.rectContainsPoint(target.getBoundingBox(),location)){
                     //王凯名 添加了音效判断2016/12/8
                     if (ls.getItem("isEffectOn") == "YES") {
                         cc.audioEngine.playEffect(res.Select);
                     }
                     cc.log(target.getTag());
                     if(target.getTag() == 1){
                         cc.director.runScene(new MainScene());
                     }else if(target.getTag() == 2){
                         cc.director.runScene(new MainScene2());
                     }else if(target.getTag() == 3){
                         cc.director.runScene(new MainScene3());
                     }
                 return true;
                 }
                return false;//返回false时，后面不执行
            },
            onTouchMoved: function (touch, event) {
            },
            onTouchEnded: function (touch, event) {
            },
            onTouchCancelled: function (touch, event) {
            }
        });
        cc.eventManager.addListener(listener, this);//每创建一个对象就会添加一个监听器
        this.listener = listener;
        return true;
    },
    onExit:function(){
        this._super();
        // cc.log("onExit调用 移除监听器");
        cc.eventManager.removeListener(this.listener);
    }
});