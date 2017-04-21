class BouncerComponentBehavior extends Sup.Behavior {
  force = 0.65;
  player: Sup.Actor;
  
  awake() {
    this.player = Sup.getActor("Player");  
  }

  update() {
    if (Sup.ArcadePhysics2D.collides(this.player.arcadeBody2D, this.actor.arcadeBody2D)) {
      let or: Sup.Math.Quaternion = this.actor.getOrientation();
      
      if (or.z < -0.6 && or.z > -0.8 && or.w > 0.6 && or.w < 0.8)
      {
          this.player.arcadeBody2D.setVelocityX(this.force * 6);
      }
      else
      {
        this.player.arcadeBody2D.setVelocityY(this.force);
      }
    }
  }
}
Sup.registerBehavior(BouncerComponentBehavior);
