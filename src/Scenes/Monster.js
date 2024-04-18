class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        //body
        this.bodyX = 400;
        this.bodyY = 300;

        //arms
        this.rightArmX = 480;
        this.rightArmY = 220;
        this.leftArmX = 320;
        this.leftArmY = 350;

        //legs
        this.rightLegX = 460;
        this.rightLegY = 480;
        this.leftLegX = 340;
        this.leftLegY = 480;

        //eyes
        this.rightEyeX = 430;
        this.rightEyeY = 200;
        this.leftEyeX = 370;
        this.leftEyeY = 200;

        //mouth
        this.mouthX = 400;
        this.mouthY = 350;

        //accessory
        this.access1 = 400;

        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_redE.png");
        //right arm
        my.sprite.rightArm = this.add.sprite(this.rightArmX, this.rightArmY, "monsterParts", "arm_whiteA.png");
        my.sprite.rightArm.flipY = true;
        //left arm
        my.sprite.leftArm = this.add.sprite(this.leftArmX, this.leftArmY, "monsterParts", "arm_whiteA.png");
        my.sprite.leftArm.flipX = true;
        //right leg
        my.sprite.rightLeg = this.add.sprite(this.rightLegX, this.rightLegY, "monsterParts", "leg_yellowA.png");
        //left leg
        my.sprite.leftLeg = this.add.sprite(this.leftLegX, this.leftLegY, "monsterParts", "leg_greenB.png");
        my.sprite.leftLeg.flipX = true;
        //eyes
        my.sprite.rightEye = this.add.sprite(this.rightEyeX, this.rightEyeY, "monsterParts", "eye_red.png");
        my.sprite.leftEye = this.add.sprite(this.leftEyeX, this.leftEyeY, "monsterParts", "eye_red.png");
        //smile mouth 
        my.sprite.mouth = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_happy.png");
        //fangs mouth
        my.sprite.mouth1 = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.mouth1.visible = false;

        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}