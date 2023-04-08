const opc = document.getElementById('opc');


const baka = axios.create({
    baseURL: "https://www.mercadobitcoin.net/api/"
})

async function y() {
    const sus = opc.value;

    const a = await baka.get(sus + '/ticker');

    console.log(a);

    bumbum.innerText = a.data.ticker.last
}


bot.onclick = () =>{
    y()
}