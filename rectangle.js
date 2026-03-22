class reactangle{
    Area(length,breath){
        let area = length * breath;
        return area;
    }

    Perimeter(length,breath){
        let perimeter = 2*(length+breath);
        return perimeter;
    }
}
module.exports = reactangle;