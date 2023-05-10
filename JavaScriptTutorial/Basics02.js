const flag = true;

if(!flag)
{
    console.log("Condition satisfied");
}
else
{
    console.log("Condition NOT satisfied");
};


let i=0;
while(i>10)
{
    console.log("I am inside the WHILE loop "+i);
    i++;
};

do
{
    i++;
    console.log("I am inside the DOWHILE loop "+i);

}while(i>10);


for(let k=0;k<=10;k++)
{
    console.log("FOR loop "+k);
}


//From 1 to 10 give me common multiple values of 2 and 5
console.log("*****");

let n=0;

for(let j=1;j<=100;j++)
{
    
    if(j%2==0 && j%5==0)
    {
    console.log(j);
    n++;
        if(n==3)
        {
            break;
        }
    }
    
}

