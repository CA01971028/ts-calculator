class Calculator{
    //足し算（デフォルト指定で８と４の入力）
    public static add( opr1: number=8, opr2: number=4):number{
        return opr1 + opr2
    }
    //引き算(デフォルト指定で８と４の入力)
    public static subtract( opr1: number=8, opr2: number=4):number{
        return opr1 - opr2
    }
    //掛け算(デフォルト指定で８と４の入力)
    public static multiply( opr1: number=8, opr2: number=4):number{
        return opr1 * opr2
    }
    //割り算(デフォルト指定で８と４の入力)
    public static divide( opr1: number=8, opr2: number=4):number{
        return opr1 / opr2
    }
    //乗算（デフォルト指定で８と４の入力）
    public static pow( opr1: number=8, opr2: number=4):number{
        return opr1 ** opr2
    }
    //平方根(デフォルト指定で８の入力)
    public static sqrt( opr1: number=4):number{
        return Math.cbrt(opr1)
    }
    //階乗(デフォルト指定で８の入力)
    public static factorial( opr1: number=8):number{
        return (opr1 != 1) ? opr1 * this.factorial(opr1 - 1) : 1;
    }
}
console.log(Calculator.add())
console.log(Calculator.subtract())
console.log(Calculator.multiply())
console.log(Calculator.divide())
console.log(Calculator.pow())
console.log(Calculator.sqrt())
console.log(Calculator.factorial())

