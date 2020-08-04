pragma solidity ^0.4.17 < 0.6.12;

contract doc{
    
    string name;
    uint docid;
    int mailno;
    int mobno;
    string symptoms;
    string medications;
    int age;
    string docname;
    
    function Docinfo(string dname,uint id,int mail,int mob,string symp,string medic,int yr,string docna) public{
            dname=name;
            id=docid;
            mail=mailno;
            mob=mobno;
            symp=symptoms;
            medic=medications;
            yr=age;
            docna=docname;
    }
    
    function changeinfo(string dname,string symp,string medic) public{
            dname=name;
            symp=symptoms;
            medic=medications;
        
    }
    
    function getinfo() public view returns(string,uint,int,int,int,string,string,string){
        return(name,docid,mailno,mobno,age, symptoms,medications,docname);
    }
    
}
