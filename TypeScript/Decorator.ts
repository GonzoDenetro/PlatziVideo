class Fields {
    errors: string[];
    input: HTMLInputElement;

    constructor(input: HTMLInputElement){
        this.input = input;
        this.errors = [];

        let errorMessage = document.createElement('p')
        errorMessage.className = 'error-message';

        this.input.parentNode.insertBefore(errorMessage, this.input.nextSibling)

        this.input.addEventListener('input', ()=> {
            this.errors = []
            this.validate()
            errorMessage.innerHTML = this.errors[0] || '';
        })
    }

    validate(){}
}

function RequiredFieldDecorator(field: Fields):Fields {
    let validate = field.validate
        
    field.validate = function(){
        validate()
        let value = field.input.value;

        if(!value){
            field.errors.push('Es requerido este campo')
        }
    }
    return field;
}

function EmailFieldDecorator(field: Fields):Fields {
    let validate = field.validate
        
    field.validate = function(){
        validate()
        let value = field.input.value;

        if(value.indexOf("@") === -1){
            field.errors.push('Debe ser un email')
        }
    }
    return field
}
let emailInput: HTMLInputElement = document.querySelector('.email-input');
let field = new Fields(emailInput)
field = RequiredFieldDecorator(field)
field = EmailFieldDecorator(field)