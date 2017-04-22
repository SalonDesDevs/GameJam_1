const GRAVITY = 0.015;

Sup.ArcadePhysics2D.setGravity(0, -GRAVITY);

class PlayerBehavior extends Sup.Behavior
{
  minSpeed = 0.0125;
  speed = 0.0325;
  maxSpeed = 0.15;
  inertia = 1.225;
  jumpSpeed = 0.3;
  
  awake()
  {
  }

  update()
  {
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
      velocity.x /= this.inertia;
    }
    
    if (velocity.x < this.minSpeed && velocity.x > -this.minSpeed)
    {
      velocity.x = 0;
    }
    
    if (velocity.x > this.maxSpeed)
    {
      velocity.x = this.maxSpeed;
    }
    
    if (velocity.x < -this.maxSpeed)
    {
      velocity.x = -this.maxSpeed;
    }

    let touchBottom = this.actor.arcadeBody2D.getTouches().bottom;
    
    if (touchBottom)
    {
      if (Sup.Input.wasKeyJustPressed("UP"))
      {
        velocity.y = this.jumpSpeed;
        this.actor.spriteRenderer.setAnimation("Jump");
      }
      else
      {
        if (velocity.x === 0)
        {
          this.actor.spriteRenderer.setAnimation("Idle");
        }
        else
        {
          this.actor.spriteRenderer.setAnimation("Run");
        }
      }
      
      Sup.ArcadePhysics2D.collides
    }
    else
    {
      if (velocity.y >= 0)
      {
        this.actor.spriteRenderer.setAnimation("Jump");
      }
      else
      {
        this.actor.spriteRenderer.setAnimation("Fall");
      }
    }

    this.actor.arcadeBody2D.setVelocity(velocity);
  }
}

Sup.registerBehavior(PlayerBehavior);
