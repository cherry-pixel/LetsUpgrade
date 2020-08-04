pragma solidity ^0.4.17 < 0.6.12;

contract car{
    
    string cname;
    uint cid;
    int cno;
    string ownername;
    int mobno;
    int age;

    
    function carinfo(string name,uint id,int no,string oname,int mob,int yr) public{
        name=cname;
        id=cid;
        no=cno;
        oname=ownername;
        mob=mobno;
        yr=age;
    }
    
    function changeinfo(string oname,int mob,int yr) public{
        oname=ownername;
        mob=mobno;
        yr=age;
    }
    
    function getinfo() public view returns(string,uint,int,int,int,string){
        return(cname,cid,cno,mobno,age,ownername);
    }
    
}
