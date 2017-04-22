class RestarterBehavior extends Sup.Behavior
{
  player: Sup.Actor;
  spawn: Sup.Actor;
  
  awake()
  {
    this.player = Sup.getActor("Player");
    this.spawn = Sup.getActor("Spawn");
  }

  update()
  {
    if (Sup.Input.wasKeyJustPressed("RETURN"))
    {
      this.player.arcadeBody2D.warpPosition(this.spawn.getPosition());
    }
  }
}

Sup.registerBehavior(RestarterBehavior);
