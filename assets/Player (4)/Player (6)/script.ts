const GRAVITY = 0.015;

Sup.ArcadePhysics2D.setGravity(0, -GRAVITY);

class PlayerBehavior extends Sup.Behavior {
  speed = 0.035;
  jumpSpeed = 0.35;
  
  awake() {
  }

  update() {
    Sup.ArcadePhysics2D.collides(this.actor.arcadeBody2D, Sup.ArcadePhysics2D.getAllBodies());
    
    let velocity = this.actor.arcadeBody2D.getVelocity();

    if (Sup.Input.isKeyDown("LEFT"))
    {
      velocity.x -= this.speed;
      this.actor.spriteRenderer.setHorizontalFlip(true);
    }
    else if (Sup.Input.isKeyDown("RIGHT"))
    {
      velocity.x += this.speed;
      this.actor.spriteRenderer.setHorizontalFlip(false);
    }
    else
    {
      velocity.x /= 1.09;
    }
    
    if (velocity.x < 0.001 && velocity.x > -0.001)
    {
      velocity.x = 0;
    }
    
    if (velocity.x > 0.3)
    {
      velocity.x = 0.3;
    }
    
    if (velocity.x < -0.3)
    {
      velocity.x = -0.3;
    }

    let touchBottom = this.actor.arcadeBody2D.getTouches().bottom;
    
    if (touchBottom)
    {
      if (Sup.Input.wasKeyJustPressed("UP"))
      {
        velocity.y = this.jumpSpeed;
        //this.actor.spriteRenderer.setAnimation("Jump");
      }
      else
      {
        if (velocity.x === 0)
        {
          this.actor.spriteRenderer.setAnimation("Idle");
        }
        else
        {
          //this.actor.spriteRenderer.setAnimation("Run");
        }
      }
      
      Sup.ArcadePhysics2D.collides
    }
    else
    {
      if (velocity.y >= 0)
      {
        //this.actor.spriteRenderer.setAnimation("Jump");
      }
      else
      {
        //this.actor.spriteRenderer.setAnimation("Fall");
      }
    }

    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}
Sup.registerBehavior(PlayerBehavior);
