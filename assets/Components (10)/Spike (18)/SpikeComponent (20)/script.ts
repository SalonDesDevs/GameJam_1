class SpikeComponentBehavior extends Sup.Behavior
{
  player: Sup.Actor;
  spawn: Sup.Actor;
  scene: string;
  
  awake()
  {
    this.player = Sup.getActor("Player");  
    this.spawn = Sup.getActor("Spawn");
  }

  update()
  {
    if (Sup.ArcadePhysics2D.collides(this.player.arcadeBody2D, this.actor.arcadeBody2D))
    {
      Sup.destroyAllActors();
      Sup.appendScene(this.scene);
      
      this.player.arcadeBody2D.warpPosition(this.spawn.getPosition());
    }
  }
}

Sup.registerBehavior(SpikeComponentBehavior);
