function daireAlan(yariCap){
    return 3.14 * (yariCap**2)
    
}

const yariCap = process.argv.slice(2)

console.log(`Yarıçapı ${yariCap} olan dairenin alanı: ${daireAlan(yariCap)} şeklinde olmalıdır.`)
