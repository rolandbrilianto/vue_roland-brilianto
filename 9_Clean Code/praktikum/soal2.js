//before
class kendaraan{
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan(){
        tambahkecepatan(10);
    }
    tambahkecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main(){
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}

//after
class vehicle{
   var carSpeed = 0;
}

class car extends vehicle {
    void driving(){
        addSpeed(var newSpeed){
            carSpeed = carSpeed + newSpeed
        };
    }
    
}

void main(){
    carInstance = new Car();
    carInstance.driving();
}