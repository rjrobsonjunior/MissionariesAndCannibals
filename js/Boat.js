const URLboatDeselected = '../assets/barco.png';
const URLboatSelected = '../assets/barco2.png';
const LeftSide = 1;
const RightSide = 2;
const ismoving = 3;

export default class Boat {
    constructor()
    {
        this.isHover = false;
        this.isSelected = false;
        this.Left = LeftSide;
        this.onBoat = 0;
    }

    setOnBoat()
    {
        this.onBoat ++;
    }
    
    getOnBoat()
    {
        return this.onBoat;
    }
}