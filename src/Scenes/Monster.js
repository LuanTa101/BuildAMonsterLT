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
        this.noseX = 400;
        this.noseY = 300;
        this.hornX = 410;
        this.hornY = 155;
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
        my.sprite.leftArm.setDepth(2);
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
        my.sprite.fangs = this.add.sprite(this.mouthX, this.mouthY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
        //accessories
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_brown.png");
        my.sprite.horn = this.add.sprite(this.hornX, this.hornY, "monsterParts", "detail_red_antenna_large.png");

        //Event input: smile
        let sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        sKey.on('down', (key, event) => {
            console.log("S key pressed");
            my.sprite.mouth.visible = true;
            my.sprite.fangs.visible = false;
        });

        //Event input: smile
        let fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        fKey.on('down', (key, event) => {
            console.log("F key pressed");
            my.sprite.mouth.visible = false;
            my.sprite.fangs.visible = true;
        });

        //Polling Input: movement
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        //move left
        if (this.aKey.isDown) {
            for (let part in my.sprite) {
                if (my.sprite.hasOwnProperty(part)) {
                    my.sprite[part].x -= 2; 
                }
            }
        }
        // move right
        if (this.dKey.isDown) {
            for (let part in my.sprite) {
                if (my.sprite.hasOwnProperty(part)) {
                    my.sprite[part].x += 2; 
                }
            }
        }
    }

}