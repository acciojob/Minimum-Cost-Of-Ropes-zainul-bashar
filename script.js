//your code here
const form=document.getElementById("form");
form.addEventListener("submit",function(event){
	event.preventDefault();
	var inputValue=document.querySelector("input").value;
	var arr=inputValue.split(",");
	arr.sort(function(a,b){
		return a-b;
	})
	var cost=0;
while(arr.length>1){
	var res=Number(arr[0])+Number(arr[1]);
	arr.splice(0,2);
	arr.push(res);
	cost+=res;
	arr.sort(function(a,b){
		return a-b;
	});
}
	document.getElementById("result").textContent=cost;
})


// document.getElementById("result").textContent=cost;