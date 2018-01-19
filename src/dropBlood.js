//掉血demo-----进度条的变化
var dropBlood = cc.Sprite.extend({
    blood : 100, //现有血量
    allBlood : 100,
    bloodSprite : null,
    timer : null,
    ctor : function(){
        this._super();
        var bloodBar = new cc.Sprite(res.bloodBar);
        this.addChild(bloodBar);
        var bloodSprite = new cc.Sprite(res.blood);
        bloodSprite.setAnchorPoint(cc.p(0,0));
        bloodSprite.x = -50;
        bloodSprite.y = -15;
        this.bloodSprite = bloodSprite;
        this.addChild(bloodSprite);
    },
    dead:function(){
        this.removeFromParent();
    },
    dropBloodAction_one:function(){
        this.blood-=10;
        if(this.blood <= 0){
            this.dead();
        }
        else{
            this.bloodSprite.setScaleX(this.blood/this.allBlood);
        }
    },
    dropBloodAction_two:function(){
        this.blood-=20;
        if(this.blood <= 0){
            this.dead();
        }
        else{
            this.bloodSprite.setScaleX(this.blood/this.allBlood);
        }
    },
    dropBloodAction_three:function(){
        this.blood-=50;
        if(this.blood <= 0){
            this.dead();
        }
        else{
            this.bloodSprite.setScaleX(this.blood/this.allBlood);
        }
    },
    dropBloodAction_four:function(){
        this.blood-=100;
        if(this.blood <= 0){
            this.dead();
        }
        else{
            this.bloodSprite.setScaleX(this.blood/this.allBlood);
        }
    },
    getBlood : function(){
        return this.blood;
    },
    setBlood : function(blood){
        this.blood = blood;
    },
    getAllBlood : function(){
        return this.allBlood;
    },
    setAllBlood : function(allBlood){
        this.allBlood = allBlood;
    }
});