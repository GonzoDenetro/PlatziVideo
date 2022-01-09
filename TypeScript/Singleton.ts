class Singleton {
    private static instancia:Singleton;

    private constructor(){
        
    }

    static getInstance(){
        if(!Singleton.instancia){
            Singleton.instancia = new Singleton()
        }
        return Singleton.instancia
    }
}

export default Singleton