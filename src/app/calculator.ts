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

}
console.log(Calculator.add())
console.log(Calculator.subtract())
console.log(Calculator.multiply())
console.log(Calculator.divide())
console.log(Calculator.pow())
