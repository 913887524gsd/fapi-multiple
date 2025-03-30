---
geometry: a4paper,left=2cm,right=2cm,top=2.5cm,bottom=2.5cm
mainfont: "Times New Roman"  # 用于西文字体
CJKmainfont: "SimSun"  # 主要用于中文
header-includes: |
  \usepackage{xeCJK}
  \setCJKmainfont{SimSun}
  \XeTeXlinebreaklocale "zh"
  \XeTeXlinebreakskip = 0pt plus 1pt
  \linespread{1.5}
  \setlength{\parindent}{2em}
---

# 输入

### BOSS等级

在游戏里面你会在最上方看到这样的界面。

![](./images/bosslevel.png)

我们只需要关注最中间的那行`The Path Macker(T37)`，这里的T37就是BOSS的等级。

### 你的等级

在游戏的左上方有这么一个界面。

![](./images/urlevel.png)

其中的34就是你的等级，340就是你当前等级经验条下的经验值。

### 你的金豆/加点

点开加点界面。

![](./images/points.png)

左上角的就是你现有的金豆数量，中间的五个数字就是你的加点。

关于加点的输入你可以有以下的方式：

```txt
1 2 3 4 5
1,2,3,4,5
1.2.3.4.5
1-2-3-4-5
```

只要数字之间用非数字字符隔开系统就能自动识别，如果你填多了/填少了系统会自动帮你纠正到5个而且缺省的数字默认填成0。

### BUFF计算

在游戏中你会看到这样的buff，它们的最底框是绿色。

![](./images/buff.png)

这三个分别代表了攻击buff、经验buff和金豆buff，这三个是可以点开的：

![](./images/goldsoul.png)

点开就可以看到金魂的数量，然后计算总量后按照网站上的公式计算得到buff。

### 排行榜

![](./images/leaderboard.png)

点开排行榜就能查看到前1000名的排名数据以及它们的伤害，如果你找不到第n个排名对应的伤害，那么把n稍微减小看看能不能找到，因为是并列的原因。

跟加点一样，如果你输入的数字不是7个，就会自动帮你补充/截断到7个，补充的部分填0。

<div STYLE="page-break-after: always;"></div>

# 金豆计算加点

### 普通计算

![](./images/gptodamage1.png)

将上面输入部分数据填好后就可以开始计算了，普通计算会在**尽可能**花光你的金豆的情况下计算你可能的加点情况并按照伤害和排名计算你这轮的收益。

其中得金豆和得经验后面的括号是计算你下轮的金豆/经验情况。

### 计算包含升级项

![](./images/includeingupgrades.png)

当你加点有一定的倾向性时（比如有时候集中经济，有时候集中伤害），就点击这个按钮让你的计算仅包含这些升级项。

### 比较加点

![](./images/buildcomparison.png)

这个功能为了让你的所有加点跟一个目标加点进行比较，这样能够节省你的计算比较时间。方便跟别人比。

![](./images/gptodamage2.png)

# 查看消耗

![](./images/showcost.png)

这个能够查看你当前加点的消耗，攻击的性价比和未来加点需求

如果你点击了`比较加点`选项，就会比较两个加点之间的消耗差距

# 伤害可能加点

### 输入

![](./images/dmgtopoints1-zh.png)

根据当前局势上的情况你可以通过伤害反推某个人的加点，输入若干个伤害，中间用非位数字字符隔开，然后你还可以限制花费节省搜索解空间的时间。

由于等级会影响伤害，所以需要在遍历等级范围处填写等级的范围。

### 计算

![](./images/dmgtopoints2-zh.png)

计算会反推加点，还能根据你目前的加点计算追赶要花多少经济。