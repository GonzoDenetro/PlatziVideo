console.log('Observer');

interface Observer {
    update: (data: any) => void;
}

interface Subject {
    suscribe: (observer: Observer) => void;
    unsuscribe: (observer: Observer) => void;
}

class Sucriptions implements Subject{
    observers: Observer[] = [];
    observador: Observer;
    
    constructor(){
        const elementoSujeto: HTMLInputElement = document.querySelector('.price')

        elementoSujeto.addEventListener('input', () => {
            this.notify(elementoSujeto.value)
        })
    }

    suscribe(observer: Observer){
        this.observers.push(observer);
    }

    unsuscribe(observer: Observer){
        const index = this.observers.findIndex(obs => obs === observer);
        this.observers.splice(index, 1)
    }

    notify(data: any){
        this.observers.forEach(obs => obs.update(data))
    }
}

class DisplaySucription implements Observer{
    private elementObs: HTMLElement;
    constructor(){
        this.elementObs = document.querySelector('.value')
    }
    update(data: any){
        this.elementObs.innerHTML = `$${data}`
    }
}

const value = new Sucriptions()
const display = new DisplaySucription()
value.suscribe(display)
