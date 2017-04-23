class SplashBehavior extends Sup.Behavior
{
  next = "Views/Level 1";
  
  awake()
  {
  }

  update()
  {
    if (Sup.Input.wasKeyJustPressed("RETURN"))
    {
        Sup.loadScene(this.next);
    }
  }
}

Sup.registerBehavior(SplashBehavior);
