class CameraFollowBehavior extends Sup.Behavior
{
  player: Sup.Actor;
  timer: Sup.Actor;
  
  awake()
  {
    this.player = Sup.getActor("Player");
    this.timer = Sup.getActor("Timer");
  }

  update()
  {
    //this.actor.setX(this.player.getX());
    //this.actor.setY(this.player.getY());
    this.actor.setPosition(this.player.getX(), this.player.getY(), this.actor.getZ());
    this.timer.setPosition(this.actor.getX(), this.actor.getY() + 5);
    Sup.log(this.timer.getPosition());
  }
}

Sup.registerBehavior(CameraFollowBehavior);
