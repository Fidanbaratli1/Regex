let FINArray=["7NVBAYH","1AXTHX0","1JF92CH"];
let flag=true;
let Fincode=window.prompt("Enter your fincode");
const regex=/^([0-9|A-H|a-H|J-N|j-n|P-Z|p-z]{7})$/;
do{
    if(regex.test(FINcode)){
        for(let i=0;i<FINArray;i++){
            if(FINcode!=FINArray[i]){
                windows.alert("FINcode not found");
            }
            else if(FINcode==FINArray[i]){
                windows.alert("user found");
            }
            else{
                windows.alert("wrong format");
            }
        }
    }
}
while(flag);