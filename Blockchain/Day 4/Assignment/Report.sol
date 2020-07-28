pragma solidity ^0.4.17 < 0.6.12;

contract ReportCard{
    
    string name;
    uint Id;
    int maths;
    int science;
    int english;
    string result;
    
    function Report(string studname,uint studId,int math,int sci,int eng,int res) public{
       name = studname;
       Id = studId;
       maths = math;
       science = sci;
       english = eng;
       
       res = (math+sci+eng)/3;
       if(res>50)
            result="pass";
       else
            result="fail";
    }
    
    function changeMarks(int math,int sci,int eng,int) public{
        maths = math;
        science = sci;
        english = eng;
    }
    function getReportCard() public view returns(string,uint,int,int,int,string){
        return(name,Id,maths,science,english,result);
    }
    
}