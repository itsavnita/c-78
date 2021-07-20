var pictures =["https://us.123rf.com/450wm/matoommi/matoommi1604/matoommi160400146/55425128-baby-in-a-tender-embrace-of-mother-mother-s-day-mother-baby-infant-motherhood-love-innocence.jpg?ver=6","https://www.pngitem.com/pimgs/m/21-219356_clip-art-boneca-em-png-girl-clipart-transparent.png"];
var names =["mother","me"];
var a=0;
function upgrade()
{
    console.log(names[a]);
document.getElementById("img1").src=pictures[a];
document.getElementById("name").innerHTML=names[a];
a=a+1;
}
