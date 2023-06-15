//Funcion para llevar el binario bincode a decimal
function binToDec(bincode){

	let revBinCodeArr = bincode.split('').reverse()
	let dec=0

	for(let i=0; i<revBinCodeArr.length; i++){
		if(revBinCodeArr[i] === '0'){
			dec+=0
		}
		else if(revBinCodeArr[i] === '1'){
			if(i===0){
				dec+=1
			}
			else{
				dec += Number(revBinCodeArr[i])*(twoPot(i))
			}
		}
		else{
			return 'El codigo no es un Binario'
		}
	}


	return dec
}


//Funcion para llevar el decimal decCode a Binario
function decToBin(decCode){
	let binary = ''
	let div = decCode

	for(let i=0;div > 0;i++){
		if(div%2 === 0){
			binary += '0'
			div = div/2
		}
		else{
			binary += '1'
			div = Math.floor(div/2)
		}
	}

	binary = reverse(binary)

	return binary
}

function reverse(strings){
	let str = strings.split('').reverse()
	let revstr=''

	for(let i=0; i<str.length; i++){
		revstr+=str[i]
	}
	return revstr
}


//Funcion para elevar 2 al exponente de int
function twoPot(int){
	let potTwo = 2
	for(let i=2; i<=int; i++){
		potTwo*=2
	}
	return potTwo
}

exports.binToDec = binToDec
exports.decToBin = decToBin