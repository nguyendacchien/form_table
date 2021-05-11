function convert(){
    let money = document.getElementById('input').value;
    let fom = document.getElementById('fom').value;
    let to = document.getElementById('to').value;
    result =money * to/fom;
    // document.getElementById('result').innerHTML = result;
    document.getElementById("result").innerHTML=result;
}