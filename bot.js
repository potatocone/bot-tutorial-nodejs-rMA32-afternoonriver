var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
      botRegex = /^\/cool guy/; 
      botRegexDL = /^\/DDL/i;
      botRegexSalt = /^\/salt/;
      botRegexRules = /^\/rules/
      botRegexAd=/^\/advance/; 
      botRegexAd=/^\/vance/; 
      botRegexsc = /^\/SDL/i; 
      botDucking = /^\/ducking/; 
      botRegexP = /^\/PDL/i;  
      botRegexTw = /^\/twitch/i; 
      botRegexSiege = /^\/siege/; 
      botRegexTits = /^\/tits/; 
      botRegexStayMaj = /^\/StayMaj/; 
      botRegexstaymaj = /^\/staymaj/; 
      botRegexstaymaj = /^\/stay maj/; 
      botRegexmaj = /^\/maj/; 
      botRegexjose = /^\/jose's girl/;
      botRegexjose = /^\/joses girl/;
      botRegexdaddy = /^\/call me daddy/;
      botRegexgkys = /^\/gkys/;
      botRegexcheese = /^\/cheese/;
      botRegexboot = /^\/boot/;
      botRegexDLL = /^\/dl/;
      botRegexethan = /^\/ethan/;
      botRegexBeatit = /^\/beatit/;
      botRegexDeal = /^\/dealwithit/;
      botRegexDeal = /^\/dealwitit/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptp/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
  } 
  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    if(0.8 >= Math.random() > 0.6)
      postMessage("http://www.kappit.com/img/pics/201503_1020_iceia_sm.jpg");
    else if(Math.random() >0.8)
      postMessage("http://www.kappit.com/img/pics/201503_1020_dgcga_sm.jpg")
    else
      postMessage("http://i.imgur.com/Bnw1iln.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexRules.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptp/rules");
    this.res.end();
  } 
  else if(request.text && botRegexsc.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/ptp/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/ptp/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  
  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexDLL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.daddyleagues.com/ptp");
    this.res.end();
  } 
  else if(request.text && botDucking.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/320x180.gif.53776560c9984fd59608c337274b0ff8")
    else
      postMessage("https://i.groupme.com/480x360.gif.6baceb3ecda143918edb0fc35b036b46");
    this.res.end();
  }
  else if(request.text && botRegexTits.test(request.text)) {
    this.res.writeHead(200);
    if(0.9 >= Math.Random() > 0.8)
      postMessage("http://i.imgur.com/MiSoSWp.jpg");
    else if(Math.Random() > 0.9)
      postMessage("http://i.imgur.com/kSadnk8.jpg")
    else if(0.8 >= Math.Random() > 0.7)
      postMessage("http://i.imgur.com/4JCb63o.jpg");
    else if(0.7 >= Math.Random() > 0.6)
      postMessage("http://i.imgur.com/F2vcuNf.jpg")
    else if(0.6 >= Math.Random() > 0.5)
      postMessage("http://i.imgur.com/0RE6wLK.jpg") 
    else if(0.5 >= Math.Random() > 0.4)
      postMessage("http://i.imgur.com/znjGVxG.jpg")
    else if(0.3 >= Math.Random() > 0.2)
      postMessage("http://i.imgur.com/zA5taR3.jpg")
    else if(0.2 >= Math.Random() > 0.1)
      postmessage("http://i.imgur.com/G5DkpRH.jpg")
    else
      postmessage("http://i.imgur.com/wnunRus.jpg")
    this.res.end();
  }
  else if(request.text && botRegexjose.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/236x316.jpeg.cded5dc6c9524c68b08461720f481a00");
    this.res.end();
  }
  else if(request.text && botRegexethan.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/1609x2250.jpeg.0ff61195e1ac46cfa9e42c748d434a02");
    this.res.end();
  }
  else if(request.text && botRegexgkys.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/250x188.gif.023685f596164cbc96e9c78ee7c2eb3c");
    this.res.end();
  }
  else if(request.text && botRegexcheese.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/500x477.png.51b13f3706b9414c85ad831ae4352361");
    else if(0.5 >= Math.random() > 0.25)
      postMessage("https://i.groupme.com/400x400.gif.88ed0db90e6a4bfd937588d3ac09e66d")
    else if(Math.random() >0.75)
      postMessage("http://i.imgur.com/MQmtrNp.jpg")
    else
      postMessage("http://cdn.makeagif.com/media/1-24-2014/zaAiBl.gif")
    this.res.end();
  }
  else if(request.text && botRegexDeal.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.imgur.com/C9aUdh.jpg");
    else if(0.5 >= Math.random() > 0.25)
      postMessage("https://heavyeditorial.files.wordpress.com/2014/03/jackson.gif?w=500")
    else if(Math.random() >0.75)
      postMessage("https://heavyeditorial.files.wordpress.com/2014/03/deal-with-it23.gif")
    else
      postMessage("https://heavyeditorial.files.wordpress.com/2014/03/deal-with-it-bra.gif")
    this.res.end();
  }
  else if(request.text && botRegexdaddy.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() >0.6)
      postMessage("https://upload.wikimedia.org/wikipedia/commons/f/f8/Tiger_Woods_drives_by_Allison.jpg");
    else
      postMessage("http://i.telegraph.co.uk/multimedia/archive/02265/tiger-woods_2265368b.jpg")
    this.res.end();
  }
  else if(request.text && botRegexboot.test(request.text)) {
    this.res.writeHead(200);
    if(Math.random() >0.6)
      postMessage("https://upload.wikimedia.org/wikipedia/commons/f/f8/Tiger_Woods_drives_by_Allison.jpg");
    else
      postMessage("http://i.telegraph.co.uk/multimedia/archive/02265/tiger-woods_2265368b.jpg")
    this.res.end();
  }
  else if(request.text && botRegexStayMaj.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    else if(Math.random() >0.75)
      postMessage("https://i.groupme.com/920x701.jpeg.5f98e28dab5a4b7ca34696bd637869b9");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else if(request.text && botRegexmaj.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    else if(Math.random() >0.75)
      postMessage("https://i.groupme.com/920x701.jpeg.5f98e28dab5a4b7ca34696bd637869b9");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else if(request.text && botRegexstaymaj.test(request.text)) {
    this.res.writeHead(200);
    if(0.75 >= Math.random() > 0.5)
      postMessage("https://i.groupme.com/481x360.gif.631cf814f7324b59a74f695b9f4f23dd");
    else if(Math.random() >0.75)
      postMessage("https://i.groupme.com/920x701.jpeg.5f98e28dab5a4b7ca34696bd637869b9");
    else
      postMessage("https://i.groupme.com/574x834.jpeg.9496ab28563842849d906938dfc4ee47");
    this.res.end();
  }
  else if(request.text && botRegexSiege.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("https://i.groupme.com/350x419.png.adc8c73a6c1547e0a9e04320296329f8");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/1279x752.jpeg.aa5d0401e0df495bba4b4e09dc5a6bd7")
    else
      postMessage("https://i.groupme.com/960x960.png.006e180e05d841c6a2962e844bf1e6fd");
    this.res.end();
  }
    else if(request.text && botRegexBeat.test(request.text)) {
    this.res.writeHead(200);
    if(0.6 >= Math.random() > 0.3)
      postMessage("https://i.groupme.com/288x222.gif.c6d8b33d0d464e8e94891ade7d594b82");
    else if(Math.random() >0.6)
      postMessage("https://i.groupme.com/477x241.gif.39d609b4236246b8b78c75325438e385")
    else
      postMessage("https://i.groupme.com/320x240.gif.b46b820b6e9d4de0be8fb90aeee42ff2");
    this.res.end();
  }
  
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
