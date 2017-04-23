const GOLD = new Sup.Color(0xffef00);
const SILVER = new Sup.Color(0x696969);
const BRONZE = new Sup.Color(0x5f451c);

class TimerBehavior extends Sup.Behavior
{

  goldM = 0;
  goldS = 35;
  goldCS = 0;
  
  private timer: Sup.Actor;
  private timeStart: number;
  private gold: Date;
  
  awake()
  {
    this.timer = Sup.getActor("Timer");
    this.timeStart = Date.now();
    this.gold = new Date(this.goldM * 60000 + this.goldS * 1000 + this.goldCS * 10);
  }

  update()
  {
    let date = new Date(Date.now() - this.timeStart);
    this.timer.textRenderer.setText(this.timeValue(date.getMinutes()) + ":" + this.timeValue(date.getSeconds()) + ":" + this.timeValue(Math.floor(date.getMilliseconds() / 10)));
    
    if (date.getTime() < this.gold.getTime())
    {
        this.timer.textRenderer.setColor(GOLD);
    }
    else if (date.getTime() < this.gold.getTime() * 1.35)
    {
        this.timer.textRenderer.setColor(SILVER);
    }
    else if (date.getTime() < this.gold.getTime() * 1.7)
    {
        this.timer.textRenderer.setColor(BRONZE);
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
