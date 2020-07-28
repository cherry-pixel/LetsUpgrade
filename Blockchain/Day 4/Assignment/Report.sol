pragma solidity ^0.4.17 < 0.6.12;

contract ReportCard{
    
    string name;
    uint roll;
    int maths;
    int science;
    int english;
    int social;
    int batch;
    string result;
    
    function Report(string studname,uint studId,int math,int sci,int eng,int soc,int grp,int res) public{
       
       name = studname;
       roll = studId;
       maths = math;
       science = sci;
       english = eng;
       social = soc;
       batch = grp;
       
       res = (math+sci+eng+soc)/4;
       if(res>50)
            result="pass";
       else
            result="fail";
    }
    
    function changeMarks(int math,int sci,int eng,int soc,int res) public{
        
        maths = math;
        science = sci;
        english = eng;
        social = soc;
        res = (math+sci+eng+soc)/4;
        if(res>50)
            result="pass";
        else
            result="fail";
    }
    
    function getReportCard() public view returns(string,uint,int,int,int,int,int,string){
        
        return(name,roll,maths,science,english,social,batch,result);
    }
    
}
