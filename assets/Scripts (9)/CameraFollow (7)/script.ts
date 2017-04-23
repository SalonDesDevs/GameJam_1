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
    
    let end = Sup.getActor("EndGUI");
    
    if (end != null)
    {
      end.setPosition(this.player.getX(), this.player.getY());
    }
  }
}

Sup.registerBehavior(CameraFollowBehavior);
