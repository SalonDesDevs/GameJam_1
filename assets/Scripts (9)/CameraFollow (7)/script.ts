class CameraFollowBehavior extends Sup.Behavior
{
  player;
  
  awake()
  {
    this.player = Sup.getActor("Player");
  }

  update()
  {
    //this.actor.setX(this.player.getX());
    //this.actor.setY(this.player.getY());
    this.actor.setPosition(this.player.getX(), this.player.getY() + 4.5, this.actor.getZ());
  }
}

Sup.registerBehavior(CameraFollowBehavior);
