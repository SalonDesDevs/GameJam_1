const KEYS = ["Q", "S", "D", "F", "G", "H", "J", "K", "L", "M"];

class LockComponentBehavior extends Sup.Behavior
{
  oldX: number;
  oldY: number;
  queue: string[];
  player: Sup.Actor;
  
  awake()
  {
    this.player = Sup.getActor("Player");  
  }

  update()
  {
    if (Sup.ArcadePhysics2D.collides(this.player.arcadeBody2D, this.actor.arcadeBody2D) && this.queue === undefined)
    {
      this.oldX = this.player.arcadeBody2D.getVelocityX();
      this.oldY = this.player.arcadeBody2D.getVelocityY();
      
      Sup.ArcadePhysics2D.setGravity(0, 0);
      
      this.queue = KEYS.slice(0);
    }
    
    if (this.queue !== undefined && this.queue.length != 0)
    {
      this.player.arcadeBody2D.setVelocity(new Sup.Math.Vector2(0, 0));
      
      if (Sup.Input.isKeyDown(this.queue[0]))
      {
        this.queue.splice(0, 1);
      }
    }
    
    if (this.queue !== undefined && this.queue.length == 0)
    {
      Sup.ArcadePhysics2D.setGravity(0, -0.015);
      this.player.arcadeBody2D.setVelocity(new Sup.Math.Vector2(this.oldX, this.oldY));
      this.actor.destroy();
    }
  }
}

Sup.registerBehavior(LockComponentBehavior);
