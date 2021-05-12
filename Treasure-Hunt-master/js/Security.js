class Security {

    constructor(){

        // Add code to create the input and button elements
        this.access1 = createInput("Code1");
        this.access1.position(100,90);
        this.access1.style('background','white');
        
        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background','lightgrey');

        this.access2 = createInput("Code2");
        this.access2.position(700,190);
        this.access2.style('background','white');
        
        this.button2 = createButton('Check');
        this.button2.position(700,220);
        this.button2.style('background','lightgrey');

        this.access3 = createInput("Code3");
        this.access3.position(100,290);
        this.access3.style('background','white');
        
        this.button3 = createButton('Check');
        this.button3.position(100,320);
        this.button3.style('background','lightgrey');

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            input1 = this.access1.value();
            if(input1 == accessCode1){
                score+=1;
            }
            this.button1.hide();
            this.access1.hide();
        });
        this.button2.mousePressed(()=>{
            input2 = this.access2.value();
            if(input2 == accessCode2){
                score+=1;
            }
            this.button2.hide();
            this.access2.hide();
        });
        this.button3.mousePressed(()=>{
            input3 = this.access3.value();
            if(input3 == accessCode3){
                score+=1;
            }
            this.button3.hide();
            this.access3.hide();
        });
    }
}