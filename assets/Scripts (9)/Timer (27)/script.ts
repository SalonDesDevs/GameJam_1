const GOLD = new Sup.Color(0xffef00);
const SILVER = new Sup.Color(0x696969);
const BRONZE = new Sup.Color(0x5f451c);
const NONE = new Sup.Color(0xffffff);

class TimerBehavior extends Sup.Behavior
{

  goldM = 0;
  goldS = 35;
  goldCS = 0;
  next: string;
  
  private timer: Sup.Actor;
  private end: Sup.Actor;
  private player: Sup.Actor;
  private timeStart: number;
  private gold: Date;
  private won = false;
  
  awake()
  {
    this.timer = Sup.getActor("Timer");
    this.end = Sup.getActor("End");
    this.player = Sup.getActor("Player");
    this.timeStart = Date.now();
    this.gold = new Date(this.goldM * 60000 + this.goldS * 1000 + this.goldCS * 10);
  }

  update()
  {
    if (!this.won)
    {
      let date = new Date(Date.now() - this.timeStart);
      this.timer.textRenderer.setText(this.timeValue(date.getMinutes()) + ":" + this.timeValue(date.getSeconds()) + ":" + this.timeValue(Math.floor(date.getMilliseconds() / 10)));

      if (date.getTime() < this.gold.getTime())
      {
          this.timer.textRenderer.setColor(GOLD);
      }
      else if (date.getTime() < this.gold.getTime() * 1.3)
      {
          this.timer.textRenderer.setColor(SILVER);
      }
      else if (date.getTime() < this.gold.getTime() * 1.575)
      {
          this.timer.textRenderer.setColor(BRONZE);
      }
      else
      {
          this.timer.textRenderer.setColor(NONE);
      }
      
      if (Sup.ArcadePhysics2D.collides(this.player.arcadeBody2D, this.end.arcadeBody2D))
      {
        this.won = true;
        this.timeStart = Date.now();
      }
    }
    else if (Date.now() - this.timeStart >= 2500 && this.next !== undefined)
    {
      Sup.loadScene(this.next);
    }
  }
  
  private timeValue(value: number): String
  {
    let val = value.toString();
    
    if (val.length == 1)
    {
        val = "0" + val;
    }
    
    return val;
  }
}

Sup.registerBehavior(TimerBehavior);
