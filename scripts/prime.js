$(document).ready(function() {
    function largestPrimeFactor(n) {
        var i = 2;
        while (i <= n) {
            if (n % i == 0) {
                n /= i;
            } else {
                i++;
            }
        }
        $(".euler #3").text(i);
    }
    var num = 600851475143;
    largestPrimeFactor(num)

});