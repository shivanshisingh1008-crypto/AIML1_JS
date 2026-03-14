function calculateResult()
{
    const n=document.getElementById("subjects").value;
    let i;
    let total=0;   //every var which is not initialised is treated as undefined
    for(i=0;i<n;i++)
    {
        let x=parseFloat(prompt("Enter the subject number"+(i+1)));    
        total+=x;
    }

   
    let avg=total/n;

    let grade;
    if(avg>90)
        grade='A+';
    else if(avg>80)
        grade='A';
    else if(avg>70)
        grade='B';
    else if(avg>60)
        grade='C';
    else if(avg>50)
        grade='D';
    else if(avg>40)
        grade='E';
    else
        grade='E';

    let reslt;
    if(avg>40)
        reslt="PASS";
    else
        reslt="FAIL";
   
    let result=document.getElementById("result").innerHTML="Total Marks= "+ total + "<br/>"+ "Average Marks= " +   
    avg.toFixed(2) + "<br/>" + "Grade =" + grade + "<br/>" + "Result=" + reslt+ "<br/>";

}