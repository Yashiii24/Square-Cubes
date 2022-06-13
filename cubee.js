function sc()
{
rng=prompt('Enter a range'); res=rng.split("-"); if(res.length!=2)
{
alert("invalid range "); return;
}
one=parseInt(res[0]); two=parseInt(res[1]); if(one>two)
{
alert("invalid range "); return;

}
str="<table border=2><tr><th>Number</th><th>Square</th><th>Cube</th></tr>";

for(i=one;i<=two;i++)
{
str=str+"<tr><td>"+i+"<td>"+(i*i)+"<td>"+(i*i*i);
}
document.write(str);

}