class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        this.ligado = false;
    }
}

const d1 = new DispositivoEletronico('Smartphone');
d1.ligar();
d1.ligar();
d1.desligar();
console.log(d1);

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('Motorola', 'Azul', 'G8 - Plus');
console.log(s1);

class Tablet extends DispositivoEletronico {
    constructor(nome, flWiFi) {
        super(nome);
        this.flWiFi = flWiFi;
        this.flBloqueado = false;
    }

    bloquear() {
        if(this.flBloqueado) {
            console.log(`${this.nome} já está bloqueado.`);
            return;
        }
        this.flBloqueado = true;
    }
    
    desbloquear() {
        if(!this.flBloqueado) {
            console.log(`${this.nome} já está desbloqueado.`);
            return;
        }
        this.flBloqueado = false;
    }
}

const t1 = new Tablet('Tablet', true);
t1.ligar();
t1.desbloquear();
t1.bloquear();
t1.desbloquear();
console.log(t1);